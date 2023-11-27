const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");
const {body} = require("express-validator")



// rotta index
router.get("/", postController.index)
//rotta show
router.get("/:slug", postController.show)
//rotta store
router.post("/", 
body("content").isString().notEmpty({ignore_whitespace: true}).isLength({min: 10}),
body("title").isString().notEmpty({ignore_whitespace: true}).isLength({min: 3}),
postController.store)
//rotta update
router.put("/:slug", postController.update)
//rotta delete
router.delete("/:slug", postController.destroy)

module.exports = router;