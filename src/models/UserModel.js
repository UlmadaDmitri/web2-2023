//import { Schema, model, models } from "mongoose";
const mongoose = require ("mongoose")
const UserModel = new mongoose.Schema({
    email: {
        type: String,
        unique: [true, "Email already exists."],
        required: [true, "Email is required."],
    },
    username: {
        type: String,
        unique: [true, "Username already exists."],
        required: [true, "Username is required."],
    },
    role_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Role is required"],
        ref: "Role",
        //default: "6505c48adba63bdf1b69486f"
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    }
});

const User = mongoose.models.User || mongoose.model("User", UserModel);

module.exports = User;