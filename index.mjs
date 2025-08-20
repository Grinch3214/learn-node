import fs from 'fs';
import { EventEmitter } from 'events';

const fileEmmiter = new EventEmitter();

fileEmmiter.on('writeComplete', () => {
  console.log('File first.txt was written');
  fs.appendFile('./first.txt', '\nOne more line', () => {
    fileEmmiter.emit('appendComplete');
  });
});

fileEmmiter.on('appendComplete', () => {
  console.log('Append text to the first.txt file');
  fs.rename('./first.txt', './renamed-first.txt', () => {
    fileEmmiter.emit('renameComplete');
  });
});

fileEmmiter.on('renameComplete', () => {
  console.log('File was renamed');
});

fs.writeFile('./first.txt', 'First file text test', () => {
  fileEmmiter.emit('writeComplete');
});
