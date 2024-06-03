const { Router } = require("express");

const CvDownloadController = require("../controllers/CvDownloadController");

const router = new Router();

router.get("/", CvDownloadController.index);

module.exports = router;
