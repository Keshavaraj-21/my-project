const nodemail = require("nodemailer");
let sender = nodemail.createTransport({
  service: "gmail",
  auth: {
    user: "krhousingsociety3021@gmail.com",
    pass: "Keshav@3021",
  },
});
module.exports.getemail = function (params) {
  let composemail = {
    from: "krhousingsociety3021@gmail.com",
    to: params,
    subject: "node email",
    text: "Hello everyone...! Welcome to our Housing society software",
  };
  sender.sendMail(composemail, function (err, res) {
    if (err) {
      console.log("Mail not sent", err);
    } else {
      console.log("Mail sent", res);
    }
  });
};
