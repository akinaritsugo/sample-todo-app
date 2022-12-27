const DATA = require("./data.json");

module.exports = async function (context, req) {
  context.res = {
    body: DATA
  };
}