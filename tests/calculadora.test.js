/**
 *Exemplo de teste de erro está comentado abaixo
 *
 */
//test("nome  do teste", callbackFunction);

// Exemplo de teste com função nomeada
test("Teste de callbackFunction", callbackFunction);

// Definição da função de callback
function callbackFunction() {
  // lógica do teste
  console.log("Executando o teste callbackFunction...");
}

// Exemplo de teste com função anônima
test("Teste de função anônima", function () {
  // lógica do teste
  console.log("Executando o teste função anônima...");
});

// Exemplo de teste com arrow function
test("Teste de arrow function", () => {
  // lógica do teste
  console.log("Executando o teste arrow function...");
});

// Exemplo simples de teste que sempre passa (hardcoded)
test("Espero que 'Verdadeiro' seja 'Verdadeiro'", () => {
  expect(true).toEqual(true);
});

//Espera que verdadeiro seja falso
test("Espero que verdadeiro seja falso", () => {
  const funcaovalidadora = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true === false);
      }, 100);
    });
  };

  return funcaovalidadora().then((data) => {
    expect(data).toEqual(false);
  });
});

// Exemplo de teste que verifica se um valor é nulo
test("Verifica se o valor é nulo", () => {
  const valorNulo = null;
  expect(valorNulo).toBeNull();
});

/** Exemplo de testes unitários usando Jest */

// Exemplo de um teste simples usando Jest
test("soma dois números corretamente", () => {
  const soma = (a, b) => a + b;
  expect(soma(2, 3)).toBe(5);
});

// Exemplo de um teste que verifica se uma função lança um erro
test("lança um erro ao dividir por zero", () => {
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return a / b;
  };

  expect(() => divide(4, 0)).toThrow("Divisão por zero não é permitida");
});

// Exemplo de um teste assíncrono usando Promises
test("busca dados do usuário corretamente", () => {
  const fetchUserData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "João", age: 30 });
      }, 100);
    });
  };

  return fetchUserData().then((data) => {
    expect(data).toEqual({ name: "João", age: 30 });
  });
});
