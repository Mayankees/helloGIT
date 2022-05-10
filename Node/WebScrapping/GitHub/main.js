const url = "https://github.com/topics";

const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const path = require("path");
const getRepository = require("./repo");

request(url, cb);

function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    // console.log(html);
    getTopic(html);
  }
}

function getTopic(body) {
  let $ = cheerio.load(body);

  let topicLinks = $(".no-underline.d-flex.flex-column.flex-justify-center");
  // console.log(topicLinks.length);

  for (let j = 0; j < topicLinks.length; j++) {
    const links = $(topicLinks[j]).attr("href");
    // console.log(links);
    const topic = links.split("/").pop();
    // console.log(topic);
    const fullTopicLinks = "https://github.com" + links;
    console.log(fullTopicLinks);
    // getRepository.repo(fullTopicLinks, topic);
  }
}
