// 8. Função desconto (parametrizada)

function desconto(valor, percentual) {
    return valor - (valor * percentual / 100);
}

let valorFinal = desconto(200, 15);
console.log("Valor final com desconto: R$ " + valorFinal.toFixed(2));
