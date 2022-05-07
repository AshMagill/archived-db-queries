db.movies.find({ runtime: { $lte: 42 } }).pretty();
