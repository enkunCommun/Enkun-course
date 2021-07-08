var greetings = [];

function TashiDelek() {
  for(var count = 1; count < 100; count++) {
    if(count % 3 === 0 && count % 5 === 0) {
      greetings.push("TashiDelek");
  } else if (count % 3 === 0) {
    greetings.push("Tashi");
  } else if (count % 5 === 0) {
    greetings.push("Delek")
  } else {
    greetings.push(count);
  }
  }
  console.log(greetings);
}

TashiDelek();


let nu2 = 0.2 + 0.5;
console.log(nu2);


let num = parseFloat(20).toPrecision(12);
console.log(num);

a = 0.1;
b = 0.2;
c = parseFloat((a+b).toFixed(2));

console.log(c);

a = 0.3
b = 0.4
console.log(parseFloat(a+b).toFixed(2));


a = 2.05 * 100;
console.log(a);
console.log(Math.round(a));


console.log(parseFloat(0.5 + 0.3).toFixed(1));


for (let i=0; i<100; i++){
      for(let n=1; n<=100; n++){
           if(a[i] === 2*n){
           console.log('Tashi'); }
      else if(a[i] === 5*n){
           console.log('Delek'); }
      else if(a[i] === 5*n && 2*n){
      console.log('TASHI DELEK') } }
}
