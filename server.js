const express = require("express");
const mongoose = require("mongoose");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
require("dotenv").config();

const User = require("./models/User");
const birthdayTemplate = require("./emails/birthdayTemplate");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"));

app.post("/add-user", async (req, res) => {
  await User.create(req.body);
  res.send("Customer added successfully.");
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

cron.schedule("0 7 * * *", async () => {
  const today = new Date();
  const users = await User.find();

  users.forEach(user => {
    if (
      user.dob.getDate() === today.getDate() &&
      user.dob.getMonth() === today.getMonth()
    ) {
      transporter.sendMail({
        from: "CelebrateAI <no-reply@celebrateai.com>",
        to: user.email,
        subject: "A Special Birthday Message 🎂",
        html: birthdayTemplate(user.username)
      });
    }
  });
});

app.listen(3000, () => console.log("CelebrateAI running"));
