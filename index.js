const express = require("express");
const cors = require("cors");
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

//routes import

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRout");
const lpRoutes = require("./routes/lpRoutes");

//Database Connection
const db = require("./config/database");
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err.message);
  });

const app = express();

app.use(express.json());
//define routes

app.use("/api/users", userRoutes);
app.use("/api/landing", lpRoutes);

app.use("/api/auth", authRoutes);
app.use(cors("*"));

//Gig routes
//app.use("/", require("./routes/routes"));

const PORT = process.env.PORT || 5000;
db.sync()
  .then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log("Error: " + err));
