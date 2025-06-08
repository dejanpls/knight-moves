import generateMoves from "./generateMoves.js";
import prettyPrint from "./prettyPrint.js";

export default function knightMoves(start, target) {
  const queue = [[start]];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    const latest = current[current.length - 1];

    if (latest.join() == target.join()) {
      visited.add(current);

      const obj = {
        moves: current.length - 1,
        path: current,
      };

      return prettyPrint(obj);
    } else {
      // Get all valid knight moves from this position
      const validMoves = generateMoves(latest);

      validMoves.forEach((move) => {
        const key = move.join();
        if (!visited.has(key)) {
          queue.push(current.concat([move]));
          visited.add(key);
        }
      });
    }
  }
}
