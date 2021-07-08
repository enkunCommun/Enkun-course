for (let i=0; i<100; i++){
      for(let n=1; n<=100; n++){
           if(a[i] === 2*n){
            console.log('Tashi');
           }
      else if(a[i] === 5*n)
            {
           console.log('Delek');
            }
      else if(a[i] === 5*n && 2*n)
            {
            console.log('TASHI DELEK');
            }
      } else {
            a.push(a[i]);
      }
}
