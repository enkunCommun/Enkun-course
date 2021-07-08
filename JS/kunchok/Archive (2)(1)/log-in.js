

let username= prompt("Enter your Username");
let password= prompt("Enter your password");

function logIn()
{
    do{
        if((username=="kunchok")&&(password=="tibet59"))
            { console.log("You have successfully logged in");
            }
        else{
            console.log("sorry, try again");
            }
    }
    while(let i= 0; i<5);
}
logIn();