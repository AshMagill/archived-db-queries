db.user.find({ phone: { $type: 'number' } }).pretty();
