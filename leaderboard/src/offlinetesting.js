const checkInternetConnected = require('check-internet-connected');

  const config = {
    timeout: 5000, //timeout connecting to each try (default 5000)
    retries: 3,//number of retries to do before failing (default 5)
    domain: 'apple.com'//the domain to check DNS record of
  }

  checkInternetConnected(config)
    .then(() => {
      console.log("Connection available");          
    }).catch((err) => {
      console.log("No connection", err);
    });