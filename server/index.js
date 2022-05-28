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
app.use(express.static("public"));
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.post("/postquery", (request, response, next) => {
  console.log(request);
  var object = {
    username: request.body.username,
    phone: request.body.phone,
    email: request.body.email,
    blockname: request.body.blockname,
    password: request.body.password,
    confirmpassword: request.body.confirmpassword,
    type: "userid",
  };

  dbconnection.insert(object);
});

app.post("/post_query", (request, response, next) => {
  console.log(request);
  var object = {
    block: request.body.block,
    maintainance: request.body.maintainance,
    housetax: request.body.housetax,
    watertax: request.body.watertax,
    parking: request.body.parking,
    charity: request.body.charity,
    type: "bill",
  };

  dbconnection.insert1(object);
});

app.get("/getUser", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "userid",
    },
  };
  dbconnection.get(data, "housing-software").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "housing-software").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.get("/getbill", (request, response) => {
  console.log(request);
  dbconnection.get("housing-software").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.delete("/delete/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "housing-software")
    .then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
});

app.get("/getadmin", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "adminid",
    },
  };
  dbconnection.get(data, "housing-software").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getadminId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "housing-software").then((res) => {
    if (res) {
      response.send(res);
    } else {
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
