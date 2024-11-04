import Character from "./_character/character.js";
import inquirer from "inquirer";
import { confirm, select, input, Separator } from "@inquirer/prompts";
import { firstRoom, labratory } from "./_scenes/scene.js";
import { introRoom, westRoom, eastRoom } from "./_logic/logic.js";
import chalk from "chalk";
import monsters from "./beastiary.js";

// const visited = new Set();
// visited.add("west");

// if (visited.has("west")) {
//     console.log("You already traveled west.")
// }

// const visited = {
//     west: true,
//     east: false,
// }

const toon = new Character(100, 10, 20);

const currentRoom = {
  north: false,
  south: false,
  east: false,
  west: false,
  theroom: true,
};

const inventory = {
  items: [],
};

// north, east, look around, south, west, books, marks, room puzzle, oddities, secrets, get item, experiments, glass, diagrams, apparatus, east puzzle, the room, south puzzle, west puzzle, the trap

const solution = ["ABC", "RGB", "NIK"]

const substr = 'Books';

const nounSolutions = ["Chains", "Glass", "Metal"]

const verbSolutions = ["Experiment", "Run", "Hide"]

const adjectiveSolutions = ["Green", "Hot", "Wet"]

let northSolution = false;

let selectionChoices = [
  { value: "North", name: "The North Room" },
  { value: "East", name: "The East Room" },
  { value: "South", name: "The South Room" },
  { value: "West", name: "The West Room" },
  { value: "Look Around", name: "The Final Room" },
  // { value: 'Look Around', name: 'Look Around (Interact)' }
];

let mainChoices = [
  { value: "The Room", name: "Back" },
  { value: "Books", name: "Books" },
  { value: "Markings", name: "Markings" },
  { value: "Room Puzzle", name: "Puzzle - The Room" },
  { value: "Oddities", name: "Oddities" },
  { value: "Secrets", name: "Secrets" },
];

let northChoices = [
  { value: "The Room", name: "Back" },
  { value: "Get Item", name: "Get Item" },
  { value: "Books", name: "North Books" },
  { value: "Clue", name: "Clue" },
  { value: "Knight", name: "Frozen Knight" },
  { value: "North Puzzle", name: "North Puzzle" },
];

let southChoices = [
  { value: "The Room", name: "Back" },
  { value: "The Trap", name: "The Trap" },
  { value: "Socks", name: "Warm Socks" },
  { value: "Books", name: "South Books" },
  { value: "Get Item", name: "Get Item" },
  { value: "South Puzzle", name: "South Puzzle" },
];

let eastChoices = [
  { value: "The Room", name: "Back" },
  { value: "Experiments", name: "Abandoned Experiments" }, 
  { value: "Vials", name: "Broken Vials" },
  { value: "Books", name: "East Books" },
  { value: "Diagrams", name: "Strange Diagrams" },
  { value: "Apparatus", name: "Sinister Apparatus" },
  { value: "East Puzzle", name: "East Puzzle" },
];

let westChoices = [
  { value: "The Room", name: "Back" },
  { value: "Metal", name: "Cold Metal" },
  { value: "Glass", name: "Gleaming Glass" },
  { value: "Books", name: "West Books" },
  { value: "Instruments", name: "Strange Instruments" },
  { value: "Chains", name: "Rusty Chains" },
  { value: "West Puzzle", name: "West Puzzle" },
];

const ranNum = Math.floor(Math.random() * monsters.length);

async function askSequence() {
    console.log(ranNum)
    console.log(monsters[ranNum].name)
        let combinedInput = [];
        let strAnswer = "";
        for (let i = 1; i <= 3; i++) {
            if (i === 1) {
                console.log("Press the buttons in the correct order to solve the puzzle")
            }
          const inputAns = await input(
            {
            //   type: "input",
              message: `Which button will you press? ${i}`,
            },
        );
        // console.log(i)
        // console.log(monsters[i].ascii)
          strAnswer += inputAns;
        }
        combinedInput.push(strAnswer);
        console.log(`combinedInput: ${combinedInput}`);
        for (let i = 0; i < solution.length; i++) {
          if (combinedInput.includes(solution[i])) {
              console.log("\nCorrect sequence! You solved the puzzle!");
              northSolution = true;
            } else {
                northSolution = false;
                break;
            }
            
        }
        // console.log("Incorrect sequence. Try again!");
    }


function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 1000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  console.log("~~~~~~~~~~~~~~~~~~~~~");
}

async function chooseDirection() {
  await resolveAfter2Seconds();
  console.log(`Items collected :`);
  console.log(inventory.items)
  console.log("---");
  toon.printStats();
  console.log("---");
  const answer = await select({
    message: "Choose >",
    choices: currentRoom.north
      ? northChoices
      : currentRoom.south
      ? southChoices
      : currentRoom.east
      ? eastChoices
      : currentRoom.west
      ? westChoices
      : currentRoom.theroom
      ? selectionChoices
      : mainChoices,
    // new Separator("---")
  });
  console.log("---");
  switch (answer) {
    case "Back":
      currentRoom.north = false;
      currentRoom.theroom = true;
      currentRoom.south = false;
      currentRoom.east = false;
      currentRoom.west = false;
      console.log("you go back to the start");
      await chooseDirection();
      // console.log("You see Secrets")
      break;
    case "North":
      //ENTER NORTH ROOM
      currentRoom.theroom = false;
      currentRoom.south = false;
      currentRoom.east = false;
      currentRoom.west = false;
      currentRoom.north = true;


      console.log("---");
      console.log("You choose North");
      console.log("---");
    //   console.log(inventory.items);
      // currentRoom.north = false;
      // await continueGame();
      await chooseDirection();
      break;
    case "East":
      // currentRoom.east = true;
      currentRoom.north = false;
      currentRoom.theroom = false;
      currentRoom.south = false;
      currentRoom.east = true;
      currentRoom.west = false;
      eastRoom();
      console.log("You choose East");
      console.log(inventory.items);
      // currentRoom.north = false;
      // await continueGame();
      await chooseDirection();
      //ENTER EAST ROOM
      break;
    case "South":
      currentRoom.north = false;
      currentRoom.theroom = false;
      currentRoom.south = true;
      currentRoom.east = false;
      currentRoom.west = false;

      // currentRoom.south = true;
      console.log("You choose South");
      console.log("---");
      console.log(inventory.items);
      // let inRoom = true
      await askSequence();
      while (toon.health > 60) {
        toon.health -= 10;
        console.log(`You have ${toon.health} health`);
      }
      await continueGame();
      await chooseDirection();
      break
    case "West":
      currentRoom.north = false;
      currentRoom.theroom = false;
      currentRoom.south = false;
      currentRoom.east = false;
      currentRoom.west = true;

      // currentRoom.west = true;
      westRoom();
      console.log("You choose West");

      console.log(inventory.items);

      // await continueGame();
      await chooseDirection();

      break;
    case "The Room":
      currentRoom.north = false;
      currentRoom.theroom = true;
      currentRoom.south = false;
      currentRoom.east = false;
      currentRoom.west = false;

      introRoom();
      console.log("You are back where you started");
      console.log("--");

      // await continueGame();
      await chooseDirection();
      break;
    case "Look Around":
      currentRoom.north = false;
      currentRoom.theroom = false;
      currentRoom.south = false;
      currentRoom.east = false;
      currentRoom.west = false;
      console.log("Looking around");
      await chooseDirection();
      // await lookAroundMenu();
      // console.log('You chose West');
      break;
//
// Puzzles
//
    case "North Puzzle":
      if (inventory.items.includes("North Room")) {
        console.log("You have already been here");
      } else {
        inventory.items.push("North Room");
      }
      console.log("You see a Puzzle");
      await chooseDirection();
      break;
    case "East Puzzle":
      if (inventory.items.includes("East Room")) {
        console.log("You have already been here");
      } else {
        inventory.items.push("East Room");
      }
      await chooseDirection();
      break;
    case "South Puzzle":
      if (inventory.items.includes("South Room")) {
        console.log("You have already been here");
      } else {
        inventory.items.push("South Room");
      }

      await chooseDirection();
      break;
    case "West Puzzle":
      if (inventory.items.includes("West Room")) {
        console.log("You have been");
      } else {
        inventory.items.push("West Room");
      }
      await chooseDirection();
      break;
    case "Room Puzzle":
    tallyScore();
    if (inventory.items.length >= 4) {
        console.log("You have all the items");
        console.log("You have completed the game");
        process.exit();
        }
    console.log("You see markings");
    console.log("~~~~~~~~~~~~~~~~~~~~~");
    await chooseDirection();
    break;
//Books
      case "Books":
        if (currentRoom.east === true) {
          console.log("east books");
          inventory.items.push("East Books");
        }
        if (currentRoom.theroom === true) {
            console.log("the room books");
            inventory.items.push("The Final Room Books");
        }
        if (currentRoom.west === true) {
            console.log("west books");
            inventory.items.push("West Books");
        }
        if (currentRoom.north === true) {
            console.log("north books");
            inventory.items.push("North Books");
        }
        if (currentRoom.south === true) {
            console.log("south books");
            inventory.items.push("South Books");
        }
        await chooseDirection();
        break;
//get random item
    case "Get Item":
        await chooseDirection()
        break
        
//
// Main Room
//
    case "Markings":
      console.log("You see markings");
      console.log("~~~~~~~~~~~~~~~~~~~~~");
      await chooseDirection();
      break;
    case "Oddities":
      console.log("You see Oddities");
      await chooseDirection();
      break;
    case "Secrets":
      console.log("You see Secrets");
      await chooseDirection();
      break;
//
//North Room
//
    case "Knight":
        await chooseDirection()
        break
    case "Clue":
        await chooseDirection()
        break;
//
// East Room
//
    case "Experiments":
        await chooseDirection()
        break;
    case "Vials":
        await chooseDirection()
        break
    case "Diagrams":
        await chooseDirection()
        break;
    case "Apparatus":
        await chooseDirection()
        break;
//
//West Room
//
    case "Metal":
        await chooseDirection()
        break;
    case "Glass":
        await chooseDirection()
        break;
    case "Instruments":
        await chooseDirection()
        break;
    case "Chains":
        await chooseDirection()
        break;
//
//South Room
//
    case "Socks":
        await chooseDirection()
        break
    case "The Trap":
        await chooseDirection()
        break;
//
//default
//
    case "default":
        console.log("You chose the default");
        await chooseDirection()
        break;
  }
  return toon;
}

async function introSequence() {
  const startGame = await confirm({
    message: "Would you like to start the game?",
  });
  if (startGame === false) {
    console.log("Goodbye");
    process.exit();
  } else {
    const name = await input({
      message: "What is your name?",
    });
    console.log("--");
    console.log(
      "Welcome to The Room!" + chalk.yellow(` ${name.toUpperCase()}`)
    );
    console.log("--");
  }
}

async function continueGame() {
  const continueGame = await confirm({
    message: "Would you like to continue?",
  });
  if (continueGame === false) {
    console.log("going back to the room");
    await chooseDirection();
  } else {
    console.log("Continue");
  }
}

function tallyScore(){
    let score = 0;
    let strVal = inventory.items.filter((str => str.includes(substr)));
    if (typeof strVal !== 'undefined' && strVal.length > 0) {
        // console.log(inventory.items);
        score += 1;
    } else { console.log("Nope")}
    console.log(`score: ${score}`);
}
console.log("~~---~~");
console.log("The Room");
console.log("~~---~~");
await introSequence();
introRoom();
await chooseDirection();
