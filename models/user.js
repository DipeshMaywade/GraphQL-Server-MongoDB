const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      select: false,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      match: [
        /abc[a-zA-Z0-9.]*@bl[.]co[.][a-z]{2,3}/,
        "please enter valid email",
      ],
    },
    displayName: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
