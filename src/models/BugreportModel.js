const mongoose = require ("mongoose")
const BugreportModel = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, "Bugreport already exists."],
        required: [true, "Bugreport is required."],
    },
    content: {
        type: String,
        required: [true, "Message is required."],
    },
    author: {
        type: String,
        required: [true, "Author is required."]
    }
});

const Bugreport = mongoose.models.Bugreport || mongoose.model("Bugreport", BugreportModel);

module.exports = Bugreport;
