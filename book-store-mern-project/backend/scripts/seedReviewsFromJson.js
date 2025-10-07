require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Book = require('../src/books/book.model');

async function run() {
  try {
    const jsonPath = path.join(__dirname, '../../frontend/public/books.json');
    const raw = fs.readFileSync(jsonPath, 'utf8');
    const items = JSON.parse(raw);

    if (!process.env.DB_URL) throw new Error('Missing DB_URL in .env');
    await mongoose.connect(process.env.DB_URL);

    let updated = 0;
    let matchedByCover = 0;
    let skipped = 0;

    for (const item of items) {
      const review = item.review || '';
      if (!review.trim()) { skipped++; continue; }

      // Primary match by title
      let doc = await Book.findOneAndUpdate(
        { title: item.title, coverImage: item.coverImage },
        { $set: { review } },
        { new: true }
      );

      // Fallback match by coverImage when title mismatch/duplicates
      if (!doc && item.coverImage) {
        doc = await Book.findOneAndUpdate(
          { coverImage: item.coverImage },
          { $set: { review } },
          { new: true }
        );
        if (doc) matchedByCover++;
      }

      if (doc) updated++; else skipped++;
    }

    console.log(`Reviews updated: ${updated} | matched by coverImage: ${matchedByCover} | skipped: ${skipped}`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();


