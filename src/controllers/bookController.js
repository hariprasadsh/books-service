const Book = require("../models/book");

exports.getBooks = async (req, res, next) => {
  try {
    const books = await Book.fetchAll();

    res.status(201).json(books);
  } catch (error) {
    res.status(500).json({ general: "Something went wrong, please try again" });
  }
};

exports.addBook = (req, res, next) => {};
