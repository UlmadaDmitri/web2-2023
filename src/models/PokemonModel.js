//import { Schema, model, models } from "mongoose";
const mongoose = require ("mongoose")
const PokemonModel = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "Name already exists."],
        required: [true, "Name is required."],
    },
    type: {
        type: String,
        required: [true, "Type is required."],
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