const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();
const {
  getAllUser,
  createUser,
  updateUser,
  getUser,
  deleteUser,
} = require("../controller/userController");

router.route("/").get(getAllUser).post(createUser);

router.route("/:id").put(updateUser).get(protect, getUser).delete(deleteUser);

module.exports = router;
