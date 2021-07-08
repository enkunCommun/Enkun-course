let name = "tenzin";


function toSpeak() {
 name = "shenphen";
 let age = 20;
  console.log("My name is " + name + " age : " + age);
}

console.log(name);
//console.log(age);
toSpeak();


function toAdd(number1, number2,number3,number4){
  return number1 + number2 + number3 + number4;
}

function toMultiple(num, num2) {
  return num * num2;
}
console.log(toAdd(2,3,4,23));

console.log(toAdd("tenzin","wangchuk","pema","kelsang"));

console.log("*************************");
console.log(toMultiple(3,3));

let voteAge = function(n,b) { return n - b};

console.log(voteAge(2,3));



let student = {
  firstName: "tenzin",
  lastName: "kunchok",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(student.fullName());
console.log(student.fullName());


console.log("***********************");
function getName(name) {
  return name
}

console.log(getName("tenzin"));

const getName22 = function (name) { return name };

console.log(getName22("tenzi"));

console.log(getName22(2323));



console.log(student.firstName);

console.log(student.fullName());
