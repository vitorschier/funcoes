// 15. Função operacoesAvancadas com funções internas

function operacoesAvancadas(a, b) {
    function produto(x, y) {
        return x * y;
    }

    function potencia(x, y) {
        return Math.pow(x, y);
    }

    return {
        produto: produto(a, b),
        potencia: potencia(a, b)
    };
}

let resultados = operacoesAvancadas(2, 5);

console.log("Produto: " + resultados.produto);
console.log("Potência: " + resultados.potencia);
