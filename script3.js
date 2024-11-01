    // Skapar funktionen calculate
function calculate() {
    // Hämtar och gör om innehållet i decimalNumber till ett float som hanterar decimaler
    let number = parseFloat(document.getElementById("decimalNumber").value);
    
    // Avrundar innehållet i number till heltal
    let heltal = Math.round(number);
    // Avrundar innehållet i number till en decimal
    let oneDecimal = number.toFixed(1); // Avrundar till en decimal, funkar ej som det ska
    
    // Visa resultaten
    document.getElementById("results").innerHTML = "Talet avrundat till heltal " + heltal + "<br>" + "Talet avrundat till en decimal. " + oneDecimal;
}