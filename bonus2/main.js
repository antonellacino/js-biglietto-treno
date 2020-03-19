//Inserisci con due prompt l’età di due persone (persona1, persona2)
//stampa a schermo il numero più grande.

//creo la variabile del messaggio
var msg;
//creo la variabile della prima Età
var primaEta=prompt('Inserisci la tua eta');
//creo la variabile della seconda Età
var secondaEta=prompt("Inserisci l'età del/la tuo/a amico/a")
//eseguo il confronto
if (primaEta>secondaEta) {
  msg="E' più grande chi ha "+primaEta+" anni";
}else {
  msg="E' più grande chi ha "+secondaEta+" anni";
}
//mando a video i risultati
document.getElementById('risposta').innerHTML=msg;
