db.movies
  .find(
    { 'rating.average': { $gt: 9 } },
    { genres: { $slice: [1, 2] }, name: 1 }
  )
  .pretty();
