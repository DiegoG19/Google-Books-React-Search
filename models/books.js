const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    title: { type: String, required: true },
    authors: [{ type: String, required: true }],
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model("Book", bookSchema);
// display the  way where the book schema will be showen 
module.exports = Book;