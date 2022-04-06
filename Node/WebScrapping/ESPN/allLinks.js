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
    ".ds-flex.ds-mx-4.ds-pt-2.ds-pb-3.ds-space-x-4.ds-border-t.ds-border-line-default-translucent"
  );
  for (let i = 0; i < scoreCardElems.length; i++) {
    console.log(typeof scoreCardElems[i] + "-> " + i);
    for (let j = 0; j < scoreCardElems[i].length; j++) {
      // console.log(scoreCardElems[i][j]);
// console.log(j);
      const element = scoreCardElems[i][j];
      // console.log(typeof element);
      
    }
    // console.log(scoreCardElems.text());
  }
  // console.log(typeof scoreCardElems);
  // for (let i = 0; i < scoreCardElems.length; i++) {
  //   let links = $(scoreCardElems[i]).attr("href");
  //   let fullLinks = "https://www.espncricinfo.com" + links;
  // console.log(fullLinks);
  // sCardObj.sCard(fullLinks);
  // }
}

module.exports = {
  allLinks: getAllMatchesLink,
};
