const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");


// rotta index
router.get("/", postController.index)
//rotta show
router.get("/:slug", postController.show)
//rotta store
router.post("/", postController.store)
//rotta update
router.put("/:slug", postController.update)
//rotta delete
router.delete("/:slug", postController.delete)

module.exports = router;