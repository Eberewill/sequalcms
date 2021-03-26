const asyncHandler = require("express-async-handler");
const admin = require("../services/firebase-service");
const firebase = require("firebase");

const registerUser = asyncHandler(async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  const user = await admin.auth().createUser({
    email,

    password,
    displayName: `${firstName} ${lastName}`,
  });

  const token = await admin.auth().createCustomToken(user.uid);

  return res.send(token);
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  return res.send(user);
});

module.exports = { registerUser, loginUser };
