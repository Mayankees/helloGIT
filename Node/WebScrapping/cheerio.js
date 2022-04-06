const cheerio = require("cheerio");

let html = `<ul id="fruits">
    <li class="f1">Orange</li>
    <li class="f2">Banana</li>
    <li class="f3">Apple</li>
  </ul>`;

let selecTool = cheerio.load(html);

let fruitNameArr = selecTool("#fruits").text();
console.log(fruitNameArr);

let fruitName = selecTool(".f2").text();
console.log(fruitName);
