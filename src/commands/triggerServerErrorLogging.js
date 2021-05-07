aha.on('triggerServerErrorLogging', () => {
  console.log("on the frontend triggering backend error logging: ");

  aha.triggerServer('aha-develop.server-invocation-triggers.errorLogging');
});