db.user.find({ age: { $exists: true, $gt: 30 } });
