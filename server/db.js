const Cloudant = require("@cloudant/cloudant");
var url =
  "https://05025f1a-856b-47a0-aadb-52e737a386f3-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-1kdtmo28t5uulevcbb5m8mifmj5bd962vbuc18qwa0m4";
var password = "3589b77ff4cc367d60ae67e1f7dada03";

var cloudant = Cloudant({ url: url, username: username, password: password });
var housing = cloudant.use("housing-software");

insert = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use("housing-software").insert(paramsvalue);
};

get = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use("housing-software").list(paramsvalue);
};

update = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant.use("housing-software").insert(paramsvalue);
};

destroy = function (_id, _rev) {
  console.log(paramsvalue);
  return cloudant.use("housing-software").destroy(paramsvalue);
};

module.exports = { housing, insert, get, update, destroy };
