const express = require('express');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();

// frontend => backend server => controller => book schema => database => send to server => back to the frontend
// post = when submit something fronted to db
// get = when get something back from db
// put/patch = when edit or update something in db
// delete = when delete something from db

// post a book
router.post("/create-book", verifyAdminToken, postABook);

// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBook);

// delete a book endpoint
router.delete("/:id", verifyAdminToken, deleteABook);

module.exports = router;