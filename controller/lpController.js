const asyncHandler = require("express-async-handler");
const Lp = require("../models/Lp");

const createLp = asyncHandler(async (req, res) => {
  const data = req.body;
  const newLp = await Lp.create(data);
  if (newLp) {
    res.status(201).json(newLp);
  } else {
    res.status(400);
    throw new Error("Lp not created");
  }
});

const getLps = asyncHandler(async (req, res) => {
  const lp = await Lp.findAll();

  if (lp) {
    res.status(200).json(lp);
  } else {
    res.status(400);
    throw new Error("Page not found");
  }
});

const getLp = asyncHandler(async (req, res) => {
  const lp = await Lp.findByPk(req.params.id);

  if (!lp) {
    res.send("no landing page found with id");
  }

  res.json(lp);
});

const updateLp = asyncHandler(async (req, res) => {
  const lp = await Lp.findByPk(req.params.id);

  if (!lp) {
    res.send("no LP with id");
  }
  const lpData = req.body;

  const dataToUpdate = {
    url: lpData.url,
    language: lpData.language,
    content: lpData.content,
    sheetTitle: lpData.sheetTitle,
    imageSlider: lpData.imageSlider,
  };
  const updated = await Lp.update(dataToUpdate, {
    where: { id: req.params.id },
  });

  res.json({ message: "landing page Updated" });
});

module.exports = { getLps, updateLp, getLp, createLp };
