db.customers.updateOne(
  {},
  {
    $set: {
      orders: [
        { productId: ObjectId('626bc4735ebf85024f069528'), quantity: 3 },
      ],
    },
  }
);
