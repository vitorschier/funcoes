// 14. Função calculadora com funções internas

function calculadora(a, b) {
    function soma(x, y) {
        return x + y;
    }

    function subtrair(x, y) {
        return x - y;
    }

    console.log("Soma: " + soma(a, b));
    console.log("Subtração: " + subtrair(a, b));
}

calculadora(10, 4);
