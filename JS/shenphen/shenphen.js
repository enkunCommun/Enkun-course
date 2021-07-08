let outPut = [];


for(i = 1; i <=100; i++) {
  if (i % 4 == 0 && i % 5 == 0){
    outPut.push("Tashi delel");
  } else if(i % 4 == 0) {
    outPut.push("Tashi");
  } else if(i % 5 == 0) {
     outPut.push("Delek");
  } else {
    outPut.push(i);
  }
}
console.log(outPut);
