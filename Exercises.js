//Question 1
function myReverse(str) {
  // your code here
  return str.split("").reverse().join("");
}

//Question 2
function allCombinations(str) {
  let combinations = [];
  // your code here
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      combinations.push(str.substring(i, j + 1));
    }
  }
  //
  return combinations;
}

//Question 3
function allCaps(str) {
  // your code here
  let res = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      res += str[i].toUpperCase();
    }
    else {
      res += str[i];
    }
  }

  return res;

  //One line solution
  //return str.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}

//Question 4
function myPower(x, n) {
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
