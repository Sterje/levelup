    // Skapar funktionen calculate
function calculate() {
    // Hämtar och gör om innehållet i decimalNumber till ett float som hanterar decimaler
    let number = parseFloat(document.getElementById("decimalNumber").value);
    
    // Avrundar innehållet i number till heltal
    let heltal = Math.round(number);
    // Avrundar innehållet i number till en decimal
    let oneDecimal = number.toFixed(1); // Avrundar till en decimal, funkar ej som det ska
    
    // Visa resultaten
    document.getElementById("results").innerHTML = "Här ska talet avrundas till heltal men avrundar bar nedåt, fel " + heltal + "<br>" + "Här ska talet avrundas till en decimal, fungerar ej korrekt. " + oneDecimal;
}