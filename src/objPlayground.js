/*
  Implemente a função calculator que recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
    - sum;
    - mult;
    - div;
    - sub.
  Para cada chave atribua como valor a operação correspondente à sua chave:
    - sum: retorna o resultado da soma dos dois números;
    - mult: retorna o resultado da multiplicação dos dois números;
    - div: retorna o resultado da divisão dos dois números;
    - sub: retorna o resultado da subtração dos dois números.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Parâmetros:
  - Dois números inteiros.

  Comportamento:
  calculator(1, 2); // { sum: 3, mult: 2, div: 1, sub: 0 }

  Depois de ter implementado a função calculator, desenvolva uma função que converta objetos em arrays, de chaves, valores ou ambos.
  A sua função deve receber dois parâmetros:

    * o primeiro parâmetro deve ser uma string que indica o tipo de conversão;
    * o segundo parâmetro deve ser um objeto semelhante ao que é retornado pela função calculator que você acabou de desenvolver.

  Parâmetros:
  - Uma string que indica o tipo de conversão;
  - Um objeto no formato { sum: 3, mult: 2, div: 0, sub: -1 };

  Comportamento:
  arrayGenerator('keys', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 'sum', 'mult', 'div', 'sub' ]
  arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ 3, 2, 1, 0 ]
  arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }) // [ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]
*/

const calculator = (number1, number2) => {
  const object = {
    sum: number1 + number2,
    mult: number1 * number2,
    // Math.floor arredonda o número para baixo
    // Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    div: Math.floor(number1 / number2),
    sub: number1 - number2,
  };
  return object;
};

// console.log(calculator(10, 6));

// Percebeu que o type é na verdade as funções do Object.type?
// Só funciona dentro dos colchetes e sem o '.': Object.type(object) ñ daria certo.
// Deixar isso anotado aqui pra vc lembrar, em uma linha graças a aula da Carol

const arrayGenerator = (type, object) => Object[type](object);

/* 
Outra forma de implementar a função arrayGenerator seria por uma sequência de ifs:

let retorno;
  if (type === 'keys') {
    retorno = Object.keys(object);
  } else if (type === 'values') {
    retorno = Object.values(object);
  } else {
    retorno = Object.entries(object);
  }
  return retorno;
*/

// console.log(arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 }));

module.exports = { calculator, arrayGenerator };
