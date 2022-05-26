const Cloudant = require("@cloudant/cloudant");
var url =
  "https://05025f1a-856b-47a0-aadb-52e737a386f3-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-1kdtmo28t5uulevcbb5m8mifmj5bd962vbuc18qwa0m4";
var password = "3589b77ff4cc367d60ae67e1f7dada03";

var cloudant = Cloudant({ url: url, username: username, password: password });
// var housing = cloudant.use("housing-software");

// cloudant.db
//   .create("sam")
//   .then(() =>
//     cloudant
//       .use("sam")
//       .insert({ happy: true }, "rabbit")
//       .then((data) => {
//         console.log(data);
//       })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

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
get = function (dbname) {
  return cloudant.use(dbname).list();
};
getId = function (id, dbfname) {
  return cloudant.use(dbfname).get(id);
};
del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
module.exports = { get, getId, insert, del_id };
