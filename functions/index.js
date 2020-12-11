const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const cors = require("cors")({ origin: true })

const user = functions.config().email.user;
const pass = functions.config().email.pass;


// configure transporter for nodemailer
let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: pass
    }
  });

  exports.sendMail = functions.firestore
  .document("adoptions/{adoptionID}")
  .onCreate(async (snap, context) => {
    // configure mail options for nodemailer
    const mailOptions = {
      from: "CCREW <bryce@mediamarco.com>",
      to: (snap.data().adoptionApplication.applicantEmail, "bryce@mediamarco.com"),
      subject: "Adoption Application Recieved",
      html: `
      <h3>
        Testing...
      </h3>
      <p>
        This is a test.
      </p>
      `
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      return console.log("Email Sent! " + info.response);
    } catch (error) {
      return console.log("Error sending email ----- ", error);
    }
  });