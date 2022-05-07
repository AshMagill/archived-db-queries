db.companyData.insertOne(
  { _id: 'moledr', name: 'Mole Doctor' },
  { writeConcern: { w: 1, j: true } }
);
