require("dotenv").config({ path: "./.env" });

const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://reduxWeb:iJHzmu3aXm6Tn2C9@redux-data.8oxbf.mongodb.net/?retryWrites=true&w=majority&appName=redux-data";

console.log("MongoDB URI:", process.env.MONGODB);
const initializeDataBase = async () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = { initializeDataBase };
