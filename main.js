
// calculations are saved as objects inside the array
let savedCalculations = [];


let name = document.querySelector("#name");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let form = document.querySelector(".bmi-form");
let button = document.querySelector("#submit");

// executes function when button is clicked
button.addEventListener("click", calculateBMI);

// executes function when enter is pressed
window.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    calculateBMI();
  }
});

function calculateBMI() {

   // object gathers data from input fields
    let person = {
        inputName: name.value,
        inputHeight: height.value / 100,
        inputWeight: weight.value 
    }
 
  // variable calculates bmi and adds it to the object  
  let bmi = Number(person.inputWeight) / (Number(person.inputHeight) * Number(person.inputHeight));
  person.bmi = bmi;

  // object gets pushed into the array
  savedCalculations.push(person);
  console.log("added", { savedCalculations });

  // A message displays after calculation
  let message = document.querySelector("#message");
  message.innerHTML = person.inputName + " has a bmi of " + parseFloat(bmi).toFixed(2); 
  
  // resets input
  form.reset();
}

