//insert many
db.companyData.insertMany([
  { _id: 'globalcorp', name: 'Global Corp' },
  { _id: 'rubberbandking', name: 'Rubber Band King' },
]);

//insert many
db.companyData.insertOne({ _id: 'socksrus', name: 'Socks R Us' });

//duplicate data with unordered inserts
db.companyData.insertMany(
  [
    { _id: 'globalcorp', name: 'Global Corp' },
    { _id: 'kittenking', name: 'Kitten King' },
  ],
  { ordered: false }
);

//insert one with journal false
db.companyData.insertOne(
  { _id: 'joesburgers', name: 'Joes Burgers' },
  { writeConcern: { w: 1, j: false } }
);

//insert one with journal true
db.companyData.insertOne(
  { _id: 'joesburgers', name: 'Joes Burgers' },
  { writeConcern: { w: 1, j: true } }
);
