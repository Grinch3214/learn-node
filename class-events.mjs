import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();

    this.author = author;
    this.text = text;
    this.likeQty = 0;
  }

  like(userName) {
    this.likeQty++;
    this.emit('likePost', userName);
  }
}

const myPost = new Post('Max', 'Test text for post');

myPost.on('likePost', (userName) => console.log(`${userName} liked post`));

myPost.like('Oleg');

setTimeout(() => myPost.like('Dmitro'), 1000);
