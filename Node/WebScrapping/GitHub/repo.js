// const url = "https://github.com/topics/storybook";

const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const path = require("path");
const issueObj = require("./issues");

function getRepository(url, topic) {
  request(url, cb);

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      // console.log(html);
      handlingRepo(html);
    }
  }

  function handlingRepo(body) {
    let $ = cheerio.load(body);
    let repoName = $(".text-bold.wb-break-word");
    //   console.log(repoName.length);
    for (let i = 0; i < 8; i++) {
      // if (i<repoName.length) {
        // console.log(topic);
        const reposName = $(repoName[i]).text().trim();
        // console.log(i + 1 + "->" + reposName);
        
        const reposLink = $(repoName[i]).attr("href");
        // console.log(reposLink);
        const fullRepoLink = "https://github.com" + reposLink;
        // console.log(i+") "+fullRepoLink);
        // gettingIssues(fullRepoLink);
        issueObj.issue(fullRepoLink, reposName, topic);
      // }
      
    }
  }
}

module.exports = {
  repo: getRepository,
};
