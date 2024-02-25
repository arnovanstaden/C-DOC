import { INewCoupon, TContactMessage } from '@types';

export const buildContactEmail = (message: TContactMessage): string => {
  let body = '';
  const keys = Object.keys(message);
  keys.forEach((key) => {
    body += `<p> <b>${key.toUpperCase()}</b>: ${message[key as keyof TContactMessage]}</p>`; // Add 'as keyof TContactMessage' to cast the key to a valid index type
  });

  return `
  <p> Dear C-DOC </p>
  <p>You received a new message via your website:</p>
  
  ${body}
  `;
};

export const buildCouponEmail = (coupon: INewCoupon) => {
  return `
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
};
