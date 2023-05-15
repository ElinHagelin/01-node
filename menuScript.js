import { readFile, writeFile } from 'node:fs/promises'
import { question } from 'readline-sync';

console.log('Välkommen till gästboken!');
console.log('[1] Visa alla besökare');
console.log('[2] Lägg till ett namn i boken');
console.log('[3] Rensa gästboken');
console.log('[4] Avsluta');

let chosen = (question('Välj ett alternativ: '))

