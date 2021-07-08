function tomeasuretemperature() {
    let temperature = 0;
    do {
        let temperature = prompt('Enter the temperature');
        if (temperature >= 30){
        alert('too hot too');
        } else if (temperature < 30){
        alert('too cold');
        } else {
            alert('too hot');
            break;
        }
    }while(temperature <= 5);
   }


   tomeasuretemperature();