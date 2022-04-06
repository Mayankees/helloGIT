const request = require("request");
request("https://in.ign.com/", cb);

function cb(err, res, body) {
    console.error("error", err);
    console.log(body);
}