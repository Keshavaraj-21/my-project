const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
const winlogger = require("./logger/logger");

var login = {};
const file = require("fs");
const { request } = require("http");
const { response } = require("express");
const { nextTick } = require("process");
const cors = require("cors");
const dbconnection = require("./db");
// const mailservice = require("./mail");
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

  // console.log(blocknamefetched);
  var object = {
    username: request.body.formobject.username,
    phone: request.body.formobject.phone,
    email: request.body.formobject.email,
    blockname: request.body.formobject.blockname,
    blockid: request.body.blockdetails,
    // blockname: request.body.blockdetails,
    // block_id: request.body.
    password: request.body.formobject.password,
    confirmpassword: request.body.formobject.confirmpassword,
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

app.post("/post__query", (request, response, next) => {
  console.log(request);
  var object = {
    name: request.body.name,
    email: request.body.email,
    blockname: request.body.blockname,
    category: request.body.category,
    msg: request.body.msg,
    type: "feedback",
  };

  dbconnection.insert2(object);
});

app.post("/billquery", (request, response, next) => {
  console.log(request);
  var object = {
    username: request.body.username,
    phone: request.body.phone,
    email: request.body.email,
    blockname: request.body.blockname,
    maintainance: request.body.maintainance,
    housetax: request.body.housetax,
    watertax: request.body.watertax,
    parking: request.body.parking,
    charity: request.body.charity,
    type: "userbill",
  };

  dbconnection.insert3(object);
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
  var data = {
    selector: {
      type: "bill",
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

app.get("/getFeedback", (request, response) => {
  console.log(request);
  var data = {
    selector: {
      type: "feedback",
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

app.get("/get_block/:id", (request, response) => {
  // console.log("function calling");
  var getBlock = {
    selector: {
      type: "userid",
      blockname: request.params.id,
    },
  };
  dbconnection.find(getBlock, "housing-software").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});

app.get("/get_block_id/:id", (request, response) => {
  console.log("function calling");
  var getBlocks = {
    selector: {
      type: "bill",
      block: request.params.id,
    },
  };
  dbconnection.find(getBlocks, "housing-software").then((res) => {
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

  winlogger.info("SUCCESS", "Server is running!!!");

  console.log(`server is listening on http://localhost:${port}`);
});
