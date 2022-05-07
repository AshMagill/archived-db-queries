db.customers.updateOne(
  {},
  { $set: { orders: [{ title: 'a book', price: 12.0, quantity: 2 }] } }
);
