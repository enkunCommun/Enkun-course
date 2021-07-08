function sayUnlock(){
    let i = 0;
    do {
        let username = prompt("Enter your name ?");
        let password = prompt("Enter your password?");
        if (username == "tenzin" && password == "2323"){
            alert("Welcome " + username);
            break;
        } else {
            alert("Sorry try again");
        }
    } while(i <= 50);
}

sayUnlock();