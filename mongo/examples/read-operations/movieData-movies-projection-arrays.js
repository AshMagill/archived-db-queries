db.movies
  .find(
    { 'rating.average': { $gt: 9 } },
    { genres: { $elemMatch: { $eq: 'Horror' } } }
  )
  .pretty();
