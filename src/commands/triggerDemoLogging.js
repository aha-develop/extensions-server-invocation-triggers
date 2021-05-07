aha.on('triggerDemoLogging', () => {
  console.log('On the frontend triggering demo backend logging: ');

  aha.triggerServer('aha-develop.server-invocation-triggers.demoLogging');
});