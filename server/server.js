const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const http = require("http");
const app = require("./app");
const { mongoConnect, mongoDisconnect } = require("./config/MONGO");
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

server.listen(PORT, async (error) => {
  if (!error) {
    await mongoConnect();
    console.log(`Server is running on PORT:${PORT}`);
  } else {
    mongoDisconnect();
    console.log(error);
  }
});
