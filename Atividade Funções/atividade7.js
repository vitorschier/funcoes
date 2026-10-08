// 7. Função calcularMedia (parametrizada)

function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

let media = calcularMedia(7, 8.5, 9);
console.log("Média das notas: " + media.toFixed(2));
