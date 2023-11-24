const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController.js");



//rotta store
router.post("/", categoryController.store)

module.exports = router;