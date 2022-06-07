const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
const cors = require("cors");
const setmail = require("./send");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.get("/", function (_request, response) {
  response.json({ name: "Keshavaraj" });
});

app.post("/mail", (request, _response, _next) => {
  console.log("mmm");

  var object = {
    name: request.body.name,
    email: request.body.email,
    message: request.body.message,
  };
  setmail.getemail(request.body.email);
  console.log(object);
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on http://localhost:${port}`);
});
