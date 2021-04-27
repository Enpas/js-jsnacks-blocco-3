var arrNum = [1, 2, 3, 4]
var arrLet = ['a', 'b', 'c', 'd']

var arrTot = [];

if(arrNum.length == arrLet.length){

    for(i = 0; i < arrNum.length; i++){

        arrTot.push(arrNum[i]);
        arrTot.push(arrLet[i]);
    }
}else if(arrNum.length < arrLet.length){

    for(i = 0; i < arrNum.length; i++){

        arrTot.push(arrNum[i]);
        arrTot.push(arrLet[i]);
    }
}else if(arrLet.length < arrNum.length){

    for(i = 0; i < arrLet.length; i++){

        arrTot.push(arrNum[i]);
        arrTot.push(arrLet[i]);
    }
}

console.log(arrTot)