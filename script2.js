//Skapar funktionen calculate för att räkna ut resultaten
function calculate() {
    //Skapar variabeln number1 som hämtar informationen från textfält inputNumber1 och gör om till int
    let number1 = parseFloat(document.getElementById("inputNumber1").value);
    //Skapar variabeln number2 som hämtar informationen från textfält inputNumber2 och gör om till int
    let number2 = parseFloat(document.getElementById("inputNumber2").value);
    
    //Beräkningar för summa, differens, produkt.
    let sum = number1 + number2;
    let differens = number1 - number2;
    let produkt = number1 * number2;

    //Skriver ut resultaten
    document.getElementById("results").innerHTML = 
        "Summan är: " + sum + "<br>" +
        "Differensen är: " + differens + "<br>" +
        "Produkten är: " + produkt;
}