//chiedi all'utente numero chilometri ed età, sulla base di questo calcola il prezzo del biglietto (€ 0,21 al km) applica 20% di sconto se minorenne 40% se over 65

//variabili e costanti
const buttonCreate = document.getElementById("create");
const buttonCancel = document.getElementById("cancel");
const inputFieldName = document.getElementById("name");
const inputFieldKm = document.getElementById("km");
const inputFieldAge = document.getElementById("age");
const ticket = document.querySelector(".ticket");
const passengerName = document.getElementById("passenger_name");
const carrozza = document.getElementById("carrozza"); 
const cp = document.getElementById("cp");
const price = document.getElementById("price");
const discount = document.getElementById("discount");

buttonCreate.addEventListener("click",

    function(){
        //chiedi dati e calcola prezzo base
        let nome = inputFieldName.value;
        let chilometri = parseInt(inputFieldKm.value);
        let eta = inputFieldAge.value;
        let prezzo = chilometri * 0.21;
        
        //stampa nome
        passengerName.innerHTML = `${nome}`;

        //sconti
        let sconto;

        if (eta === "minorenne") {
            sconto = prezzo * 0.20;
            prezzo -= sconto;
            //stampa
            price.innerHTML = `€${prezzo.toFixed(2)}`;
            discount.innerHTML = `Biglietto minorenne`;
        } else if (eta === "over65") {
            sconto = prezzo * 0.40;
            prezzo -= sconto;
            //stampa
            price.innerHTML = `€${prezzo.toFixed(2)}`;
            discount.innerHTML = `Biglietto over 65`;
        } else {
            //stampa
            price.innerHTML = `€${prezzo.toFixed(2)}`;
            discount.innerHTML = `Biglietto standard`;
        }
    
        //stampa codice cp e carrozza (numeri casuali)
        carrozza.innerHTML = Math.floor(Math.random() * 11);
        cp.innerHTML = Math.floor(Math.random() * 100000);

        //apparizione biglietto
        ticket.className = "active";
    }

);

buttonCancel.addEventListener("click",

    function(){
        //scomparsa biglietto
        ticket.className = "deactive";

        //reset input fields
        inputFieldName.value = "";
        inputFieldKm.value = "";
    }

);




