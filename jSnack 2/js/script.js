var arrZuc = [
  {
    varietà: 'Giallo',
    peso: 2,
    lunghezza: 10
  },
  {
    varietà: 'Verde',
    peso: 4,
    lunghezza: 20
  },
  {
    varietà: 'Rosso',
    peso: 3,
    lunghezza: 17
  },
  {
    varietà: 'Blu',
    peso: 1.5,
    lunghezza: 13
  },
  {
    varietà: 'Azzurro',
    peso: 3,
    lunghezza: 17
  },
  {
    varietà: 'Arancione',
    peso: 2,
    lunghezza: 34
  },
  {
    varietà: 'Viola',
    peso: 1,
    lunghezza: 26
  },
  {
    varietà: 'Ambra',
    peso: 4,
    lunghezza: 19
  },
  {
    varietà: 'Bianco',
    peso: 5,
    lunghezza: 17
  },
  {
    varietà: 'Nero',
    peso: 6,
    lunghezza: 23
  },
];

var arrSmall = [];
var arrBig = [];

for (zucchina of arrZuc) {
  if (zucchina.lunghezza <= 15) {
    arrSmall.push(zucchina);
  } else {
    arrBig.push(zucchina);
  }
}

var totPeso = 0;

for (var zucc of arrSmall) {
  totPeso += zucc.peso;
}

console.log('Il peso totale delle zucchine piccole è: ' + totPeso.toFixed(2) + 'kg');


for (var zucc of arrBig) {
  totPeso += zucc.peso;
}

console.log('Il peso totale delle zucchine grandi è: ' + totPeso.toFixed(2) + 'kg');