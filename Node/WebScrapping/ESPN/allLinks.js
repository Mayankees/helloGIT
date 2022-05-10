const path = require("path");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const sCardObj = require("./scorecard");

function getAllMatchesLink(url) {
  request(url, function (err, response, html) {
    if (err) {
      console.log(err);
    } else {
      // console.log(html);
      extractAllLink(html);
    }
  });
}

function extractAllLink(html) {
  let $ = cheerio.load(html);
  // let scoreCardElems = $("a[data-hover='Scorecard']");
  let scoreCardElems = $(
    ".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent a[class='ds-text-ui-typo ds-underline-offset-4 hover:ds-underline hover:ds-decoration-ui-stroke ds-block']"
  );
  // console.log(scoreCardElems.length);
  for (let i = 2; i < scoreCardElems.length; i += 4) {
    let links = $(scoreCardElems[i]).attr("href");
    let fullLinks = "https://www.espncricinfo.com" + links;
    // console.log(i + "->" + fullLinks);
    sCardObj.sCard(fullLinks);
  }
}

module.exports = {
  allLinks: getAllMatchesLink,
};
