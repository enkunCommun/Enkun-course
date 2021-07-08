function weatherCheck()
{
    let i=0;
    do{
        let weather= prompt("enter the temperature");
        if(weather>30)
        {alert(" too hot");
        }
        else if(weather>= 30)
        {alert("too hot too");
        }
        else if(weather<30)
         { alert("too freeze");
         } else {
             alert("no weather input");
             break;
         }
     }
    while(i<=5);
    
}

weatherCheck();