const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");
const {body, checkSchema} = require("express-validator")
const postCreate = require("../validations/postCreate.js")



// rotta index
router.get("/", postController.index)
//rotta show
router.get("/:slug", postController.show)
//rotta store
router.post("/", checkSchema(postCreate),postController.store)
//rotta update
router.put("/:slug", postController.update)
//rotta delete
router.delete("/:slug", postController.destroy)

module.exports = router;