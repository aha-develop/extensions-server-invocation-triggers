aha.on('triggerExcessiveLogging', () => {
  console.log('On the frontend triggering excessive backend logging: ');

  aha.triggerServer(`aha-develop.server-invocation-triggers.excessiveLogging`);
});
