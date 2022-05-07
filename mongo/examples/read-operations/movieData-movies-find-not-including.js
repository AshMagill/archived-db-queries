db.movies.find({ runtime: { $nin: [30, 42] } }).pretty();
