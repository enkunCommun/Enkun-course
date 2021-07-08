var  names = ["tenzin", "shenphen", "kunchok"];

var numOfNames = names.length;

for(var i = 0; i < names.length; i++)
{
  console.log("Tashi Delek " +  names[i])
}


/* New syntex */
for (var name of names) {
  console.log(name)
}


var newStudents = names.push("Jinpa");
console.log(names[3]);

var shenpehOut = names.pop(names[1]);
console.log(names.length);

var outTenzin = names.shift();
console.log(names.length);

var yegaIn = names.unshift("Yega");
console.log(names[0]);


let yegaIndex = names.indexOf("Yega");
console.log(yegaIndex);

let copyStudentName = names.slice();

for( var n of copyStudentName) {
  console.log("Bonjour " + n);
}

//Home work

// the name of the student in the class.
// to add 5 new students - push
// to say bonsoir - loops

// to reverse name of the student
// to say bonjour
var nameOfStudents = ["tenzin", "shenphen", "yega"];
var reversOfStudents = nameOfStudents.reverse();
for(let i = 0; i < reversOfStudents.length; i++){
  console.log("Bonsoir " + reversOfStudents[i] );
}

let reverse = [];

for (let i = nameOfStudents.length -1; i >= 0; i--) {
  reverse += nameOfStudents[i];
  console.log("Bonsoir rey " + reverse);
}

