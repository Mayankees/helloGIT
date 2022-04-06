const puppeteer = require("puppeteer");

let email = "singh_mayank16";
let password = "20080100309@Ms";

let cTab;
let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  args: ["--start-maximized"],
});

browserOpenPromise
  .then(function (browser) {
    console.log("browser is Open");
    // console.log(browser);
    let allTabsPromise = browser.pages();
    return allTabsPromise;
  })
  .then(function (allTabsArr) {
    cTab = allTabsArr[0];
    console.log("new tab");
    // URL to navigate page to
    let visitingLoginPagePromise = cTab.goto(
      "https://www.hackerrank.com/auth/login"
    );
    return visitingLoginPagePromise;
  })
  .then(function () {
    console.log("Hackerrank login page opened");
    let emailWillBeTypedPromise = cTab.type("input[name='username']", email);
    return emailWillBeTypedPromise;
  })
  .then(function () {
    console.log("Email has been typed");
    let passwordWillBeTypedPromise = cTab.type(
      "input[type='password']",
      password
    );
    return passwordWillBeTypedPromise;
  })
  .then(function () {
    console.log("Password has been typed");
    let willBeLoggedInPromise = cTab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    return willBeLoggedInPromise;
  })
  .then(function () {
    console.log("logged into hackerrank successfully");
    let algorithmTabWillBeOpened = waitAndClick(
      "div[data-automation='algorithms']"
    );
    return algorithmTabWillBeOpened;
  })
  .then(function () {
    console.log("algorithms page opened");
    let allQuesPromise = cTab.waitForSelector(
      'a[data-analytics="ChallengeListChallengeName"]'
    );
    return allQuesPromise;
  })
  .then(function () {
    function getAllQuesLinks() {
      let allElemArr = document.querySelectorAll(
        '`a[data-analytics="ChallengeListChallengeName"]`'
      );
      let linksArr = [];
      for (let i = 0; i < allElemArr.length; i++) {
        linksArr.push(allElemArr[i].getAttribute("href"));
      }
      return linksArr;
    }

    let linksArrPromise = cTab.evaluate(getAllQuesLinks);
    return linksArrPromise;
  })
  .then(function (linksArr) {
    console.log("Links to all ques received");
    console.log(linksArr);
  })
  .catch(function (err) {
    console.log(err);
  });

function waitAndClick(algoBtn) {
  let waitAndClickPromise = new Promise(function (resolve, reject) {
    let waitForSelectorPromise = cTab.waitForSelector(algoBtn);
    waitForSelectorPromise
      .then(function () {
        console.log("algo bt is found");
        let clickPromise = cTab.click(algoBtn);
        return clickPromise;
      })
      .then(function () {
        console.log("algo btn is clicked");
        resolve();
      })
      .catch(function (err) {
        console.log(err);
      });
  });
  return waitAndClickPromise;
}
