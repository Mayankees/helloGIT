const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const path = require("path");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const getAllLinksObj = require("./allLinks");
request(url, cb);

// let iplPath = path.join(__dirname, "IPL");
// // console.log(iplPath);
// if (!fs.existsSync(iplPath)) {
//   fs.mkdirSync(iplPath);
// }
function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    extractLink(html);
    // console.log(html);
  }
}



/*---> 1. Extracting link from the website to get to next page <---*/

function extractLink(html) {
  let $ = cheerio.load(html);
  let anchorElem = $(
    "a[class='ds-block ds-text-center ds-uppercase ds-text-ui-typo-primary ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke-primary ds-block']"
  );
  let link = anchorElem.attr("href");
  // console.log(link);
  let fullLink = "https://www.espncricinfo.com" + link;
  // console.log(fullLink);
  getAllLinksObj.allLinks(fullLink);
}

