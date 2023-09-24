//import { Schema, model, models } from "mongoose";
const mongoose = require ("mongoose")
const PokemonModel = new mongoose.Schema({
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

const Pokemon = mongoose.models.Pokemon || mongoose.model("Pokemon", PokemonModel);

module.exports = Pokemon;