const { getbilluser } = require("../db");
const { loggergenerate } = require("../logger/logger");
let userdetails = async (req, res) => {
  console.log("####", req);
  try {
    let result = await getUser(req)
      .then((data) => {
        console.log("Successfully handled the information", data);
        return data;
      })
      .catch((err) => {
        console.log("Return failure from server", err);
        loggergenerate.error("user billing details return failure from server");
        return err;
      });
    throw result;
  } catch (e) {
    console.log("Getting error", e);
  }
  return result;
};
module.exports = { userdetails };
