aha.on({ event: 'aha-develop.server-invocation-triggers.excessiveLogging' }, () => {
  console.log('-------I AM LOGGING ON THE SERVER!!!!------');

  // tests logging a big nested object. 
  // with i < 16 this is *just* too big - at 15 it will fit, so you can test what its like 
  // viewing a big untruncated object. 
  let obj = {};
  for (let i = 0; i < 16; i++ ){
    obj[i] = {};
    for (let j = 0; j <= i; j++) {
      obj[i][j] = {};
      for (let k = 0; k <= j; k++) {
        obj[i][j][k] = `${i}${j}${k}`;
      }
    }
  }

  console.log(obj);

  // for testing another kind of excessive logging - too many lines. 
  /* 
    for (let i = 0; i < 200; i++) {
      console.log(i);
    }
  */
});