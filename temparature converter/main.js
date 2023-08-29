let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function convert() {
    if (celsius.value !== "") {
        let output = (parseFloat(celsius.value) * 9 / 5) + 32;
        fahrenheit.value = parseFloat(output.toFixed(2));
    } else if (fahrenheit.value !== "") {
        let output = (parseFloat(fahrenheit.value) - 32) * 5 / 9;
        celsius.value = parseFloat(output.toFixed(2));
    }
}
        