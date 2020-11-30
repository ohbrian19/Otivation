const express = require("express");
const router = express.Router();

const {
  getProfileByEmail,
  updateProfile,
  createProfile,
} = require("../db/queries");

router.post("/", createProfile);

router.get("/:email", getProfileByEmail);

router.put("/:email", updateProfile);

module.exports = router;
