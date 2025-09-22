import fs from 'fs';
import crypto from 'crypto';

const __filename = new URL(import.meta.url).pathname;
console.log('1. Starting the script...');

setTimeout(() => {
  console.log('2. Timeout 0s callback (macrotask)');
}, 0);

setTimeout(() => {
  console.log('3. Timeout 0s callback (macrotask)');
}, 0);


setImmediate(() => {
  console.log('4. Immediate callback (macrotask)');
});

Promise.resolve().then(()=>{
  console.log('5. Promise callback (microtask)');
})  


process.nextTick(() => {
  console.log('6. Next tick callback (microtask)');
});

fs.readFile(__filename, () => {
  console.log('7. File read callback (I/O task)');
});

crypto.pbkdf2('password','2323',100000,64,'sha512', (err,key) => {
  if(err) throw err; 
  console.log('8. Crypto callback (I/O task)');
});

console.log('9. End of the script...');