db.passengers.updateOne(
  { name: 'Albert Twostone' },
  { $set: { hobbies: ['sports', 'cooking'] } }
);
