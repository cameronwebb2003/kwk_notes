Java Script Notes

Tool to check our javascript
- console.log("insert variable here")
Note: User never sees this, only a developers tool

HOW TO CHOOSE RANDOM item

function showTruth() {
  //GOAL: DISPLAY RANDOM TRUTH FROM ARRAY

  //1 Random number between 0 and 1
  var randomNum = Math.random();
  //2) Make nmuber larger --> mutip;y random number by length of array
  var multArrLength = randomNum * arrayTruth.length;
  //3) Round number down to fit into array
  var round = Math.floor(multArrLength);
  //4) Picks random index number from array and assigns it as variable
  "showNum"
  var showNum = arrayTruth[round];
  //5) Append (throw) item into truthContainer on our html.page. Use interpolation $(variablename) AND backticks
  truthContainer.append(`h2>${showNum}</h2>`);
