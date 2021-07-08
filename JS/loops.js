let pets = ["dog", "cat", "bird", "snake"];


for( let i = 0; i < pets.length; i++){
  console.log(pets[i]);
}


for(let pet of pets) {
  console.log(pets);
}

let n = 0;

while(n <= 100) {
  console.log("print out " + n);
  n += 1;
}

let number = "";
let i = 0;

do {
  number += "The number is " +  i;
  i++;
} while(i < 10);


var age = 18;

if (age >= 20){
  console.log("Voting time");
} else if(age == 18) {
  console.log("Going to vote now");
} else {
  console.log("Not now");
}

