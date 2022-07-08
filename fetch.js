// https://swapi.dev/api/people/1
let starWars = [];
/* fetch("https://swapi.dev/api/people/20", { method: "GET" })
  .then((response) => response.json())
  .then((data) => {
    starWars.push(data);
    console.log(starWars);
  })
  .catch((err) => console.log(err)); */

const starWarsPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people/20", {
    method: "GET",
  });
  const data = await response.json();
  starWars.push(data);
  console.log(starWars);
};

starWarsPeople();
