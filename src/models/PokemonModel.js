import { Schema, model, models } from "mongoose";

const UserModel = new Schema({
    name: {
        type: String,
        unique: [true, "Email already exists."],
        required: [true, "Email is required."],
    },
    type: {
        type: String,
        required: [true, "Username is required."],
    },
    nature: {
        type: String,
        required: [true, "Nature is required"],
    },
    has_evolution: {
        type: Boolean,
        required: [true, "Evolution field is required."],
    }
});

const User = models.User || model("User", UserModel);

export default User;