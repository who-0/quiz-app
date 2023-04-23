const mongoose = require("mongoose");
const MONGO = process.env.MOGO_URL;

mongoose.connection.once("open", () => {
  console.log("Mongodb is connected");
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});

const mongoConnect = async () => {
  await mongoose.connect(MONGO);
};

const mongoDisconnect = async () => {
  mongoose.disconnect();
};

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
