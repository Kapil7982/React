const nodemailer = require("nodemailer");


module.exports = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "f4f05f90028ae8",
      pass: "593c5040a6568f"
    }
  });