import { readFile } from 'node:fs/promises'


// readFile returnerar en Buffer
// Buffer har funtionen toString()
// toString anropas automatiskt när man typomvandlar till en sträng

let contents = String(await readFile('guessingGame.js'))
console.log('Here are the contents of guess.js');
console.log(contents);