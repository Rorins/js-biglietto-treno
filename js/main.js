/*Richiesta numero km utente*/
const numberKm = parseInt(prompt("Quanti km devi fare?"));

/*Richiesta età del passeggero */
const age = parseInt(prompt("Quanti anni hai?"));
if (isNaN(numberKm) || (isNaN(age))){
document.getElementById("price").innerHTML = "Non è stato possibile calcolare importo biglietto, indica età e km in numero";
}
else{
/* Tariffa fissa biglietto in base a Km */
const priceKm = 0.21;
/*Calcolo totale senza sconti*/
let totPrice = numberKm * priceKm;

/* Sconti del 20 e 40 %*/
const discount20 = totPrice * 20/100

const discount40 = totPrice * 40/100

/*Applicazione sconti per diverse condizioni*/
if (age < 18){
   totPrice = totPrice - discount20
   document.getElementById("price").innerHTML ="Il totale biglietto è " + Math.round(totPrice)+"€"
}
else if (age > 65){
    totPrice = totPrice - discount40
    document.getElementById("price").innerHTML ="Il totale biglietto è " + Math.round(totPrice)+"€"
}
else {
    document.getElementById("price").innerHTML ="Il totale biglietto è " + Math.round(totPrice)+"€"
}
}
