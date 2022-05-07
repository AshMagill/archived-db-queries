db.books.aggregate([
  {
    $lookup: {
      from: 'authors',
      localField: 'authors',
      foreignField: '_id',
      as: 'creators',
    },
  },
]);
