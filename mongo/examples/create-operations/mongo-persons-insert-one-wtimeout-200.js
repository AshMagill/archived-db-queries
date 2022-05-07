db.persons.insertOne(
  { name: 'Aliya', age: 33 },
  { writeConcern: { w: 1, j: true, wtimeout: 200 } }
);
