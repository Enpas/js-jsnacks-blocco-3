$(function(){
  
  var arrTeam = [];
  var randomGameStat = "";
  var randomPoint = 0;
  var randomSuccess = 0;
  var limit = 3;
  var players = 10;

  while(players > 0){
    var newstat = generateStat(limit, limit);
    var newAverage = randomNumberGen (50, 0);
    var newSuccRate = randomNumberGen (100, 0);
    arrTeam.push({
      ID_Player: newstat,
      Average: newAverage,
      Success_Rate: newSuccRate
    });
    players--;
  }
  console.log(arrTeam);
});

/* FUNCTIONS */

function randomNumberGen(max, min){
  return Math.floor(Math.random()*(max - min +1) + min);
}

function randomLetterGen(){
  var letters = "ABCDEFGHILMNOPQRSTUVYXZ";
  var letter = letters[randomNumberGen((letters.length - 1), 0)];
  return letter;
}

function generateStat(maxLetter, maxNumber){
  var stat = "";
  for (var i = 0; i < maxLetter; i++){
    stat += randomLetterGen();
  }
  for (var i = 0; i < maxNumber; i++){
    stat += randomNumberGen(9, 0);
  }
  return stat;
}