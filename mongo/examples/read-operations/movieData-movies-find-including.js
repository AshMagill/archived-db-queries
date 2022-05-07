db.movies.find({ runtime: { $in: [30, 42] } }).pretty();
