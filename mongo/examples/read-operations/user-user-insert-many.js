db.user.insertMany([
  {
    name: 'Max',
    hobbies: [
      { title: 'Sports', frequency: 3 },
      { title: 'Cooking', frequency: 6 },
    ],
  },
  {
    name: 'Manuel',
    hobbies: [
      { title: 'Cooking', frequency: 5 },
      { title: 'Cars', frequency: 2 },
    ],
    phone: '0213034433',
    age: 30,
  },
]);
