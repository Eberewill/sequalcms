const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  getLp,
  getLps,
  updateLp,
  createLp,
} = require("../controller/lpController");

router.route("/").get(getLps).post(createLp);

router.route("/:id").put(protect, updateLp).get(getLp);

module.exports = router;
