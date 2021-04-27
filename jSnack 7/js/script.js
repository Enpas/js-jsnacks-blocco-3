var firstArr = ['A', 'B', 'C', 'D', 1, 2, 3];
var secondArr = [4, 5, 6, 'E', 'F'];

console.log('Primo array: '+ firstArr);
console.log('Secondo array: '+ secondArr);
console.log('------')

while (firstArr.length != secondArr.length) {
  if (firstArr.length < secondArr.length) {
    firstArr.push(Math.floor(Math.random() * 100) + 1);
  } else {
    secondArr.push(Math.floor(Math.random() * 100) + 1);
  }
}

console.log('Primo array: '+ firstArr);
console.log('Secondo array: '+ secondArr);