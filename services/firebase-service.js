//firebase stuff
var admin = require("firebase-admin");

var serviceAccount = require("../config/schoolverse-firebase-adminsdk-zhlop-5f7f418adb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://schoolverse.firebaseio.com",
});

module.exports = admin;
