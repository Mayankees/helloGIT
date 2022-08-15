// Learning String

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
  }
  var hB = "Hold";
  if (count > 0) {
    hB = "Bet";
  }
  return count + " " + hB;
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
console.log(cc());

const acc = 1;
function git() {
  console.log(typeof acc);
  var acc = "acd";
}
git();
console.log(acc);

console.log(3 + 4 + "5");

let acd = [1, 2, 3, 4, 5];
acd[8] = 8;
console.log(acd);

export default acd;
