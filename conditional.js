// Condições padrão.
//const pessoa = { nome: "Christian Possidonio", idade: 32, altura: 1.81 };

/* if (pessoa.altura) {
  console.log("Sim a altura foi definida");
} else {
  console.log("A altura não foi definida");
} */

// Operações ternárias.
/* pessoa.altura
  ? console.log("Sim a altura foi definida")
  : console.log("A altura não foi definida"); */

//const pessoa = { nome: "Christian Possidonio", idade: 32, altura: 1.81 };
// ==
//console.log(pessoa.nome == "Christian Possidonio");
//console.log(pessoa.idade == "32");

// ===
//console.log(pessoa.idade === "32");
// !
//console.log(!pessoa.idade);
// !=
//console.log(pessoa.idade != "32");
// !==
//console.log(pessoa.idade !== "32");
// >
//console.log(pessoa.idade > 32);

// <
//console.log(pessoa.idade < 33);
const pessoa = { nome: "Christian Possidonio", idade: 32, altura: 1.81 };
// &&
/* if (pessoa.altura > 1.75 && pessoa.idade > 18) {
  console.log("A condição é verdadeira");
} else {
  console.log("A condição é falsa");
} */

// or
if (pessoa.altura > 1.85 || pessoa.idade > 18) {
  console.log("A condição é verdadeira");
} else {
  console.log("A condição é falsa");
}
