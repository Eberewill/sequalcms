const firebase = require("firebase");

firebase.initializeApp({
  apiKey: "AIzaSyCOkrcvQvTBf50-YbY5ALSFKvwIyWwI_J4",
  authDomain: "schoolverse.firebaseapp.com",
  databaseURL: "https://schoolverse.firebaseio.com",
  projectId: "schoolverse",
  storageBucket: "schoolverse.appspot.com",
  messagingSenderId: "515184959709",
  appId: "1:515184959709:web:6663376119075b4a3e7b34",
});
module.exports = { firebase };
