function tempWeather() {
  let i = 0;
  do {
    let temp = prompt("Enter the temperature");
    if (temp < 30) {
      alert("IT's hot");
    } else if( temp <= 30) {
      alert("It hot too");
    } else if (temp > 30) {
      alert("it's cold");
    } else {
      alert("no temp ");
      break;
    }
  }while(i <= 50);
}


tempWeather();


