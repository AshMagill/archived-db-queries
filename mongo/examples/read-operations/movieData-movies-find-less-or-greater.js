db.movies.find({
  $or: [{ 'rating.average': { $lt: 5 } }, { 'rating.average': { $gt: 9.3 } }],
});
