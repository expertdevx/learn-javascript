const pessoa1 = {
  nome: "Christian Possidonio",
  idade: 32,
  stack: ["Node", "React", "React Native"],
  fullstack: {
    front: true,
    back: true,
    mobile: true,
  },
  sum: (a, b) => a + b,
};

const pessoa2 = {
  nome: "Pedro Lucas Possidonio",
  idade: 4,
  stack: [],
  fullstack: {
    front: false,
    back: false,
    mobile: false,
  },
};

const pessoas = [pessoa1, pessoa2];

console.log(pessoas);
