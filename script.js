//your JS code here. If required.
// Get references to elements
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Function that returns a promise with delay
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Async function to handle button click
async function showMessage() {
  const text = textInput.value;
  const delay = Number(delayInput.value);

  // Clear previous output
  output.textContent = "";

  // Wait for the given delay
  await wait(delay);

  // Show text after delay
  output.textContent = text;
}

// Attach event listener
button.addEventListener("click", showMessage);
