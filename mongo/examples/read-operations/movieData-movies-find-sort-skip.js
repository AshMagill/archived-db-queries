db.movies.find().sort({ 'rating.average': -1 }).skip(10).pretty();
