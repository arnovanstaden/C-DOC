import { IOrder } from '@types';
import { sendEmail } from './server';
import { getProductsById } from '@lib/products';

const buildProducts = async (cart: IOrder['cart']): Promise<string> => {
  const productsToBuild = await getProductsById(cart.map((item) => item.id));
  let products = '';

  productsToBuild.forEach((product) => {
    const cartProduct = cart.find((item) => item.id === product.id);
    const productPrice = cartProduct.price * cartProduct.quantity;

    products = products +
      `
              <tr>
                  <td style="border-bottom: 1px solid #E1E1E1;">
                      <table style="width:100%; text-align: left;border-spacing: 0;">
                          <tr>
                              <td style="padding: 20px 20px;border-right: 1px solid #E1E1E1;">
                                  <p style="font-size: 14.4px;font-weight:500;font-family: Roboto;margin: 0px 0 3px 0;">
                                  <a href="https://www.c-doc.co.za/shop/${product.id}" style="color: #333333;text-decoration:none">
                                  ${product.name}
                                  </a>
                                  </p>
                                  <span style="font-size: 12px;color: #969696;">${product.category}</span><br>
                                  <span style="font-size: 12px;color: #969696;">#${product.code}</span>
                                  ${product.document ? `<br><a href="${product.document}" style="font-size: 14px;color: #da222d; font-weight:500">Download Product</a>` : ''}
                                  <br>
                              </td>
                          </tr>
                      </table>
                  </td>
                  <td style="border-bottom: 1px solid #E1E1E1;border-right: 1px solid #E1E1E1;text-align: center;">
                      <p style="font-weight: 500;font-size: 14.4px;">${cartProduct.quantity}</p>
                  </td>
                  <td style="border-bottom: 1px solid #E1E1E1;;text-align: center;">
                      <p style="font-weight: 500;font-size: 14.4px;">R ${productPrice}</p>
                  </td>
              </tr>`;
  });

  return products;
};

export const sendOrderEmailMerchant = async (order: IOrder) => {
  const first =
    `<body
        style="color: #333333;max-width: 800px;margin: 0 auto;padding: 50px 0;font-family: Roboto, Verdana, sans-serif;font-size: 14.4px;">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <img src="https://c-doc.vercel.app/shop.png" alt=""
            style="width: 20vw;margin: auto;display: block;">

        <h2
            style="text-align: center;margin-bottom: 50px;margin-top: 50px;font-size: 32px;font-family: Roboto;color: ##1c1c1c;font-weight: 500;">
            Order
            Confirmation </h2>

        <p style="font-size: 14.4px;">
            Hi C-DOC.
            <br> <br>
            You have a new order!
            <br> <br>
            Please find your order details below:
            <br> <br>
        </p>

        <table style="width:100%; text-align: left;border: 1px solid #E1E1E1;border-spacing: 0;max-width: 800px">
            <tr>
                <th
                    style="font-size: 16px; padding: 10px 15px;border-bottom: 1px solid #E1E1E1;border-right: 1px solid #E1E1E1;font-family:Roboto">
                    Buyer Details</th>
            </tr>
            <tr>
                <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
                    <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Name: </span><br>
                    <p style="font-weight: 500; margin: 3px 0 0px 0;font-size: 14.4px;">${order.firstName}
                        ${order.lastName}</p>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
                    <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Email Address: </span><br>
                    <p style="font-weight: 500; margin: 3px 0 0px 0;font-size: 14.4px;">${order.email}</p>
                </td>
            </tr>
            <tr>
                <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
                    <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Phone Number: </span><br>
                    <p style="font-weight: 500; margin: 3px 0 0px 0;font-size: 14.4px;">${order.phone}</p>

                </td>
            </tr>
        </table>

        <br>
        <br>

        <table style="width:100%; text-align: left;border: 1px solid #E1E1E1;border-spacing: 0;max-width: 800px">
            <tr>
                <th
                    style="font-size: 16px; padding: 10px 15px;border-bottom: 1px solid #E1E1E1;border-right: 1px solid #E1E1E1;font-family:Roboto">
                    Order Summary</th>
            </tr>
            <tr>
            <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
                <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Order #: </span><br>
                <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">${order.id}</p>
            </td>
            </tr>
            <tr>
                <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
                    <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Order Date: </span><br>
                    <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">${order.updated}</p>
                </td>
            </tr>
            <tr>
            <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
                <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Order Total: </span> <br>
                <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">R ${order.total}</p>
            </td>
            </tr>
            <tr>
            <td style="font-size: 14.4px;padding: 10px 15px;">
                <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Delivery Address: </span><br>
                <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">${order.deliveryNotes}</p>
            </td>
            </tr>
            <tr>
                <td style="font-size: 14.4px;padding: 10px 15px;">
                    <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Delivery Notes: </span><br>
                    <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">${order.deliveryNotes}</p>
                </td>
            </tr>

        </table>

        <br><br>


        <table style="width:100%; text-align: left;border: 1px solid #E1E1E1;border-spacing: 0;">
            <colgroup>
                <col span="1" style="width: 60%;">
                <col span="1" style="width: 7.5%;">
                <col span="1" style="width: 32.5%;">
            </colgroup>
            <tr>
                <th
                    style="font-size: 16px; padding: 10px 15px;border-bottom: 1px solid #E1E1E1;border-right: 1px solid #E1E1E1;font-family:Roboto">
                    Items</th>
                <th
                    style="font-size: 16px; padding:10px 15px;border-bottom: 1px solid #E1E1E1;font-family:Roboto;border-right: 1px solid #E1E1E1">
                    QTY
                </th>
                <th style="font-size: 16px; padding:10px 15px;border-bottom: 1px solid #E1E1E1;font-family:Roboto">Price
                </th>
            </tr>
            `;

  const last = `
            <tr>
                <td colspan="2" style="text-align: right;padding: 20px 20px;">
                    <p style="font-weight: 500;font-size: 14.4px;">Subtotal: </p>
                    <p style="font-weight: 500;font-size: 14.4px;">Shipping: </p>
                    <p style="font-weight: 600;font-size: 15px;">Order Total: </p>
                </td>
                <td style="text-align: center;padding: 20px 20px;">
                    <p style="font-weight: 500;font-size: 14.4px;">R ${order.total - order.deliveryFee}</p>
                    <p style="font-weight: 500;font-size: 14.4px;">R ${order.deliveryFee}</p>
                    <p style="font-weight: 500;font-size: 15px;">R ${order.total}</p>
                </td>
            </tr>
        </table>

        <div style="width: 100%;text-align: center;margin: 40px 0;font-size: 16px; font-weight: 600;">
            <p>Be sure & double check your payfast account to confirm payment before shipping the order.
            </p>
        </div>

    </body>`;

  const products = await buildProducts(order.cart);

  const emailBody = first + products + last;
  await sendEmail({
    subject: 'C-DOC Website: Order',
    body: emailBody,
  });
};

export const sendOrderEmailBuyer = async (order: IOrder) => {
  const first = `
  <body
  style="color: #333333;max-width: 800px;margin: 0 auto;padding: 50px 0;font-family: Roboto, Verdana, sans-serif;font-size: 14.4px;">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <img src="https://c-doc.vercel.app/shop.png" alt=""
      style="width: 20vw;margin: auto;display: block;">

  <h2
      style="text-align: center;margin-bottom: 50px;margin-top: 50px;font-size: 32px;font-family: Roboto;color: ##1c1c1c;font-weight: 500;">
      Order
      Confirmation </h2>

  <p style="font-size: 14.4px;">
      Hi ${order.firstName}.
      <br> <br>
      Thank you for your purchase from C-DOC!
      <br> <br>
      Please find your order details below:
      <br> <br>
  </p>
  <table style="width:100%; text-align: left;border: 1px solid #E1E1E1;border-spacing: 0;max-width: 800px">
      <tr>
          <th
              style="font-size: 16px; padding: 10px 15px;border-bottom: 1px solid #E1E1E1;border-right: 1px solid #E1E1E1;font-family:Roboto">
              Order Summary</th>
      </tr>
      <tr>
          <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
              <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Order #: </span><br>
              <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">${order.id}</p>
          </td>
      </tr>
      <tr>
          <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
              <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Order Date: </span><br>
              <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">${order.updated}</p>
          </td>
      </tr>
      <tr>
      <td style="padding: 10px 15px; border-right: 1px solid #E1E1E1">
          <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Order Total: </span> <br>
          <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">R ${order.total}</p>
      </td>
      </tr>
      <tr>
      <td style="font-size: 14.4px;padding: 10px 15px;">
          <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Delivery Address: </span><br>
          <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">${order.deliveryAddress}</p>
      </td>
      </tr>
      <tr>
          <td style="font-size: 14.4px;padding: 10px 15px;">
              <span style="font-weight: 500; font-size: 12.8px;color: #969696;">Delivery Notes: </span><br>
              <p style="font-weight: 500px; margin: 3px 0 0px 0;font-size: 14.4px;">${order.deliveryNotes}</p>
          </td>
      </tr>

  </table>

  <br><br>


  <table style="width:100%; text-align: left;border: 1px solid #E1E1E1;border-spacing: 0;max-width: 800px">
      <colgroup>
          <col span="1" style="width: 65%;">
          <col span="1" style="width: 10%;">
          <col span="1" style="width: 25%;">
      </colgroup>
      <tr>
          <th
              style="font-size: 16px; padding: 10px 15px;border-bottom: 1px solid #E1E1E1;border-right: 1px solid #E1E1E1;font-family:Roboto">
              Items</th>
          <th
              style="font-size: 16px; padding:10px 15px;border-bottom: 1px solid #E1E1E1;font-family:Roboto;border-right: 1px solid #E1E1E1">
              QTY
          </th>
          <th style="font-size: 16px; padding:10px 15px;border-bottom: 1px solid #E1E1E1;font-family:Roboto">Price
          </th>
      </tr>
`;

  const last = `
      <tr>
          <td colspan="2" style="text-align: right;padding: 20px 20px;">
              <p style="font-weight: 500;font-size: 14.4px;">Subtotal:</p>
              <p style="font-weight: 500;font-size: 14.4px;">Shipping:</p>
              <p style="font-weight: 600;font-size: 15px;">Order Total:</p>
          </td>
          <td style="text-align: center;padding: 20px 20px;">
          <p style="font-weight: 500;font-size: 14.4px;">R ${order.total - order.deliveryFee}</p>
          <p style="font-weight: 500;font-size: 14.4px;">R ${order.deliveryFee}</p>
          <p style="font-weight: 500;font-size: 15px;">R ${order.total}</p>
          </td>
      </tr>
  </table>

</body>`;

  const products = await buildProducts(order.cart);

  const emailBody = first + products + last;
  await sendEmail({
    subject: 'C-DOC Order',
    recipient: order.email,
    body: emailBody,
  });
};