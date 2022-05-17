import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBb5iegT1uzNhdMu89R8QBxMz5-HJYWod8",
    authDomain: "cloud-messaging-21.firebaseapp.com",
    databaseURL: "https://cloud-messaging-21-default-rtdb.firebaseio.com",
    projectId: "cloud-messaging-21",
    storageBucket: "cloud-messaging-21.appspot.com",
    messagingSenderId: "551086984847",
    appId: "1:551086984847:web:220b39b11132eda5d02afa"
  });


navigator.serviceWorker
    .register('../public/firebase-messaging-sw')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}