const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
console.log("Welcome");

await wait(1000);

console.clear();

console.log("What's up dude");

await wait(1000);
console.clear();
console.log(3);
await wait(1000);
console.clear();
console.log(2);
await wait(1000);
console.clear();
console.log(1);
await wait(1000);
console.clear();
console.log("Blast off!");
