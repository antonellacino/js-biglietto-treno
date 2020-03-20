/* calcolo biglietto del treno con relativi sconti diversi per le categorie che ci rientrano
DESCRIZIONE:
ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 € al km),
ma va applicato uno sconto del 20% per i minorenni
e del 40% per gli over 65.*/


//creo la variabile dell'età del passeggero e la salvo in una variabile
var etaPasseggero=parseInt(prompt('Inserisci la tua età'));

//creo la variabile dei km da percorrere e li salvo in una variabile
var km=parseInt(prompt('Quanti km devi percorrere?'));

//creo la variabile costo del biglietto
var costoBiglietto= km * 0.21;

//creo la variabile messaggio
var msg="Il costo del tuo biglietto è di € ";

//eseguo i controlli sull'eta del passeggero e verifico se c'è uno sconto
if (etaPasseggero < 18) {
  costoBiglietto=costoBiglietto-(costoBiglietto*0.2); //costo biglietto=costoBiglietto*0.8
  msg= msg+costoBiglietto.toFixed(2);
} else if (etaPasseggero > 65) {
  costoBiglietto=costoBiglietto-(costoBiglietto*0.4);//costo biglietto=costoBiglietto*0.6
  msg=msg+costoBiglietto.toFixed(2);
}else {
  msg=msg+costoBiglietto.toFixed(2);
}
console.log(costoBiglietto);
//rimando a video i risultati
document.getElementById('costoBiglietto').innerHTML= msg;
