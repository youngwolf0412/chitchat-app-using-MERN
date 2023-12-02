const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);

// connectDB();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connection succesful");
  })
  .catch((error) => {
    console.log(err.message);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT ${process.env.PORT}`);
});
