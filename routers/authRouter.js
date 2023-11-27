const {Router} = require("express")
const router = Router()
const authController = require("../controllers/authController")
const { checkSchema } = require("express-validator"),
userRegister = require("../validations/userRegistrator")

router.post ("/register", checkSchema(userRegister), authController.register)
router.post ("/login", authController.login)
// router.post ("/password-reset", auth.password_reset)


module.exports = router