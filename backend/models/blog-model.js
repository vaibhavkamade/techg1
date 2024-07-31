const { Schema, model, Mongoose} = require("mongoose");

const blogSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    cover: { type: String, required: true },
});

const Blog = new model("Blog", blogSchema);

module.exports = Blog;