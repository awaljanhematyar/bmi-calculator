// 🎯 Grab the button and the two output elements we'll update
const btnEl = document.getElementById("btn");
const bmiInput = document.getElementById("bmi-result");
const weightconditionalEl = document.getElementById("weight-condition");

// This function runs every time the button is clicked
function calculateBMI() {
  // Read height input, convert cm -> meters by dividing by 100
  const heightValue = document.getElementById("height").value / 100;

  // Read weight input (already in kg, no conversion needed)
  const weightValue = document.getElementById("weight").value;

  // BMI formula: weight divided by height squared
  const bmivalue = weightValue / (heightValue * heightValue);

  // Show the BMI number in the result box, rounded to 1 decimal place
  // e.g. 22.857142... becomes "22.9"
  bmiInput.value = bmivalue.toFixed(1);

  // This variable will hold which category the BMI falls into
  let category = "";

  // Check the BMI value against official health ranges
  if (bmivalue < 18.5) {
    category = "under-weight";
  } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
    category = "normal-weight"; // the "healthy" range
  } else if (bmivalue >= 25 && bmivalue <= 29.9) {
    category = "overweight";
  } else {
    // Anything not caught above must be 30 or higher
    category = "obesity";
  }

  // Show readable text like "under weight" instead of "under-weight"
  weightconditionalEl.innerText = category.replace("-", " ");

  // Change the badge's CSS class so it gets the matching color
  // (this is what makes the badge turn blue/green/yellow/red)
  weightconditionalEl.className = "badge " + category;
}

// 👂 Tell the button: "when clicked, run calculateBMI"
btnEl.addEventListener("click", calculateBMI);
