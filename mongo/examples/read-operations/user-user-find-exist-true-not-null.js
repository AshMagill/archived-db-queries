db.user.find({ age: { $exists: true, $ne: null } }).pretty();
