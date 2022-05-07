db.persons.insertOne(
  { name: 'Micheala', age: 51 },
  { writeConcern: { w: 1, j: true } }
);
