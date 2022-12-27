const DATA = require("./data.json");

module.exports = async function (context, req) {
    const name = (req.query.name || (req.body && req.body.name));

    context.res = {
        body: DATA
    };
}