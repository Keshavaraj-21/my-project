const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
const winlogger = require("./logger/logger");

let login = {};
const file = require("fs");

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

app.post("/userData", (request, _response, _next) => {
  console.log(request);

  let object = {
    username: request.body.formobject.username,
    phone: request.body.formobject.phone,
    email: request.body.formobject.email,
    blockname: request.body.formobject.blockname,
    blockid: request.body.blockdetails,

    password: request.body.formobject.password,
    confirmpassword: request.body.formobject.confirmpassword,
    type: "userid",
  };

  dbconnection.insert(object);
});

app.post("/billingData", (request, _response, _next) => {
  console.log(request);
  let object = {
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

app.post("/postFeedback", (request, _response, _next) => {
  console.log(request);
  let object = {
    name: request.body.name,
    email: request.body.email,
    blockname: request.body.blockname,
    category: request.body.category,
    msg: request.body.msg,
    type: "feedback",
  };
  console.log(object);

  dbconnection.insert2(object);
});

app.post("/billidQuery", (request, _response, _next) => {
  console.log(request);
  let object = {
    username: request.body.username,
    userid: request.body.userid,
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

app.get("/getUserdetails", (request, response) => {
  console.log(request);
  let data = {
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
    {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    }
  });
});

app.get("/getBill", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "bill",
    },
  };
  dbconnection.get(data, "housing-software").then((res) => {
    {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    }
  });
});

app.get("/getFeedback", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "feedback",
    },
  };
  dbconnection.get(data, "housing-software").then((res) => {
    {
      {
        if (res) {
          response.send(res);
        } else {
          response.send("error");
        }
      }
    }
  });
});

app.get("/get_Block/:id", (request, response) => {
  let getBlock = {
    selector: {
      type: "userid",
      blockname: request.params.id,
    },
  };
  dbconnection.find(getBlock, "housing-software").then((res) => {
    {
      {
        if (res) {
          response.send(res);
        } else {
          response.send("error");
        }
      }
    }
  });
});

app.get("/get_User_Id/:id", (request, response) => {
  let getUserId = {
    selector: {
      type: "userid",
      username: request.params.id,
    },
  };
  dbconnection.find(getUserId, "housing-software").then((res) => {
    {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    }
  });
});

app.get("/get_Block_Id/:id", (request, response) => {
  let getBlocks = {
    selector: {
      type: "bill",
      block: request.params.id,
    },
  };
  dbconnection.find(getBlocks, "housing-software").then((res) => {
    {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    }
  });
});

app.get("/get_BillOfUser/:id", (request, response) => {
  let getBillUser = {
    selector: {
      type: "userbill",
      userid: request.params.id,
    },
  };

  console.log(request.params.id);
  dbconnection.find(getBillUser, "housing-software").then((res) => {
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

app.get("/getAdmin", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "adminid",
    },
  };
  dbconnection.get(data, "housing-software").then((res) => {
    {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    }
  });
});
app.get("/getAdminId/:id", (request, response) => {
  {
    dbconnection.getId(request.params.id, "housing-software").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  }
});

app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  winlogger.info("SUCCESS", "Server is running!!!");

  console.log(`server is listening on http://localhost:${port}`);
});
