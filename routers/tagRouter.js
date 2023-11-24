const express = require("express");
const router = express.Router();
const tagController = require("../controllers/tagController.js");



//rotta store
router.tag("/", tagController.store)

module.exports = router;