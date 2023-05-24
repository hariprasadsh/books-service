const express = require("express");

const bookController = require("../controllers/bookController");

const router = express.Router();

router.get("/", bookController.getBooks);
router.post("/add", bookController.addBook);

exports.routes = router;
