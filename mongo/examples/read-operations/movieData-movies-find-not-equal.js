db.movies.find({ runtime: { $not: { $eq: 60 } } }).count();
