import { readFile, writeFile } from 'node:fs/promises'
import { question } from 'readline-sync';

async function guestbookMenu() {

	console.log('Välkommen till gästboken!');
	const file = 'guestbook.txt'
	let pick = ''

	while (pick !== '4') {
		console.log('[1] Visa alla besökare');
		console.log('[2] Lägg till ett namn i boken');
		console.log('[3] Rensa gästboken');
		console.log('[4] Avsluta');

		let pick = (question('Välj ett alternativ: '))

		let guestbook = await loadGuests(file)

		if (pick === '1') {
			if (guestbook === '') {
				console.log('Gästboken är tom');
			}
			console.log('\nGästboken är: ');
			console.log(guestbook);

		} else if (pick === '2') {
			let newName = (question('Skriv in ditt namn: '))
			await writeFile(file, await loadGuests(file) + newName + ',\n')

		} else if (pick === '3') {
			await writeFile(file, '')

		} else if (pick === '4') {
			return
		}
	}
}


async function loadGuests(filename) {
	try {
		let fileBuffer = await readFile(filename)
		let contents = fileBuffer.toString()
		return contents
	} catch (error) {
		console.log('ERROR: ' + error.message)
		return ''
	}
}

guestbookMenu()