const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const app = express();
const port = 3000;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

let mailOptions = {
  from: "longgaving@gmail.com",
  to: "longgaving@gmail.com",
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully");
  }
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
