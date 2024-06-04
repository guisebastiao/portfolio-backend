const { Router } = require("express");

const TestController = require("../controllers/TestController");

const router = new Router();

router.get("/",  TestController.index);

module.exports = router;
