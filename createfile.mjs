// node createfile.mjs <filename> <number>
import fs from 'fs';
import path from 'path';

if (!process.argv[2] || !process.argv[3]) {
  console.log('Use all arg');
  process.exit(0);
}

const fileName = process.argv[2];
const linesQty = process.argv[3];

if (isNaN(linesQty)) {
  console.log('Qty must be a number');
  process.exit(0);
}

const writeStream = fs.createWriteStream(path.join('./files/', fileName));

console.log('Start', performance.now());
for (let i = 1; i <= linesQty; i++) {
  writeStream.write(`This is a line number ${i}\n`);
}

console.log('End', performance.now());
setTimeout(() => console.log('Timeout 0', performance.now()), 0);

writeStream.end(() => {
  console.log(`Generated file ${fileName} was created`);
});
