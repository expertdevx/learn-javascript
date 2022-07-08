const frutas = ["banana", "maça", "Pera", "Uva", "Mamão"];

console.log("Início", frutas);

// Adicionando um novo elemento no array
frutas.push("Tomate");

console.log(frutas);

// O pop retira o último elemento do array
frutas.pop();

console.log(frutas);

// O shift retira o primeiro elemento do array
frutas.shift();

console.log(frutas);

// Retirando um elemento especifico de um array

const verificarOindicedoArray = frutas.indexOf("Uva");
console.log("Qual o indice:", verificarOindicedoArray);

frutas.splice(verificarOindicedoArray, 1);

console.log(frutas);
