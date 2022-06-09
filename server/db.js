const Cloudant = require("@cloudant/cloudant");
const { data } = require("./logger/logger");
let url =
  "https://05025f1a-856b-47a0-aadb-52e737a386f3-bluemix.cloudantnosqldb.appdomain.cloud";
let username = "apikey-v2-1kdtmo28t5uulevcbb5m8mifmj5bd962vbuc18qwa0m4";
let password = "3589b77ff4cc367d60ae67e1f7dada03";

let cloudant = Cloudant({ url: url, username: username, password: password });

let insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((_data) => {
      console.log("Data Inserted into Cloud database" + data);
    })
    .catch((_err) => {
      console.log("Data posting error");
    });
};

let insertBlockBill = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((_data) => {
      console.log("Data Inserted into Cloud database" + data);
    })
    .catch((_err) => {
      console.log("Data posting error");
    });
};

let insertFeedback = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((_data) => {
      console.log("Feedback posted to cloud database" + data);
    })
    .catch((_err) => {
      console.log("Feedback posting error");
    });
};

let insertUserBill = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("housing-software")
    .insert(paramsvalue)
    .then((_data) => {
      console.log("Data posted to cloud database" + _data);
    })
    .catch((_err) => {
      console.log("Data posting error");
    });
};

let find = function (blockdata, dbname) {
  return cloudant.use(dbname).find(blockdata);
};

let find1 = function (userid, dbname) {
  return cloudant.use(dbname).find(userid);
};
let getbilluser = function (dbname) {
  return cloudant.use(dbname).list();
};

let get = function (admindata, dbname) {
  return cloudant.use(dbname).find(admindata);
};
let getbill = function (dbname) {
  return cloudant.use(dbname).list();
};
let getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
let del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
module.exports = {
  get,
  getId,
  insert,
  getbill,
  insertBlockBill,
  insertFeedback,
  insertUserBill,
  getbilluser,
  find,
  find1,
  del_id,
};
