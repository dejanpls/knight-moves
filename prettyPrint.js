export default function prettyPrint(obj) {
  const noun = obj.moves > 1 ? "moves" : "move";
  console.log(`\nYou've made it in ${obj.moves} ${noun}! Here's your path:`);
  obj.path.forEach((move) => console.log(move));
}
