const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");
const {body, checkSchema} = require("express-validator")
const postCreate = require("../validations/postCreate.js");
const authHandler = require("../middlewares/authHandler.js");



// rotta index
router.get("/", postController.index)
//rotta show
router.get("/:slug", postController.show)
//rotta store
router.post("/",authHandler, checkSchema(postCreate),postController.store)
//rotta update
router.put("/:slug",authHandler, postController.update)
//rotta delete
router.delete("/:slug",authHandler, postController.destroy)

module.exports = router;