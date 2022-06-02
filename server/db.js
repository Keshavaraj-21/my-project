const Cloudant = require("@cloudant/cloudant");
const { data } = require("./logger/logger");
var url =
  "https://05025f1a-856b-47a0-aadb-52e737a386f3-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-1kdtmo28t5uulevcbb5m8mifmj5bd962vbuc18qwa0m4";
var password = "3589b77ff4cc367d60ae67e1f7dada03";

var cloudant = Cloudant({ url: url, username: username, password: password });

insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((data) => {
      console.log("Data Inserted into Cloud database" + data);
    })
    .catch((err) => {
      console.log(err);
    });
};

insert1 = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((data) => {
      console.log("Data Inserted into Cloud database" + data);
    })
    .catch((err) => {
      console.log(err);
    });
};

insert2 = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((data) => {
      console.log("Feedback posted to cloud database" + data);
    })
    .catch((err) => {
      console.log(err);
    });
};

insert3 = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((data) => {
      console.log("Feedback posted to cloud database" + data);
    })
    .catch((err) => {
      console.log(err);
    });
};

find = function (blockdata, dbname) {
  return cloudant.use(dbname).find(blockdata);
};

find1 = function (blockid, dbname) {
  return cloudant.use(dbname).find(blockid);
};

get = function (admindata, dbname) {
  return cloudant.use(dbname).find(admindata);
};
getbill = function (dbname) {
  return cloudant.use(dbname).list();
};
getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
module.exports = {
  get,
  getId,
  insert,
  getbill,
  insert1,
  insert2,
  insert3,
  find,
  find1,
  del_id,
};
