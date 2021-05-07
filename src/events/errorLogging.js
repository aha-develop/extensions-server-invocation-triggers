aha.on({ event: 'aha-develop.server-invocation-triggers.errorLogging' }, () => {
  console.log('Backend invocation logs can also capture and display errors.');
  console.log('I will now intentionally trigger an error:');
  doesNotExist.thisWillError();
});