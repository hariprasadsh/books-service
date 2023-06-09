const Book = require("../models/book");

exports.getBooks = async (req, res, next) => {
  const books = await Book.fetchAll();
  console.log("Books-> ", books);

  res.status(200).json(books);
};

exports.addBook = async (req, res, next) => {
  console.log("req -> ", req.body);
  const result = await Book.save(req.body);

  if (result) {
    res.status(200).send({ status: "ok", message: "Added Successfully" });
  }
};
