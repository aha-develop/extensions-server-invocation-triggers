aha.on({ event: 'aha-develop.server-invocation-triggers.demoLogging' }, () => {
  console.log('This code is running on the server and logs will be stored on the invocation record.');
  console.log('Each time you console.log it gets a log line on the invocation page.');

  console.log('You can log objects directly and they will display in a pretty format:');

  const demoObject = { key: "value", nested: { nestedKey: "nestedValue" }};
  console.log(demoObject);
})