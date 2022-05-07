db.user
  .find({
    hobbies: { $elemMatch: { title: 'Sports', frequency: { $gte: 3 } } },
  })
  .pretty();
