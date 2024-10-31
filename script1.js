//Skapar funktionen nameFunction som hanterar datan
function nameFunction () {
    // Skapar variabeln name som hämtar informationen från fältet inputName
    let name = document.getElementById("inputName").value;

    //If sats som kollar om man skrivit något i fältet och skriver ut meddelande.
    if (name) {
        document.getElementById("helloMessage").innerHTML = "Välkommen " + name + "!";
        } 
        else {
        document.getElementById("helloMessage").innerHTML = "Du måste skriva ett namn!";
        
    }
};