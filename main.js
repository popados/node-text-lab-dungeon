import Character from "./_character/character.js";
import inquirer from "inquirer";
import { confirm, select, input, Separator } from "@inquirer/prompts";
import { firstRoom, labratory } from "./_scenes/scene.js";
import Monster from "./_monsters/monster.js";
import { introRoom, westRoom, eastRoom } from "./_logic/logic.js";
import chalk from "chalk";
import monsters from "./beastiary.js";
import { laboratoryPuzzles } from "./_scenes/rooms/labratory.js";

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
const monst = new Monster(100, 10, 20);

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

const solution = ["ABC", "RGB", "NIK", "527", "RUS"];

const substr = "Books";

const nounSolutions = ["Chains", "Glass", "Metal"];

const verbSolutions = ["Experiment", "Run", "Hide"];

const adjectiveSolutions = ["Green", "Hot", "Wet"];

let northSolution = false;

let selectionChoices = [
  { value: "North", name: "The North Room" },
  { value: "East", name: "The East Room" },
  { value: "South", name: "The South Room" },
  { value: "West", name: "The West Room" },
  { value: "Look Around", name: "The Final Room" },
  new Separator(),
  // { value: 'Look Around', name: 'Look Around (Interact)' }
];

let finalRoomChoices = [
  { value: "Books", name: "Books" },
  { value: "Markings", name: "Markings" },
  { value: "Room Puzzle", name: "Puzzle - The Room" },
  { value: "Oddities", name: "Oddities" },
  { value: "Secrets", name: "Secrets" },
  new Separator(),
  { value: "The Room", name: "Back" },
];

let northChoices = [
  { value: "North Puzzle", name: "North Puzzle" },
  { value: "Get Item", name: "Get Item" },
  { value: "Books", name: "North Books" },
  { value: "Clue", name: "Clue" },
  { value: "Knight", name: "Frozen Knight" },
  new Separator(),
  { value: "The Room", name: "Back" },
];

let southChoices = [
  { value: "The Trap", name: "The Trap" },
  { value: "Socks", name: "Warm Socks" },
  { value: "Books", name: "South Books" },
  new Separator(),
  { value: "The Room", name: "Back" },
];

let eastChoices = [
  { value: "Experiments", name: "Abandoned Experiments" },
  { value: "Vials", name: "Broken Vials" },
  { value: "Books", name: "East Books" },
  { value: "Diagrams", name: "Strange Diagrams" },
  { value: "East Puzzle", name: "East Puzzle" },
  new Separator(),
  { value: "The Room", name: "Back" },
];

let westChoices = [
  { value: "Metal", name: "Cold Metal" },
  { value: "Books", name: "West Books" },
  { value: "Instruments", name: "Strange Instruments" },
  { value: "Chains", name: "Rusty Chains" },
  { value: "West Puzzle", name: "West Puzzle" },
  new Separator(),
  { value: "The Room", name: "Back" },
];

function ranNum() {
  return Math.floor(Math.random() * monsters.length);
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
  // console.clear();
  console.log(`Items collected :`);
  console.log(inventory.items);
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
      : finalRoomChoices,
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

      console.clear();
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
      console.clear();
      eastRoom();
      console.log("You choose East");
      console.log("---");
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
      console.clear();
      console.log("You choose South");
      console.log("---");
      console.log(inventory.items);
      // let inRoom = true
      //   await askSequence();

      await continueGame();
      await chooseDirection();
      break;
    case "West":
      currentRoom.north = false;
      currentRoom.theroom = false;
      currentRoom.south = false;
      currentRoom.east = false;
      currentRoom.west = true;

      // currentRoom.west = true;
      console.clear();
      westRoom();
      console.log("You choose West");
      console.log("---");
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

      console.clear();
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
      console.clear();
      introRoom();
      console.log("Looking around");
      console.log("--");
      await chooseDirection();
      // await lookAroundMenu();
      // console.log('You chose West');
      break;
    //
    // Puzzles
    //
    case "North Puzzle":
      if (inventory.items.includes("North Puzzle")) {
        console.log("You have already been here");
      } else {
        inventory.items.push("North Puzzle");
      }
      console.log("You see a Puzzle");
      await chooseDirection();
      break;
    case "East Puzzle":
      console.log(`east books: ${laboratoryPuzzles[0].Objective}`);
      if (inventory.items.includes("East Puzzle")) {
        console.log("You have already been here");
      } else {
        inventory.items.push("East Puzzle");
      }
      await chooseDirection();
      break;
    case "South Puzzle":
      if (inventory.items.includes("South Puzzle")) {
        console.log("You have already been here");
      } else {
        inventory.items.push("South Puzzle");
      }

      await chooseDirection();
      break;
    case "West Puzzle":
      if (inventory.items.includes("West Puzzle")) {
        console.log("You have been");
      } else {
        inventory.items.push("West Puzzle");
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
        console.log(`east books: ${laboratoryPuzzles[0].Premise}`);
        inventory.items.push("East Books");
      }
      if (currentRoom.theroom === true) {
        console.log("the room books");
        inventory.items.push("The Final Room Books");
      }
      if (currentRoom.west === true) {
        console.log(`West books: ${laboratoryPuzzles[1].Premise}`);
        console.log("west books");
        inventory.items.push("West Books");
      }
      if (currentRoom.north === true) {
        console.log(`north books: ${laboratoryPuzzles[2].Premise}`);
        console.log("north books");
        await askSequence();
        inventory.items.push("North Books");
      }
      if (currentRoom.south === true) {
        console.log(`south books: ${laboratoryPuzzles[1].Premise}`);
        console.log("south books");
        inventory.items.push("South Books");
      }
      await chooseDirection();
      break;
    //get random item
    case "Get Item":
      if (currentRoom.east === true) {
        console.log("east item");
        await askSequence();
        inventory.items.push("East Items");
      }
      if (currentRoom.theroom === true) {
        console.log("the room Items");
        await askSequence();
        inventory.items.push("The Final Room item");
      }
      if (currentRoom.west === true) {
        console.log("west item");
        await askSequence();
        inventory.items.push("West item");
      }
      if (currentRoom.north === true) {
        console.log("north item");
        await askSequence();
        inventory.items.push("North item");
      }
      if (currentRoom.south === true) {
        console.log("south item");
        await askSequence();
        inventory.items.push("South item");
      }

      await chooseDirection();
      break;
    //
    // Main Room
    //
    case "Markings":
      console.log("You see markings");
      inventory.items.push("Markings");
      console.log("~~~~~~~~~~~~~~~~~~~~~");
      await chooseDirection();
      break;
    case "Oddities":
      console.log("You see Oddities");
      inventory.items.push("Oddities");
      await chooseDirection();
      break;
    case "Secrets":
      console.log("You see Secrets");
      inventory.items.push("Secrets");
      await chooseDirection();
      break;
    //
    //North Room
    //
    case "Knight":
      // await askSequence();
      //fight function
      // printMonster();
      await fightRound();
      await chooseDirection();
      break;
    case "Clue":
      console.log(`north books ${laboratoryPuzzles[0].Solution}`);
      await chooseDirection();
      break;
    //
    // East Room
    //
    case "Experiments":
      console.log(`east books ${laboratoryPuzzles[1].Solution}`);
      inventory.items.push("Abandoned Experiments");
      await chooseDirection();
      break;
    case "Vials":
      inventory.items.push("Broken Vials");
      await chooseDirection();
      break;
    case "Diagrams":
      inventory.items.push("Strange Diagrams");
      await chooseDirection();
      break;
    case "Apparatus":
      inventory.items.push("Strange Apparatus");
      await chooseDirection();
      break;
    //
    //West Room
    //
    case "Metal":
      inventory.items.push("Cold Metal");
      await chooseDirection();
      break;
    case "Glass":
      inventory.items.push("Glass");
      await chooseDirection();
      break;
    case "Instruments":
      inventory.items.push("Strange Instruments");
      await chooseDirection();
      break;
    case "Chains":
      inventory.items.push("Rusty Chains");
      await chooseDirection();
      break;
    //
    //South Room
    //
    case "Socks":
      toon.health += 20;
      console.log(`You have ${toon.health} health`);
      inventory.items.push("Warm Socks");
      await chooseDirection();
      break;
    case "The Trap":
      while (toon.health > 60) {
        toon.takeDamage(10);
        console.log(`You have ${toon.health} health`);
      }
      inventory.items.push("The Trap");
      await chooseDirection();
      break;
    //
    //default
    //
    case "default":
      console.log("You chose the default");
      await chooseDirection();
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
    console.clear();
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

let score = 0;

function tallyScore() {
  let strVal = inventory.items.filter((str) => str.includes(substr));
  // console.log(strVal);
  if (typeof strVal !== "undefined" && strVal.length > 0) {
    // console.log(inventory.items);
    for (let i = 0; i < strVal.length; i++) {
      score += 1;
    }
  } else {
    console.log("Nope");
    if (inventory.items.includes("North Room")) {
      score += 1;
    }
    if (inventory.items.includes("East Room")) {
      score += 1;
    }
    if (inventory.items.includes("South Room")) {
      score += 1;
    }
    if (inventory.items.includes("West Room")) {
      score += 1;
    }
  }
  console.log(`score: ${score}`);
}

let mons = monsters[ranNum()];
async function fightRound() {
  // printMonster();
  toon.takeDamage(mons.attack);
  console.log(mons.ascii);
  console.log(`You encounter a ${mons.name}`);
  console.log(mons.description);
  console.log(`Health: ${mons.health}`);
  let ans = await select({
    message: "Pick >",
    choices: [new Separator(), "Fight", "Item", "Run", new Separator()],
  });
  if (ans === "Fight") {
    toon.startAttack(mons);
    toon.takeDamage(2);
    if (mons.health < 0) {
      // console.log(`Monster health: ${mons.health}`);
      inventory.items.push(mons.name);
      mons = monsters[ranNum()];
      await chooseDirection();
    }
    await fightRound();
  }
  if (ans === "Item") {
    if (inventory.items.length > 0) {
      let item = await select({
        message: "Choose an item >",
        choices: inventory.items,
      });
    } else {
      console.log("No items to use");
      await fightRound();
    }
    if (ans === "Run") {
      console.log("You run away");
      // await chooseDirection();
    }
  }
}
async function askSequence() {
  console.log(ranNum());
  console.log(monsters[ranNum()].name);
  let combinedInput = [];
  let strAnswer = "";
  for (let i = 1; i <= 3; i++) {
    const inputAns = await input({
      //   type: "input",
      message: `Which button will you press? ${i}`,
    });
    // console.log(i)
    // console.log(monsters[i].ascii)
    strAnswer += inputAns;
  }
  combinedInput.push(strAnswer);
  console.log(`combinedInput: ${combinedInput}`);
  if (solution.includes(strAnswer)) {
    console.log("Correct sequence! You solved the puzzle!");
    northSolution = true;
  } else {
    console.log("Incorrect sequence. Try again!");
    let back = await confirm({
      message: "Would you like to try again?",
    });
    if (back === false) {
      console.log("You go back to the room");
      await chooseDirection();
    } else {
      await askSequence();
    }
  }
}
// function printMonster() {
//   let mons = monsters[ranNum()];
//   console.log(mons.ascii);
//   console.log(`You encounter a ${mons.name}`);
//   console.log(mons.description);
//   console.log(`Health: ${mons.health}`);
//   return mons;
// }
// for (let i = 0; i < solution.length; i++) {
//   if (combinedInput.includes(solution[i])) {
//       console.log("\nCorrect sequence! You solved the puzzle!");
//       northSolution = true;
//     }
//     else {
//         console.log("Incorrect sequence. Try again!");
//         await askSequence();
//         break;
//     }

// }
// console.log("Incorrect sequence. Try again!");

console.log("~~---~~");
console.log("The Room");
console.log("~~---~~");
await introSequence();
introRoom();
await chooseDirection();
