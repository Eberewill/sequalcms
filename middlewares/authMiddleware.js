const asyncHandler = require("express-async-handler");
const admin = require("../services/firebase-service");

async function protect(req, res, next) {
  if (req.headers.authtoken) {
    try {
      const user = await admin.auth().verifyIdToken(req.headers.authtoken);
      req.authUser = user.uid;

      next();
    } catch (err) {
      res.status(403).send("Unauthorized");
    }
  } else {
    res.status(403).send("Unauthorized");
  }
}

module.exports = { protect };
