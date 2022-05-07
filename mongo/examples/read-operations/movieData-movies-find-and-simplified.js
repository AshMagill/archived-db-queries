db.movies.find({ 'rating.average': { $gt: 9 } }, { genres: 'Drama' }).count();
