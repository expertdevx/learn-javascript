/**
 * Laço de repetição
 */

//let frutas = ["Banana", "Maça", "Uva"];
//slet numeros = [1, 2, 3, 4, 5, 6, 7, 8];
// for

/* for (let indice = 0; indice < numeros.length; indice++) {
  console.log("Valor:", indice);
} */

/* for (let elementos of frutas) {
  console.log("Item: ", elementos);
} */

// map

/* const frutas = ["Banana", "Maça", "Uva"]; */
//frutas.map((fruta, indice) => {
/*  console.log("Indice:", indice, "Nome: ", fruta); */
//return console.log(`
//Indice: ${indice} Nome: ${fruta}
//`);
//});

// filter
/* frutas.filter((f) => {
  return console.log(f === "Banana");
}); */

/* frutas.filter((f) => console.log(f === "Banana")); */

// reduce
const valores = [10, 20, 30, 40, 50, 60];

const saldo = valores.reduce((prev, current) => prev + current, 0);
console.log(saldo);
