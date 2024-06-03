const { Router } = require("express");

const ContactController = require("../controllers/ContactController");

const router = new Router();

router.post("/", ContactController.store);

module.exports = router;
