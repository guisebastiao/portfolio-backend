class TestController {
  async index(_req, res){
    try {
      res.send("Server Running!");
    } catch {
      res.status(400).send("Error!");
    }
  }
}

module.exports = new TestController();
