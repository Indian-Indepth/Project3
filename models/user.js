const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username : {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
      },
      email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },
      userCreated: {
        type: Date,
        default: Date.now
      }
})

let User = mongoose.model("User", UserSchema);
module.exports = User;