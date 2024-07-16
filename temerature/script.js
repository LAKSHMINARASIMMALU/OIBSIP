function convertTemperature() {
    const tempInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(tempInput) || tempInput === "") {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    const temp = parseFloat(tempInput);
    let convertedTemp, convertedUnit;

    if (unit === 'celsius') {
        convertedTemp = (temp * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
        resultDiv.textContent = `${temp}°C is ${convertedTemp.toFixed(2)}°${convertedUnit}`;
    } else if (unit === 'fahrenheit') {
        convertedTemp = (temp - 32) * 5/9;
        convertedUnit = 'Celsius';
        resultDiv.textContent = `${temp}°F is ${convertedTemp.toFixed(2)}°${convertedUnit}`;
    } else if (unit === 'kelvin') {
        const toCelsius = temp - 273.15;
        const toFahrenheit = (temp - 273.15) * 9/5 + 32;
        resultDiv.textContent = `${temp}K is ${toCelsius.toFixed(2)}°C and ${toFahrenheit.toFixed(2)}°F`;
    }
}