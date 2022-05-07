db.sales.find({ $expr: { $gt: ['$volume', '$target'] } }).pretty();
