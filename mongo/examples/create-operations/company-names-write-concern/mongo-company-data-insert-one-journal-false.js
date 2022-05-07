db.companyData.insertOne(
  { _id: 'joesburgers', name: 'Joes Burgers' },
  { writeConcern: { w: 1, j: false } }
);
