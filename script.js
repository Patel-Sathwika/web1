function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var selectUnit = document.getElementById("selectUnit").value;
    var result = document.getElementById("result");

    if (selectUnit === "celsius") {
        var fahrenheit = (inputTemp * 9/5) + 32;
        var kelvin = parseFloat(inputTemp) + 273.15;
        result.innerHTML = "Fahrenheit: " + fahrenheit + "°F<br/>Kelvin: " + kelvin + "K";
    } else if (selectUnit === "fahrenheit") {
        var celsius = (inputTemp - 32) * 5/9;
        var kelvin = (inputTemp - 32) * 5/9 + 273.15;
        result.innerHTML = "Celsius: " + celsius + "°C<br/>Kelvin: " + kelvin + "K";
    } else if (selectUnit === "kelvin") {
        var celsius = parseFloat(inputTemp) - 273.15;
        var fahrenheit = (parseFloat(inputTemp) - 273.15) * 9/5 + 32;
        result.innerHTML = "Celsius: " + celsius + "°C<br/>Fahrenheit: " + fahrenheit + "°F";
    }
}
