const express = require("express");
const router = express.Router();
const controller = require('../controllers/controller')

router.get("/", controller.home);
router.get("/resume", controller.resume);
router.get("/contact", controller.contact);

module.exports = router;