import fs from 'fs';
import { EventEmitter } from 'events';

const fileEmitter = new EventEmitter();

const PATH = './first.txt';
const RENAMED_PATH = './renamed-first.txt';

function handleWriteComplete() {
  console.log('File first.txt was written');
  appendToFile();
}

function handleAppendComplete() {
  console.log('Append text to the first.txt file');
  renameFile();
}

function handleRenameComplete() {
  console.log('File was renamed');
}

function writeFile() {
  fs.writeFile(PATH, 'First file text test', () => {
    fileEmitter.emit('writeComplete');
  });
}

function appendToFile() {
  fs.appendFile(PATH, '\nOne more line', () => {
    fileEmitter.emit('appendComplete');
  });
}

function renameFile() {
  fs.rename(PATH, RENAMED_PATH, () => {
    fileEmitter.emit('renameComplete');
  });
}

fileEmitter.on('writeComplete', handleWriteComplete);
fileEmitter.on('appendComplete', handleAppendComplete);
fileEmitter.on('renameComplete', handleRenameComplete);

writeFile();
