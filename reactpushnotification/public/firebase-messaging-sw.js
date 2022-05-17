importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.6.1/firebase-messaging.js")


firebase.initializeApp({
  apiKey: "AIzaSyBb5iegT1uzNhdMu89R8QBxMz5-HJYWod8",
    authDomain: "cloud-messaging-21.firebaseapp.com",
    databaseURL: "https://cloud-messaging-21-default-rtdb.firebaseio.com",
    projectId: "cloud-messaging-21",
    storageBucket: "cloud-messaging-21.appspot.com",
    messagingSenderId: "551086984847",
    appId: "1:551086984847:web:220b39b11132eda5d02afa"
  
})


const initmessage=firebase.messaging()