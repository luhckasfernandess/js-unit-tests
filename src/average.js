/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  // Verifica se é um array vazio primeiro
  if (typeof array[0] === 'undefined') return undefined;
  for (let index of array) {
    // Verifica se os valores do array são númericos
    if (typeof index !== 'number') {
      return undefined;
    }
  }
  let soma = 0;
  let media = 0;
  // Soma os valores do array
  for (let index of array) {
    soma += index;
  }
  // Calcula a média dos valores recebidos dividindo pelo tamanho do array
  media = soma / array.length;
  // Arredondando os valores da média
  // Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  media = media.toFixed();
  // Convertendo o valor em string para inteiro
  return parseFloat(media);
};

// console.log(typeof average([]));

module.exports = average;
