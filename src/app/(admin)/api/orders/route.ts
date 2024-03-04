import { markOrderAsPaid } from '@lib/orders';
import { IPayfastOrderResponse } from '@types';
import formDataToObject from '@utils/utils';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';

const allowedReferrers = [
  'https://www.payfast.co.za',
  'https://w1w.payfast.co.za',
  'https://w2w.payfast.co.za',
  'https://sandbox.payfast.co.za'
];


export async function POST(request: Request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  if (!referer || !allowedReferrers.includes(referer)) {
    console.error('Invalid referer');
    return Response.json({ message: 'Unauthorized' }, { status: 403 });
  }

  let formData;;
  try {
    formData = await request.formData();
  } catch (e) {
    console.error('Error parsing form data', e);
    return Response.json({ message: 'Error' }, { status: 500 });
  }

  if (!formData) {
    return Response.json({ message: 'No data' }, { status: 400 });
  }

  const payfastOrderResponse: IPayfastOrderResponse = formDataToObject<IPayfastOrderResponse>(formData);

  if (payfastOrderResponse.merchant_id !== process.env.NEXT_PUBLIC_PAYFAST_MERCHANT_ID) {
    console.error('Invalid Merchant ID');
    return Response.json({ message: 'Unauthorized' }, { status: 403 });
  }

  if (payfastOrderResponse.payment_status !== 'COMPLETE') {
    console.error('Invalid Payment Status');
    return Response.json({ message: 'Invalid' }, { status: 400 });
  }

  if (!payfastOrderResponse.m_payment_id) {
    console.error('Invalid data - missing m_payment_id');
    return Response.json({ message: 'Invalid' }, { status: 400 });
  }

  if (!payfastOrderResponse.amount_gross) {
    console.error('Invalid data - missing amount_gross');
    return Response.json({ message: 'Invalid' }, { status: 400 });
  }

  if (!payfastOrderResponse.pf_payment_id) {
    console.error('Invalid data - missing pf_payment_id');
    return Response.json({ message: 'Invalid' }, { status: 400 });
  }

  if (!payfastOrderResponse.amount_fee) {
    console.error('Invalid data - missing amount_fee');
    return Response.json({ message: 'Invalid' }, { status: 400 });
  }

  try {
    const updatedOrder = await markOrderAsPaid({
      id: payfastOrderResponse.m_payment_id,
      amount: parseFloat(payfastOrderResponse.amount_gross),
      paymentFee: parseFloat(payfastOrderResponse.amount_fee),
      paymentId: payfastOrderResponse.pf_payment_id,
    });
    return Response.json(updatedOrder);
  } catch (e) {
    console.error('Error updating order', e);
    return Response.json({ message: 'Error' }, { status: 500 });
  }
}