document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("temp-converter-form");
  const temperatureInput = document.getElementById("temperature");
  const unitSelect = document.getElementById("unit");
  const convertButton = document.getElementById("convert");
  const resultDiv = document.getElementById("result");
  const conversionResult = document.getElementById("conversion-result");

  convertButton.addEventListener("click", function () {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let convertedTemperature;

    if (unit === "celsius") {
      // Convert to Fahrenheit
      convertedTemperature = (temperature * 9) / 5 + 32;
    } else {
      // Convert to Celsius
      convertedTemperature = ((temperature - 32) * 5) / 9;
    }

    conversionResult.textContent = `${temperature}°${
      unit === "celsius" ? "C" : "F"
    } is ${convertedTemperature}°${unit === "celsius" ? "F" : "C"}`;
    resultDiv.style.display = "block";
  });
});
