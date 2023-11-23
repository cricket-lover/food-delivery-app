require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const { APP_NAME } = require("../constants");

const sendSignupEmail = ({ username, email }) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: email,
    from: "phaneendra.explore@gmail.com",
    subject: `Welcome to ${APP_NAME} - Your Food Journey Begins!`,
    text: "and easy to do anywhere, even with Node.js",
    html: `<p>
    <strong>Dear ${username}</strong>,
    <br/>
    <br/>
    Welcome to ${APP_NAME}! We're thrilled to have you on board and excited that you've chosen us to be your go-to food delivery app.
   </p>
   <a href="https://yummy-tummy.vercel.app">Start Exploring Now</a>`,
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].body);
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendSignupEmail };
