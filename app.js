// // Pick a target number we are trying to guess
// const target = Math.floor(Math.random() * 10);
// // Make initial guess
// let guess = Math.floor(Math.random() * 10);

// // Continue looping while guess is not the target num
// while (guess !== target) {
// 	console.log(`Target: ${target} Guess: ${guess}`);
// 	// IMPORTANT!!
// 	// Update the value of guess each time through the loop
// 	guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`CONGRATS YOU WIN!!`);
// console.log(0);
const t = Math.floor(Math.random() * 3) + 1;
alert(t);
let g = parseInt(prompt("en"));
console.log(t);
console.log(g);
while (g !== t) {
  alert("iw");
  g = parseInt(prompt("en"));
  alert("ag");
  // if (g === t) break;
  // alert("ai");
}
