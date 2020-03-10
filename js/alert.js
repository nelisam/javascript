//let weather = (prompt("Enter the weather"));
// if (weather === "sunny") {
//     console.log(weather + " The weather is sunny so put on some scandals and some shades");
// } else if (weather === "rainy") {
//      console.log(weather  + " The weather is rainy so put a raincoat or stay indoors");
// } else if (weather === "snowy") {
//      console.log(weather  + " The weather is snowy so stay indoors and get some hot chocolate");
// } else if (weather === "windy" &&  || ) {
//         console.log(weather  + " The weather is windy so put on a thick jacket");
// } else {
//     console.log(weather  + " Please enter one of these conditions : sunny, rainy, snowy, windy");
// }



let weather = prompt("Enter the weather");
switch (weather) {
    case ("sunny"):
        console.log(weather + ", put on some scandals and some shades on.");
      break;
    case ("rainy"):
        console.log(weather  + ", put a raincoat or stay indoors.");
      break;
    case ("snowy"):
        console.log(weather  + ", stay indoors and get some hot chocolate.");
      break;
    case ("windy"):
        console.log(weather  + ", put on a thick jacket.");
      break;
      default:
    console.log("Please enter one of these conditions : sunny, rainy, snowy, windy");
  }