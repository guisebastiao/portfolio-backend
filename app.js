const express = require("express");
const cors = require("cors");

const TestRouter = require("./src/routes/TestRouter");
const ContactRouter = require("./src/routes/ContactRouter");
const CvDownloadRouter = require("./src/routes/CvDownloadRouter");

class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(){
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes(){
    this.app.use("/", TestRouter)
    this.app.use("/sendmail", ContactRouter);
    this.app.use("/download", CvDownloadRouter);
  }
}

module.exports = new App().app;
