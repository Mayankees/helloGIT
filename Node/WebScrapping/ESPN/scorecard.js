// const url =
//   "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";

const path = require("path");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

function scoreCard(url) {
  request(url, cb);
}
function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else {
    extractMatchDetails(html);
  }
}

function extractMatchDetails(html) {
  let $ = cheerio.load(html);
  let descElems = $(".ds-text-tight-m.ds-font-regular.ds-text-ui-typo-mid");
  let descElemsArr = descElems.text().split(",");
  let venue = descElemsArr[1].trim();
  let date = descElemsArr[2].trim();
  let result = $(".match-info-MATCH .status-text").text();
  //   console.log(venue);
  //   console.log(date);
  //   console.log(result.text());
  let innings = $(".card.content-block.match-scorecard-table>.Collapsible");
  //   let htmlString="";
  for (let i = 0; i < innings.length; i++) {
    //   htmlString+=$(innings[i]).html();
    let teamName = $(innings[i]).find("h5").text();
    teamName = teamName.split("INNINGS")[0].trim();
    let oppIdx;
    if (i == 0) {
      oppIdx = 1;
    } else {
      oppIdx = 0;
    }
    let oppTeam = $(innings[oppIdx]).find("h5").text();
    oppTeam = oppTeam.split("INNINGS")[0].trim();
    console.log(`${venue} | ${date} | ${teamName} | ${oppTeam} | ${result}`);

    let cInnings = $(innings[i]);
    let allRows = $(cInnings).find(".table.batsman tbody tr");
    for (let j = 0; j < allRows.length; j++) {
      let allCols = $(allRows[j]).find("td");
      let isWorthy = $(allCols[0]).hasClass("batsman-cell");
      if (isWorthy) {
        // console.log(allCols.text());
        let playerName = $(allCols[0]).text().trim();
        let runs = $(allCols[2]).text().trim();
        let balls = $(allCols[3]).text().trim();
        let boundaries = $(allCols[5]).text().trim();
        let sixes = $(allCols[6]).text().trim();
        let strikeRate = $(allCols[7]).text().trim();

        // console.log(
        //   `${playerName} | ${runs} | ${balls} | ${boundaries} | ${sixes} | ${strikeRate}`
        // );
      }
    }
  }
  //   console.log(htmlString);
}

function processInfo(
  venue,
  date,
  teamName,
  oppTeam,
  playerName,
  runs,
  balls,
  boundaries,
  sixes,
  strikeRate,
  result
) {
  let teamNamePath = path.join(__dirname, "IPL", teamName);
  if (!fs.existsSync(teamNamePath)) {
    fs.mkdirSync(teamNamePath);
  }

  let playerPath = path.join(teamNamePath, playerName + ".xlsx");
  let content = excelReader(playerPath, playerName);
}

function excelReader(playerPath, playerName) {
  if (fs.existsSync(playerPath)) {
  }
}

module.exports = {
  sCard: scoreCard,
};
