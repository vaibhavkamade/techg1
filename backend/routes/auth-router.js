const express = require('express');
const router = express.Router();
// const {home,register} = require('../controllers/auth-controller');
const authcontroller = require('../controllers/auth-controller');
const validate = require('../middleware/validate-middleware');
const {signupSchema, loginSchema} = require('../validators/auth-validator');
const authMiddleware = require('../middleware/auth-middleware');
// router.get("/",(req,res)=>{
//     res.status(200).send("Welcome using router");
// });
router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema), authcontroller.register);
router.route("/login").post(validate(loginSchema), authcontroller.login);
// router.route("/login").post(authcontroller.login);
router.route("/user").get(authMiddleware, authcontroller.user);
// router.route("/").get(home);
// router.route("/register").get(register);
module.exports = router;