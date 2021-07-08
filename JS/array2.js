let pokemon = ["pikacu", "baseul", "rachi"];


console.log(pokemon.length);

pokemon.push("pipo");

console.log(pokemon.length);

pokemon.pop();

console.log(pokemon.length);

pokemon.shift();
console.log(pokemon.length);


pokemon.unshift("dfdf");
console.log(pokemon.length);


let pos = pokemon.indexOf("pikaca");

let removePika = pokemon.splice(pos);

console.log(removePika.length);



