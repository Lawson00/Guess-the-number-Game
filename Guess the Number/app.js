let userInput = document.getElementById("user_input");
let checkBtn = document.getElementById("check_btn");
let resultOut = document.getElementById("result_out");

// resultOut.innerHTML = "lawson"
let count = 0; //global variable
const randomNumber = Math.floor(Math.random() * 5);

function guessGame() {
  if (count < 2) {
    if (userInput.value == randomNumber) {
      alert("Correct!, Game Won");
      resultOut.innerHTML = "";
    } else if (userInput.value < randomNumber) {
      resultOut.innerHTML = "Wrong!, Try Higher";
    } else if (userInput.value > randomNumber) {
      resultOut.innerHTML = "Wrong!, Try Lower";
    } else {
      resultOut.innerHTML = "Enter a Number";
    }
  } else {
    alert("Game Over!!");
    resultOut.innerHTML = "";
  }
  count++;
  console.log(count);
}

checkBtn.addEventListener("click", (event) => {
  event.preventDefault();
  guessGame();
});
