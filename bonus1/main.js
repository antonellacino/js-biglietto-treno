/*Quanti minuti mancano alla fine dell’ora?
(script che quando aggiorno la pagina mi dice quanti minuti mancano);*/


//creo la variabile time e la salvo in una variabile
var date= new Date();

//calcolo l'ora attuale
var hours= date.getHours();
var minutes= date.getMinutes();
var time=hours+":"+minutes;

//sottraggo i minuti ai 60 dell'ora
minutes=60-minutes;

//mando a video i risultati
document.getElementById('oraAttuale').innerHTML="Ora sono le "+time;
document.getElementById('risposta').innerHTML="Mancano "+minutes+" minuti alla fine dell'ora";
