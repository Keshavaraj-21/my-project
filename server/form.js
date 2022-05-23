const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
var login = {};
const file = require("fs");
const { request } = require("http");
const { response } = require("express");
const { nextTick } = require("process");
const cors = require("cors");
const dbconnection = require("./db");
// app.use(express.static("public"));
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
// var urlParser = bodyparser.urlencoded({ extended: false });
// app.get("/", function (request, response) {
//   var data = file.readFileSync("details.json");

//   var details = JSON.parse(data);
//   console.log("From get functin", details);
//   exports.dataset = details;

//   //   response.sendFile(`${__dirname}/`);
// });

app.post("/dashboard", (request, response, next) => {
  console.log("Hai");
  console.log(request);
  var object = {
    username: request.body.username,
    phonenumber: request.body.phone,
    gmail: request.body.gmail,

    password: request.body.password,
    confirmpassword: request.body.confirmpassword,
  };

  //   var data = file.readFileSync("details.json");

  //   var details = JSON.parse(data);
  //   details.push(object);
  //   console.log(details);

  //   file.writeFile("details.json", JSON.stringify(details), (err) => {
  //     if (err) throw err;

  //     console.log("Data added successfully");
  //     details = JSON.parse(data);
  //   });
  // response.end(JSON.stringify(patient));
  dbconnection.insert(object).then(
    (res) => {
      console.log("Data posted");
      response.send(res);
    },
    (rej) => {
      console.log("Data cannot be posted");
      response.send(rej);
    }
  );
  //   response.redirect("..");
  console.log("Data added");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
