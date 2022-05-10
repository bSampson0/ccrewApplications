const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

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
  .document("adoptions/{registrationID}")
  .onCreate(async (snap, context) => {
    // configure mail options for nodemailer
    const mailOptions = {
      from: "CCREW <ccrewdog@gmail.com>",
      to: "bryce@mediamarco.com, ccrewdogs@gmail.com",
      subject: "New Adoption Application Submission!",
      html: `
      <h3>
        ${snap.data().adoptionApplication.applicantFirstName} ${
        snap.data().adoptionApplication.applicantLastName
      } just 
        submitted an adoption application.
      </h3>
      <p>You can view this application and more by visiting this link <a href="https://ccrew-adoption-application.netlify.app">https://ccrew-adoption-application.netlify.app</a></p>
      `
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      return console.log("Email Sent! " + info.response);
    } catch (error) {
      return console.log("Error sending email ----- ", error);
    }
  });
