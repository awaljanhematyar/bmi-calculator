// Educational adult BMI calculation. Input validation prevents invalid results.
const btnEl = document.getElementById("btn");
const bmiInput = document.getElementById("bmi-result");
const weightconditionalEl = document.getElementById("weight-condition");
const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
weightconditionalEl.setAttribute("aria-live", "polite");
function calculateBMI() {
  const height = Number(heightEl.value);
  const weight = Number(weightEl.value);
  heightEl.removeAttribute("aria-invalid");
  weightEl.removeAttribute("aria-invalid");
  const heightValid = heightEl.value.trim() !== "" && Number.isFinite(height) && height > 0;
  const weightValid = weightEl.value.trim() !== "" && Number.isFinite(weight) && weight > 0;
  if (!heightValid || !weightValid) {
    bmiInput.value = "";
    weightconditionalEl.textContent = "Enter a positive height and weight.";
    weightconditionalEl.className = "badge";
    if (!heightValid) heightEl.setAttribute("aria-invalid", "true");
    if (!weightValid) weightEl.setAttribute("aria-invalid", "true");
    (!heightValid ? heightEl : weightEl).focus();
    return;
  }
  const bmi = weight / ((height / 100) ** 2);
  if (!Number.isFinite(bmi) || bmi <= 0) {
    bmiInput.value = "";
    weightconditionalEl.textContent = "Please check your input values.";
    weightconditionalEl.className = "badge";
    return;
  }
  const category = bmi < 18.5 ? "under-weight" : bmi < 25 ? "normal-weight" : bmi < 30 ? "overweight" : "obesity";
  bmiInput.value = bmi.toFixed(1);
  weightconditionalEl.textContent = category.replaceAll("-", " ");
  weightconditionalEl.className = "badge " + category;
}
btnEl.addEventListener("click", calculateBMI);
