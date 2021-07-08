let num = [];
let numOfTashi = 0;
let numOfDelek = 0;
let numOfTD = 0;

for(let i=1; i<=100; i++){
  num.push(i); 
}
console.log("First Result :" + "\n" + num);

for(let j=0; j<100; j++){
  for(let n=1; n<=100; n++){
    if(num[j] === 2*n){
        numOfTashi++;
        num[j] = 'Tashi';
      }
    else if(num[j] === 5*n){
       numOfDelek++;
       num[j] = 'Delek';
    }
    else if(num[j] === 10*n){
       numOfTD++;
       num[j] = 'Tashi Delek';
    }
  }
}

console.log("New Result : " + "\n" + num);
console.log("No. of Tashi = " + numOfTashi);
console.log("No. of Delek = " + numOfDelek);
console.log("No. of TashiDelek = " + numOfTD);
