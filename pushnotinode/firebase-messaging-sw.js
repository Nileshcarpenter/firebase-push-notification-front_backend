// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'BEg5kciIGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiRMH-7FzXwNqeAWdd26USDR20rvKAQH3e9EL8Pi5tA66KQ' }).then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      // ...
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });