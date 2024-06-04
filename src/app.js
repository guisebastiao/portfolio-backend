const express = require("express");
const cors = require("cors");

const TestRouter = require("./routes/TestRouter");
const ContactRouter = require("./routes/ContactRouter");
const CvDownloadRouter = require("./routes/CvDownloadRouter");

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
