//chiedi all'utente numero chilometri ed età, sulla base di questo calcola il prezzo del biglietto (€ 0,21 al km) applica 20% di sconto se minorenne 40% se over 65

//variabili costanti
const myButton = document.getElementById("create");
const inputFieldName = document.getElementById("name");
const inputFieldKm = document.getElementById("km");
const inputFieldAge = document.getElementById("age");

myButton.addEventListener("click",

    function(){
        //chiedi dati e calcola prezzo base
        let nome = inputFieldName.value;
        let chilometri = parseInt(inputFieldKm.value);
        let eta = inputFieldAge.value;

        let prezzo = chilometri * 0.21;
        document.getElementById("prezzo_base").innerHTML = `Prezzo base ${prezzo.toFixed(2)}`

        console.log(nome, chilometri, eta, prezzo);
        
        //sconti
        let sconto;

        if (eta === "minorenne") {
            sconto = prezzo * 0.20;
            prezzo -= sconto;
            console.log("sconto minore", sconto);
            document.getElementById("prezzo_scontato").innerHTML = `Prezzo scontato €${prezzo.toFixed(2)} / Sconto minorenne €${sconto.toFixed(2)} `;
        } else if (eta === "over65") {
            sconto = prezzo * 0.40;
            prezzo -= sconto;
            console.log("sconto maggiore", sconto);
            document.getElementById("prezzo_scontato").innerHTML = `Prezzo scontato €${prezzo.toFixed(2)} / Sconto over 65 €${sconto.toFixed(2)} `;
        }

        console.log("prezzo scontato", prezzo);
        inputFieldName.value = "";
        inputFieldKm.value = "";

    }

);



