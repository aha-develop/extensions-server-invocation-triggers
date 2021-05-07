aha.on({ event: 'aha-develop.server-invocation-triggers.excessiveLogging' }, () => {
  console.log('-------I AM LOGGING ON THE SERVER!!!!------');

  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
});