export default function generateMoves(current) {
  const x = current[0];
  const y = current[1];

  const positions = [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];

  let valid = positions.filter((pos) => {
    return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
  });

  return valid;
}
