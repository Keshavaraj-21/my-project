const nodemail = require("nodemailer");
var sender = nodemail.createTransport({
  service: "gmail",
  auth: {
    user: "krhousingsociety3021@gmail.com",
    pass: "Keshav@3021",
  },
});
module.exports.getemail = function (params) {
  var composemail = {
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
// var composemail = {
//     from:'sosapp24@gmail.com',
//     to:,
//     subject:'node email',
//     text:'Hello everyone'
// }
// sender.sendMail(composemail,function(err,res){
//     if(err)
//     {
//         console.log("Mail not sent",err);
//     }
//     else{
//         console.log("Mail sent",res);
//     }
// })
