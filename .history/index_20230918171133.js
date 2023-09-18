const express = require("express");
const nodemailer = require("nodemailer")
const 
const app = express();
const port = 3000;


let transporter = nodemailer.createTransport({
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




app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});