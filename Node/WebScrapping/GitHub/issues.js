// const url = "https://github.com/BuilderIO/figma-html";

const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const path = require("path");
const allIssuesObj = require("./allIssues");

function getIssues(url, repoName, topic) {
  request(url, cb);

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      // console.log(html);
      gettingIssues(html);
    }
  }

  function gettingIssues(body) {
    // console.log(topic);
    // console.log(repoName);
    let $ = cheerio.load(body);
    let issuesLink = $("a[data-hotkey='g i']").attr("href");
    let issuesFullLink = "https://github.com" + issuesLink;
    // console.log(issuesFullLink);
    allIssuesObj.eachIssue(issuesFullLink, repoName, topic);
    // let issuesHTML = $(issuesFullLink).html();
    // console.log(issuesHTML);
    // allIssues(issuesFullLink);
  }
}

module.exports = {
  issue: getIssues,
};
