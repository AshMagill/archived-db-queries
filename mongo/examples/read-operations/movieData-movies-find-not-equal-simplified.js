db.movies.find({ runtime: { $ne: 60 } }).count();
