// const url =
//   "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";

const path = require("path");
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

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
  let result = $(
    ".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo-title span"
  ).text();
  // console.log(venue);
  // console.log(date);
  // console.log(result);
  let innings = $(
    ".ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table"
  );
  let teamsName = $(".ds-py-3 .ds-text-tight-s.ds-font-bold.ds-uppercase");
  // let htmlString="";
  for (let i = 0; i < innings.length; i++) {
    // htmlString+=$(innings[i]).html();
    let team1 = $(teamsName[i]).text();
    team1 = team1.split("INNINGS")[0].trim();
    console.log(team1);
    let oppIdx;
    if (i == 0) {
      oppIdx = 1;
    } else {
      oppIdx = 0;
    }
    let team2 = $(teamsName[oppIdx]).text();
    team2 = team2.split("INNINGS")[0].trim();
    // console.log(`${venue} | ${date} | ${team1} | ${team2} | ${result}`);

    let cInnings = $(innings[i]);
    let allRows = $(cInnings).find(
      ".ds-border-b.ds-border-line.ds-text-tight-s"
    );
    // console.log( allRows);
    for (let j = 0; j < allRows.length; j++) {
      let allCols = $(allRows[j]).find(".ds-min-w-max");
      // console.log($(allCols[0]).text());
      // console.log($(allCols[0])+"");

      if (
        $(allCols[0]).text() != "Extras" &&
        $(allCols[0]).text() != "BATTING"
      ) {
        //     // console.log(allCols.text());
        let playerName = $(allCols[0]).text().trim();
        // console.log(playerName);
        let runs = $(allCols[2]).text().trim();
        let balls = $(allCols[3]).text().trim();
        let boundaries = $(allCols[5]).text().trim();
        let sixes = $(allCols[6]).text().trim();
        let strikeRate = $(allCols[7]).text().trim();

        // console.log(
        //   `${playerName} | ${runs} | ${balls} | ${boundaries} | ${sixes} | ${strikeRate}`
        // );
        processInfo(
          venue,
          date,
          team1,
          team2,
          playerName,
          runs,
          balls,
          boundaries,
          sixes,
          strikeRate,
          result
        );
      }
    }
  }
}
// console.log(htmlString);

function processInfo(
  venue,
  date,
  team1,
  team2,
  playerName,
  runs,
  balls,
  boundaries,
  sixes,
  strikeRate,
  result
) {
  let teamNamePath = path.join(__dirname, "IPL", team1);
  console.log("<-" + teamNamePath + "->");
  if (!fs.existsSync(teamNamePath)) {
    fs.mkdirSync(teamNamePath);
  }

  let playerPath = path.join(teamNamePath, playerName + ".xlsx");
  let content = excelReader(playerPath, playerName);

  let playerObj = {
    venue,
    date,
    team1,
    team2,
    playerName,
    runs,
    balls,
    boundaries,
    sixes,
    strikeRate,
    result,
  };

  content.push(playerObj);

  excelWriter(playerPath, content, playerName);
}

function excelReader(playerPath, sheetName) {
  if (!fs.existsSync(playerPath)) {
    return [];
  }
  let workBook = xlsx.readFile(playerPath);
  let excelData = workBook.Sheets[sheetName];
  let playerObj = xlsx.utils.sheet_to_json(excelData);
  return playerObj;
}

function excelWriter(playerPath, jsObject, sheetName) {
  let newWB = xlsx.utils.book_new();

  let newWS = xlsx.utils.json_to_sheet(jsObject);

  xlsx.utils.book_append_sheet(newWB, newWS, sheetName);

  xlsx.writeFile(newWB, playerPath);
}

module.exports = {
  sCard: scoreCard,
};
