import { readFile, writeFile } from 'node:fs/promises'



let guestbook = String(await readFile('guestbook.txt'))
console.log('Here are the contents of guestbook');
// console.log(guestbook);

await writeFile('guestbook.txt', [...guestbook, ',\n' + 'Oskar Vig'])
console.log(guestbook);

