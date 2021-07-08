const admin = {
    name:'wangchuk',
    password: '123456'
}

alert('Welcome!');
let username = prompt('Enter username : ');
let password = prompt('Enter password : ');

function user(){
  let i = 0;
  let j = 10;
  do {
      i++;
      j--;
      if (username == admin.name && password == admin.password){
          alert("Welcome " + admin.name);
          break;
      } else {
          alert("Sorry try again" + j + ' attempts left');
      }
  } while(i < 10)
}
user();