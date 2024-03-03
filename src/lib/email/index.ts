/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { getEquipment } from '@lib/equipment';
import { IEquipmentForm, INewCoupon, TContactMessage } from '@types';
import { sendEmail } from './server';
import { camelCaseToTitleCase } from '@utils/utils';

export const sendContactEmail = async (message: TContactMessage) => {
  let body = '';
  const keys = Object.keys(message);
  keys.forEach((key) => {
    body += `<p> <b>${camelCaseToTitleCase(key)}</b>: ${message[key as keyof TContactMessage]}</p>`;
  });

  const emailBody = `
  <p> Dear C-DOC </p>
  <p>You received a new message via your website:</p>
  
  ${body}
  `;

  await sendEmail({
    subject: 'C-DOC Website: New Contact Form Submission',
    body: emailBody,
  });
};

export const sendCouponEmail = async (coupon: INewCoupon) => {
  const emailBody = `
    <body
    style="color: #333333;max-width: 800px;margin: 0 auto;padding: 50px 0;font-family: Roboto, Verdana, sans-serif;font-size: 14.4px;">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <img src="https://C-DOC.vercel.app/shop.png" alt=""
        style="width: 20vw;margin: auto;display: block;">
    <br/>
    <p style="font-size: 14.4px;text-align: center">
        Here is a coupon for ${coupon.discount}% off your next course booking at C-DOC.
        <br> <br>
        Simply enter the code when when booking a course to receive ${coupon.discount}% off.
    </p>

    <h4 style="background-color: #da222d;color: white;padding: 5px 16px;text-align: center">${coupon.code}</h4>

    <div  style="text-align: center;">
    <a href="https://dmerworldwide.com/courses/book" style="text-align: center;padding: 6px 16px;border:2px solid #da222d;margin: auto;text-decoration:none;color: #333333;font-weight:600">Book A Course</a>
    </div>
    <br/ >
    <p style="font-size: 14.4px;font-style: italic;text-align: center">
    This code is valid until ${coupon.expiry}
    </p>

    </body>`;

  await sendEmail({
    subject: `${coupon.discount}% Off Coupon for a Course at C-DOC`,
    body: emailBody,
    recipient: coupon.email,
  });
};

export const sendEquipmentEnquiryEmail = async (enquiry: IEquipmentForm) => {
  'use server';
  const equipment = await getEquipment();
  const equipmentNames = equipment.map((eq) => {
    const item = equipment.find((item) => item.id === eq.id);
    return { [item.name]: enquiry.items[eq.id] };
  }).filter((item) => item[Object.keys(item)[0]] > 0);

  let body = '';
  const { items, ...rest } = enquiry;
  const keys = Object.keys(rest);
  keys.forEach((key) => {
    body += `<p> <b>${camelCaseToTitleCase(key)}</b>: ${enquiry[key as keyof IEquipmentForm]}</p>`;
  });

  const itemsList = equipmentNames.map((item) => {
    return `<li>${Object.keys(item)[0]}: ${Object.values(item)[0]}</li>`;
  });

  const emailBody = `
  <p> Dear C-DOC </p>
  <p>You received a new equipment enquiry via your website:</p>
  ${body}

  <h4>Items</h4>
  <ul>
  ${itemsList}
  </ul>
  `;

  await sendEmail({
    subject: 'C-DOC Website: Equipment Enquiry',
    body: emailBody,
  });
};