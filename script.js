//chiedere all'utente quanti km vuole percorrere
let distance = prompt("Quanti km vuoi percorre?");
//stampare il risultato
console.log(parseInt(distance));
//chiedere l'età del passeggero
let age = prompt("quanti anni hai?");
//stampare il risultato
console.log(parseInt(age));
//costo: 0,21€/km
//under 18 sconto 20%
//over 65 sconto 40%
//calcolare il prezzo del viaggio arrotondando il totale a max 2 numeri decimali:
if (age < 18) {
    //se x<18 totale con sconto 20%
    let priceYoung = ((distance * 0.21)* 0.8);
    //stampare il risultato
    console.log(`Il prezzo del tuo biglietto è ${priceYoung.toFixed(2)}€`);
} else if (age > 65) {
    //altrimenti se x>65 totale sconto 40%
    let priceSenior = ((distance * 0.21)* 0.6);
    //stampare il risultato
    console.log(`Il prezzo del tuo biglietto è ${priceSenior.toFixed(2)}€`);
} else {
    //altrimenti totale senza sconto
    let normnalPrice = (distance * 0.21)
    //stampare il risultato
    console.log(`Il prezzo del tuo biglietto è ${normnalPrice.toFixed(2)}€`);
}