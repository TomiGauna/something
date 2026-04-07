import os from 'node:os';

let bytes = os.totalmem() - os.freemem();
console.log((bytes/1024/1024/1024).toFixed())