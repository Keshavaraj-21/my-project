const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
const cors = require("cors");
const dbconnection = require("./db");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

//User--------------------------------------------------------
//To post the user data to the database
app.post("/post_query", (request, response) => {
  var object = {
    username: request.body.username,
    phonenumber: request.body.phone,
    gmail: request.body.gmail,
    society: request.body.society,
    password: request.body.password,
    confirmpassword: request.body.confirmpassword,
  };
  dbconnection.insert(object, "housing-software").then((res) => {
    if (res) {
      console.log("Data Posted");
      response.send(res);
    } else {
      console.log("Data cannot be Posted");
      response.send("error");
    }
  });
  console.log("Data added");
});

//To get all the _id,_rev... form database
app.get("/get_query", (request, response) => {
  console.log("start");

  dbconnection.get("housing-software").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

//To get the all user data value from database
app.get("/get_all_query/:id", (request, response) => {
  dbconnection.housing.get(request.params.id).then((res) => {
    if (res) {
      console.log(res);
      response.json(res);
    } else {
      response.send("error");
    }
  });

  console.log("end");
});

//To delete particular user from database

app.delete("/delete_query/:id/:id1", (request, response) => {
  dbconnection
    .deleted(request.params.id, request.params.id1, "housing-software")
    .then((res) => {
      if (res) {
        console.log("deleted success");
        response.send(res);
      } else {
        console.log("can not deleted...");
        response.send("error");
      }
    });
});

// To update the particular user data using id
app.put("/update_query", (request, response) => {
  console.log("hey");
  var object = {
    _id: request.body._id,
    _rev: request.body._rev,
    name: request.body.name,
    username: request.body.username,
    age: request.body.age,
    date: request.body.date,
  }; // console.log(object);
  dbconnection.update(object, "housing-software").then((res) => {
    if (res) {
      console.log("updated....");
      response.send(res);
    } else {
      console.log("can not updated....");
      response.send("error");
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on http://localhost:${port}`);
});
