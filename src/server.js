require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT;
app.listen(PORT || 9001, () => console.log("Server running"));
