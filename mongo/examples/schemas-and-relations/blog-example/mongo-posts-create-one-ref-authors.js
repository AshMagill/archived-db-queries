db.posts.insertOne({
  title: 'My first post',
  text: 'this is my first post',
  tags: ['new', 'tech'],
  creator: ObjectId('627c606622d8a51f26ae9f3f'),
  comments: [
    { text: 'I like this post', author: ObjectId('626c6b425c7d5b0435112e8a') },
  ],
});
