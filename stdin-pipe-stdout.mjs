import { Transform } from 'stream';
import fs from 'fs';

const upperCaseStream = new Transform({
  transform(chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase();
    cb(null, upperCased);
  },
});

// reversed string
const reverseStream = new Transform({
  transform(chunk, encoding, cb) {
    const arrayofChars = chunk.toString().split('');
    const lastChar = arrayofChars.pop();
    const reversed = arrayofChars.reverse().concat(lastChar).join('');
    cb(null, reversed);
  },
});

process.stdin.pipe(upperCaseStream).pipe(reverseStream).pipe(process.stdout);

// const filePath = './files/stdin-dump.txt';
// const writeStream = fs.createWriteStream(filePath);

// process.stdin.pipe(writeStream);
