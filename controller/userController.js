const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const getAllUser = asyncHandler(async (req, res) => {
  const users = await User.findAll();

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(400);
    throw new Error("Users not found");
  }
});
const createUser = asyncHandler(async (req, res) => {
  const data = req.body;
  const newUser = await User.create(data);
  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(400);
    throw new Error("Users not found");
  }
});

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) {
    res.send("no user with id");
  }

  res.json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) {
    res.send("no user with id");
  }

  await User.destroy({ where: { id: req.params.id } });

  res.json({ message: "user Deleted" });
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByPk(req.params.id);

  if (!user) {
    res.send("no user with id");
  }
  const userData = req.body;

  const dataToUpdate = {
    name: userData.name,
    email: userData.email,
    password: userData.password,
    nickname: userData.nickname,
  };
  const updated = await User.update(dataToUpdate, {
    where: { id: req.params.id },
  });

  res.json({ message: "userUpdated", data: updated });
});

module.exports = { getAllUser, createUser, updateUser, getUser, deleteUser };
