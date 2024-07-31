const express = require("express");
const blogs = require("../controllers/blog-controller");
const authMiddleware = require("../middleware/auth-middleware");
const authController = require("../controllers/auth-controller")
const router = express.Router();

router.route("/blogs").get(blogs);
router.route("/blogs/:id").get(authMiddleware, authController.getBlogById);

module.exports = router;