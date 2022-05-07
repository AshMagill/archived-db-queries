db.user.find({ age: { $exists: false } }).pretty();
