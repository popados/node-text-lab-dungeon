import { createInterface } from "readline/promises";
// setup readline interface
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// options to choose from
const options = ['north', 'east', 'south', 'west'];
let selectedindex = 0;

// function to display options with an arrow selector
function displayoptions() {
  console.clear();
  options.forEach((option, index) => {
    if (index === selectedindex) {
      console.log(`> ${option}`);
    } else {
      console.log( `${option}`);
    }
  });
  console.log('\nuse the arrow keys to navigate and press enter to select.');
}

// capture keypress events for arrow key navigation
process.stdin.on('keypress', (str, key) => {
  if (key.name === 'up') {
    selectedindex = (selectedindex > 0) ? selectedindex - 1 : options.length - 1;
  } else if (key.name === 'down') {
    selectedindex = (selectedindex < options.length - 1) ? selectedindex + 1 : 0;
  } else if (key.name === 'return') {
    console.log( `\nyou selected: ${options[selectedindex]  }`);
    rl.close();
    return;
  }
  displayoptions();
});

// initialize the display
displayoptions();