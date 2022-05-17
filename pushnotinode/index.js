// import express (after npm install express)
const express = require('express');
//var firebase = require("firebase/app")
var admin = require("firebase-admin")
//require("firebase/auth");
//require("firebase/firestore")
//var {getMessaging} = require("firebase/messaging")
//var { getMessaging, getToken } =require("firebase/messaging");
// create new express app and save it as "app"
const app = express();

var serviceAccount = require("./privatefile2.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

// var firebaseConfig = {
//   apiKey: "AIzaSyBb5iegT1uzNhdMu89R8QBxMz5-HJYWod8",
//   authDomain: "cloud-messaging-21.firebaseapp.com",
//   databaseURL: "https://cloud-messaging-21-default-rtdb.firebaseio.com",
//   projectId: "cloud-messaging-21",
//   storageBucket: "cloud-messaging-21.appspot.com",
//   messagingSenderId: "551086984847",
//   appId: "1:551086984847:web:220b39b11132eda5d02afa"
// }


  var token=["dkqbSrjEWjQK8p4inaoDA7:APA91bFyk-ffyt6wP7i-2q3EP2H1TEu012ApksgJNLG1wZoCFU_zLUGGDqbuJxilpzJJUrRm_QBpA8tW13IPvGScfgNlyHLwVpeA3Kpj1y-ZVFYStJyFSUCxOAxOQOGpO48GbuwmU3Vx"]
  //firebase.initializeApp(firebaseConfig)
  var payload={
      notification:{
          title:"this is a notification title",
          body:"this is the body of notification message"
      }
  }

  var options={
      priority:"high",
      timeToLive:60*60*24
  }
  
   admin.messaging().sendToDevice(token,payload,options).then(function(response){
   console.log('successfully send msg',response.results)
   }).catch(function(error){
       console.log('have error',error)
   })

  //const messaging = firebase.messaging()
  //messaging.getToken({vapidKey: "BEg5kciIGV9Jm2u7rmsCe65wKzPTw5jtS38n2tVEGiRMH-7FzXwNqeAWdd26USDR20rvKAQH3e9EL8Pi5tA66KQ"})
  
// server configuration
const PORT = 8085;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Hello World');
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
// var http = require('http');
// var fs = require('fs');

// const PORT=8085; 

// fs.readFile('./index.html', function (err, html) {

//     if (err) throw err;    

//     http.createServer(function(request, response) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });