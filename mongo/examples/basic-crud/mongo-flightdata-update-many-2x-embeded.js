db.flightData.updateMany(
  {},
  {
    $set: {
      status: {
        description: 'on-time',
        lastUpdated: '1 hour ago',
        details: { responsible: 'Ash Magill' },
      },
    },
  }
);
