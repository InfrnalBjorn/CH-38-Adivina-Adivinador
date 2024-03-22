var lowerBound = 1;
var upperBound = 100;
var guess;

function guessNumber() {
  guess = Math.floor((lowerBound + upperBound) / 2);
  var output = document.getElementById("output");
  output.textContent = "¿Es " + guess + " tu número?";
  output.innerHTML +=
    '<br><button onclick="lower()">Más bajo</button> <button onclick="higher()">Más alto</button> <button onclick="correct()">Correcto</button>';
}

function lower() {
  upperBound = guess - 1;
  guessNumber();
}

function higher() {
  lowerBound = guess + 1;
  guessNumber();
}

function correct() {
  var output = document.getElementById("output");
  output.textContent = "¡Genial! Sabía que podía adivinar tu número.";
}
