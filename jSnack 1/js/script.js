
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

  var totPeso = 0;

  for (var zucc of arrZuc) {
    totPeso += zucc['peso'];
  }
 
  console.log('Peso totale: ' +  totPeso.toFixed(2) + 'kg');





