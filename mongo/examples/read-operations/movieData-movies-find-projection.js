db.movies
  .find({}, { name: 1, genres: 1, runtime: 1, rating: 1, _id: 0 })
  .pretty();
