function celsiusToFahrenheit(celsius){
    // (0°C × 9/5) + 32 = 32°F
    const fahrenheit = (celsius*(9/5)) + 32;
    return fahrenheit;
}


const celsius = 100;
const result = celsiusToFahrenheit(celsius);
console.log("Temp in Fahrenheit::", result);
