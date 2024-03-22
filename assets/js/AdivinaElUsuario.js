var numberToGuess = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  var guess = document.getElementById("guess").value;
  var output = document.getElementById("output");

  if (guess < numberToGuess) {
    output.textContent = "¡Demasiado bajo! Intenta de nuevo.";
  } else if (guess > numberToGuess) {
    output.textContent = "¡Demasiado alto! Intenta de nuevo.";
  } else {
    output.textContent = "¡Correcto! ¡Bien hecho!";
  }
}
