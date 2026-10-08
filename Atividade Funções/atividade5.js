// 5. Função converterParaCelsius (com retorno)

function converterParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let fahrenheit = 100;
let celsius = converterParaCelsius(fahrenheit);

console.log(fahrenheit + "°F equivalem a " + celsius.toFixed(2) + "°C");
