db.user.find({ phone: { $type: ['number', 'string'] } }).pretty();
