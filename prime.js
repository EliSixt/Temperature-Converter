
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const mainInputs = document.getElementsByClassName("input");

for (let i = 0; i < mainInputs.length; i++) {
  let input = mainInputs[i];

  input.addEventListener("input", function (j) {
      let value = parseFloat(j.target.value);

      switch (j.target.name) {

        case "fahrenheit":
            celsiusInput.value = (value - 32) / 1.8;
            kelvinInput.value = ((value - 32) / 1.8) + 273.15;
            break;


          case "celsius":
              fahrenheitInput.value = (value * 1.8) + 32;
              kelvinInput.value = value + 273.15;
              break;


          case "kelvin":
              celsiusInput.value = value - 273.15;
              fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
              break;
      }
  });
}
