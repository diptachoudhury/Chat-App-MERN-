import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true
      },
      fullName: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true,
        minlength: 6
      },
      profilePic: {
        type: String,
        default: ""
      }
    },
    { timestamps: true }
);


// const User = mongoose.model("User", userSchema); First character should be upperCase
const User = mongoose.models.User || mongoose.model("User", userSchema); //Cannot overwrite User model once compiled err


export default User;