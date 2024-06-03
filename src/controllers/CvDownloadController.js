const path = require("path");

class CvDownloadController {
  async index(_req, res){
    try {
      const filePath = path.join(__dirname, "..", "..", "files", "CvGuilherme.pdf");

      res.download(filePath);
    } catch {
      res.status(400).json({ errors: ["Algo deu errado, tente novamente mais tarde."] });
    }
  }
}

module.exports = new CvDownloadController();
