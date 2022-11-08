//chiedi all'utente numero chilometri ed età, sulla base di questo calcola il prezzo del biglietto (€ 0,21 al km) applica 20% di sconto se minorenne 40% se over 65

//variabili
const myButton = document.getElementById("create");
const inputFieldName = document.getElementById("name");
const inputFieldKm = document.getElementById("chilometri");
const inputFieldAge = document.getElementById("eta");
let nome;
let chilometri;
let eta;
let prezzoBase;



myButton.addEventListener("click",

    function(){
        nome = inputFieldName.value;
        chilometri = parseInt(inputFieldKm.value);
        eta = inputFieldAge.value;
        console.log(nome, chilometri, eta);

        prezzoBase = chilometri * 0.21;
        document.getElementById("prezzo_base").innerHTML = `Prezzo base ${prezzoBase.toFixed(2)}`
    }

);




//sconti
// let sconto;
// let prezzoScontato;

// if (eta === minorenne) {
//     sconto = prezzoBase * 0.20;
//     prezzoScontato = prezzoBase - sconto;
//     console.log("sconto minore", sconto);
//     document.getElementById("prezzo_scontato").innerHTML = `Prezzo scontato €${prezzoScontato.toFixed(2)} / Sconto minorenne €${sconto.toFixed(2)} `;
// } else if (eta === over) {
//     sconto = prezzoBase * 0.40;
//     prezzoScontato = prezzoBase - sconto;
//     console.log("sconto maggiore", sconto);
//     document.getElementById("prezzo_scontato").innerHTML = `Prezzo scontato €${prezzoScontato.toFixed(2)} / Sconto over 65 €${sconto.toFixed(2)} `;
// } else

// console.log("prezzo scontato", prezzoScontato);

