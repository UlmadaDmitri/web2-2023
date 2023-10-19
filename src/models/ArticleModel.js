const mongoose = require ("mongoose")
const ArticleModel = new mongoose.Schema({
    title: {
        type: String,
        unique: [true, "Email already exists."],
        required: [true, "Email is required."],
    },
    content: {
        type: String,
        required: [true, "Username is required."],
    },
    author: {
        type: String,
        required: [true, "Author is required."]
    }
});

const Article = mongoose.models.Article || mongoose.model("Article", ArticleModel);

module.exports = Article;
