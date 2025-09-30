/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 1')

const num1 = 12
const num2 = 25

if (num1 > num2) {
  console.log(num1 + ' è maggiore di ' + num2)
} else {
  console.log(num2 + ' è maggiore di ' + num1)
}

console.log('')

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 2')

const num = 6

if (num === 5) {
  console.log('Equal')
} else {
  console.log('Not Equal')
}

console.log('')

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 3')

const div5 = 20

if ((div5 % 5) === 0) {
  console.log('Divisibile per 5')
} else {
  console.log('Non divisibile per 5')
}

console.log('')

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 4')

const numAdd = 6
const numAdd1 = 2

if (numAdd === 8 || numAdd1 === 8 || (numAdd+numAdd1) === 8) {
  console.log("C'è un 8")
} else {
  console.log("Non c'è un 8")
}

console.log('')

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 5')

const spesaCliente = 35
const costoSpedizione = 10
let totalShoppingCart 

if (spesaCliente >= 50) {
  totalShoppingCart = spesaCliente
} else {
  totalShoppingCart = spesaCliente + costoSpedizione
}
console.log('TOTALE CARRELLO =', totalShoppingCart)

console.log('')

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 6')

const spesaBaseC = 65
const promo = 20
const sconto = spesaBaseC / 100 * promo
const spesaC20 = spesaBaseC - sconto
console.log('SPESA SCONTATA =', spesaC20)
const costoSpedizione20 = 10
let totalShoppingCart20 

if (spesaC20 >= 50) {
  totalShoppingCart20 = spesaC20
} else {
  totalShoppingCart20 = spesaC20 + costoSpedizione20
}
console.log('TOTALE CARRELLO =', totalShoppingCart20)

console.log('')

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 7')

let var1 = 89
let var2 = 45
let var3 = 37

if (var1 > var2 && var2 > var3) {
  console.log('ORDINE CORRETTO =', var1, var2, var3)
} else if (var2 > var1 && var1 > var3) {
  console.log('ORDINE CORRETTO =', var2, var1, var3)
} else if (var3 > var1 && var1 > var2) {
  console.log('ORDINE CORRETTO =', var3, var1, var2)
} else if (var3 > var2 && var2 > var1) {
  console.log('ORDINE CORRETTO =', var3, var2, var1)
} else if (var2 > var3 && var3 > var1) {
  console.log('ORDINE CORRETTO =', var2, var3, var1)
} else if (var1 > var3 && var3 > var2) {
  console.log('ORDINE CORRETTO =', var1, var3, var2)
} else {
  console.log('ERRORE')
}

console.log('')

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 8')

const numOString = 12

console.log(typeof numOString)

console.log('')

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 9')

const numPariODisp = 31

if ((numPariODisp % 2) === 0) {
  console.log('Il numero è Pari')
} else {
  console.log('Il numero è Dispari')
}

console.log('')

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 10')

let val = 3
  if (val > 5 && val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

console.log('')

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 11')

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'
console.log(me)
console.log('VALORE AGGIUNTO =', me.city)

console.log('')

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 12')

delete me.lastName
console.log(me)
console.log(me.lastName)

console.log('')

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 13')

me.skills.pop()
console.log(me)

console.log('')

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 14')

const vuoto = []

vuoto.splice(0,10,1,2,3,4,5,6,7,8,9,10)
console.log(vuoto)

console.log('')

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('ESERCIZIO 15')

vuoto.splice(9,1,100)
console.log(vuoto)

console.log('')
