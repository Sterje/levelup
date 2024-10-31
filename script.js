document.getElementById("applyButton").addEventListener("click", function() {
    let name = document.getElementById("inputName").value;
    if (name) {
        document.getElementById("helloMessage").textContent = "Välkommen " + name + "!";
    } else {
        document.getElementById("helloMessage").textContent = "Du angav inget namn.";
    }
});
