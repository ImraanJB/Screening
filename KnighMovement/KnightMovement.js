// The code is inspired from various resources on Internet.
// Creating an two-dimensional Array
const board = [];
for (let i = 0; i < 8; i++) {
  board[i] = [];
}

// To see if the location is in the board range
const addMove = (x, y, level) => {
  if ((x >= 0) && (x <= 7) && (y >= 0) && (y <= 7) && board[x][y] == null) {
    board[x][y] = level;
  }
}

// To add all the moves knight can reach from that particular position
const addAllMoves = (x, y, level) => {
  addMove(x + 1, y + 2, level);
  addMove(x + 2, y + 1, level);
  addMove(x + 2, y - 1, level);
  addMove(x + 1, y - 2, level);
  addMove(x - 1, y - 2, level);
  addMove(x - 2, y - 1, level);
  addMove(x - 2, y + 1, level);
  addMove(x - 1, y + 2, level);
}

// To look in the board for all occupied space.
const addAllPossible = (level) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === level) {
        addAllMoves(i, j, level + 1);
      }
    }
  }
}

// Consolidating the function
const findPath = (startX, startY, endX, endY) => {
  addMove(startX, startY, 0);
  let index = 0;
  do {
    addAllPossible(index++);
  } while (board[endX][endY] == null);
  return board[endX][endY];
}


console.log(findPath(3, 3, 4, 6));
