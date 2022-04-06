// const url = "https://github.com/BuilderIO/figma-html/issues";

const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const path = require("path");
const pdfKit = require("pdfkit");

function allIssuesForRepo(url, repoName, topic) {
  request(url, cb);

  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else {
      // console.log(html);
      allIssues(html);
    }
  }

  function allIssues(body) {
    console.log(topic);
    console.log(repoName);
    let $ = cheerio.load(body);

    let topicPath = path.join(__dirname, topic);
    // console.log(topicPath);
    if (!fs.existsSync(topicPath)) {
      fs.mkdirSync(topicPath);
    }
    let filePath = path.join(topicPath, repoName + ".pdf");
    // console.log(filePath);

    let top8Issues = "";

    let allIssues = $(
      ".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title"
    );
    // console.log(allIssues.length);

    for (let i = 0; i < 8; i++) {
      // if (i < allIssues.length) {
        const issue = $(allIssues[i]).text().trim();
        // console.log(i + 1 + "->" + issue);
        top8Issues += i + 1 + ") " + $(allIssues[i]).text() + "\n";
        const issueLink = $(allIssues[i]).attr("href");
        const fullIssueLink = "https://github.com" + issueLink;
        // console.log(i + 1 + "->" + fullIssueLink);
        top8Issues += fullIssueLink + "\n\n";
      // }
    }

    // console.log(top8Issues);
    pdfCreator(filePath, top8Issues);
  }
}

module.exports = {
  eachIssue: allIssuesForRepo,
};

function pdfCreator(filesPath, text) {
  let pdfDoc = new pdfKit();

  pdfDoc.pipe(fs.createWriteStream(filesPath));
  pdfDoc.text(text);
  pdfDoc.end();
}
