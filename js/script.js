// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere - Età del passeggero - Il suo Nome
const buttonSend = document.getElementById("send");

buttonSend.addEventListener("click",
    function(){
        let nameUser = document.getElementById("user-name").value;
        document.getElementById("name-pass").innerHTML = nameUser;
        console.log(nameUser);

        let ageUser = document.getElementById("age-user").value;
        console.log(ageUser);

        let kilometersUser = parseInt(document.getElementById("kilometers").value);
        console.log(kilometersUser);

        // Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole: 
        // - il prezzo del biglietto è definito in base ai km (0.21 € al km)
        let priceTicket = (0.21 * kilometersUser);
        console.log(priceTicket);

        // - va applicato uno sconto del 20% per i minorenni
        if (ageUser === "Minorenne"){
    
            priceTicket = (priceTicket - (priceTicket / 100 * 20));
            console.log(priceTicket);
            document.getElementById("type-ticket").innerHTML = "Ticket Under";

        } else if (ageUser === "Over 65"){ // - va applicato uno sconto del 40% per gli over 65.
        
            priceTicket = (priceTicket - (priceTicket / 100 * 40));
            console.log(priceTicket);
            document.getElementById("type-ticket").innerHTML = "Ticket Over";

        } else {

            document.getElementById("type-ticket").innerHTML = "Ticket Standard";

        }


        // Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
        let finalPriceTicket = Math.round(priceTicket * 100) / 100;
        console.log(finalPriceTicket);

        let messagePrice = document.getElementById("price-ticket")
        messagePrice.innerHTML = `${finalPriceTicket} €`;

        // Quando "clicchiamo" genera si crea un biglietto virtuale

        let fakeTicket = document.querySelector(".ticket");
        fakeTicket.classList.add("active");
        console.log(fakeTicket);

        // Quando "clicchiamo" annulla si cancella il biglietto virtuale
        let buttonCancel = document.getElementById("cancel");
        buttonCancel.addEventListener("click",
            function(){
                fakeTicket.classList.remove("active");
            }
        );

        // Quando "clicchiamo" generiamo un numero casuale da 1 a 9 che corrisponde al numero del binario
        let randomCarriage = document.getElementById("carriage-number");
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        randomCarriage.innerHTML = randomNumber;
        console.log(randomNumber);

        // Quando "clicchiamo" generiamo un numero casuale da 1000 a 9999 che corrisponde al codice CP
        let ticketCode = document.getElementById("ticket-code");
        const randomCode =  Math.floor(Math.random() * 9000) + 1000;
        ticketCode.innerHTML = randomCode;





    }
);







