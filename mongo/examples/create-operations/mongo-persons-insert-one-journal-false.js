db.persons.insertOne(
  { name: 'Micheal', age: 51 },
  { writeConcern: { w: 1, j: false } }
);
