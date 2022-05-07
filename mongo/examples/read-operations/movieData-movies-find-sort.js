db.movies.find().sort({ 'rating.average': -1 }).pretty();
