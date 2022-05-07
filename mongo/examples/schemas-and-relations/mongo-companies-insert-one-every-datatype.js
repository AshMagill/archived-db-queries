db.companies.insertOne({
  name: 'Fresh Apples Inc',
  isStartup: true,
  employee: 33,
  funding: 12345678901234567890,
  details: { ceo: 'Mark Super' },
  tags: [{ title: 'super' }, { title: 'super' }, { title: 'perfect' }],
  foundingDate: new Date(),
  insertedAt: new Timestamp(),
});
