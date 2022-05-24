const router = require("express").Router();
const Book = require("../models/Book");

const upload = require("../middleware/upload.js");

router.post("/createBook", upload.single("bookImg"), async (req, res) => {
  try {
    const { author, title, date, type, isNewBook, description, price } =
      req.body;
    const book = await Book.create({
      bookImg: req.file.filename,
      author,
      title,
      date,
      type,
      isNewBook,
      price,
      description,
    });
    res.status(200).json({ status: true, message: "book created", data: book });
  } catch (err) {
    res.status(500).json({ status: false, messsage: err });
  }
});

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ status: true, message: "book list", data: books });
  } catch (err) {
    res.status(500).json({ status: false, messsage: err });
  }
});

router.get("/someBooks", async (req, res) => {
  try {
    const books = await Book.find({});
  } catch (err) {
    res.status(500).json({ status: false, messsage: err });
  }
});

router.get("/book/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (book) {
      res
        .status(200)
        .json({ status: true, message: "book informations", data: book });
    } else {
      res.status(200).json({ status: false, message: "book does not exist" });
    }
  } catch (err) {
    res.status(500).json({ status: false, messsage: err });
  }
});

router.put("/editBook/:id", async (req, res) => {
  try {
    if (book) {
      await Book.findByIdAndUpdate({ ...req.body });
    } else {
      res.status(200).json({ status: true, message: "book does not exist" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
});

router.delete("/deleteBook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (book) {
      await Book.findByIdAndDelete(id);
      res
        .status(200)
        .json({ status: true, message: "book has been deleted", data: book });
    } else {
      res.status(200).json({ status: true, message: "book does not exist" });
    }
  } catch (err) {
    res.status(500).json({ status: false, message: err });
  }
});

module.exports = router;
