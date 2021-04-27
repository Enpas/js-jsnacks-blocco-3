var arrNum = [46, 73, 3, 4, 5, 6, 24];
console.log(findArr(arrNum, 3, 6));

/* FUNCTION */

function findArr(arrNum, a, b) {
  var arrResult = [];
  for (var i = (a-1); i < arrNum[b-1]; i++) {
    arrResult.push(arrNum[i]);
  }
  return arrResult;
}