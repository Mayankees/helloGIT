const cheerio = require("cheerio");
const request = require("request");
request("https://covid19.who.int/", cb);

function cb(err, res, body) {
    if (err) {
        console.error("error", err);
    } else {
        handleHTML(body);
        // console.log(body);
    }
}

function handleHTML(html) {
    let selecTool = cheerio.load(html);

    let coronaStats = selecTool(".sc-AxjAm.sc-prOVx.cSOhIp");
    console.log(coronaStats.text());

    console.log(selecTool.text());
}

