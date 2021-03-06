const express = require("express");
const router = express.Router();
const ctrlBook = require("../controllers/book");

//books

router.route("/books").get(ctrlBook.getBooks).post(ctrlBook.createBook);
router
  .route("/books/:bookid")
  .get(ctrlBook.getSingleBook)
  .put(ctrlBook.updateBook)
  .delete(ctrlBook.deleteBook);

module.exports = router;
