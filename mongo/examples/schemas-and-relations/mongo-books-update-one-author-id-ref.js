db.books.updateOne(
  {},
  {
    $set: {
      authors: [
        ObjectId('626c606622d8a51f26ae9f40'),
        ObjectId('626c606622d8a51f26ae9f3f'),
      ],
    },
  }
);
