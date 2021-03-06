
document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
}
board.cells = [{'a' : 0}, {'b' : 1}, {'c' : 2}, {'d' : 3}, {'e' : 4}, {'f' : 5},
 {'g' : 6}, {'h' : 7}, {'i' : 8}];

board.cells[0].row = 0;
board.cells[1].row = 0;
board.cells[2].row = 0;
board.cells[3].row = 1;
board.cells[4].row = 1;
board.cells[5].row = 1;
board.cells[6].row = 2;
board.cells[7].row = 2;
board.cells[8].row = 2;

board.cells[0].col = 0;
board.cells[1].col = 1;
board.cells[2].col = 2;
board.cells[3].col = 0;
board.cells[4].col = 1;
board.cells[5].col = 2;
board.cells[6].col = 0;
board.cells[7].col = 1;
board.cells[8].col = 2;

board.cells[0].isMine = true;
board.cells[1].isMine = false;
board.cells[2].isMine = true;
board.cells[3].isMine = false;
board.cells[4].isMine = true;
board.cells[5].isMine = false;
board.cells[6].isMine = true;
board.cells[7].isMine = true;
board.cells[8].isMine = false;

board.cells[0].hidden = !false;
board.cells[1].hidden = !false;
board.cells[2].hidden = !false;
board.cells[3].hidden = !false;
board.cells[4].hidden = !false;
board.cells[5].hidden = !false;
board.cells[6].hidden = !false;
board.cells[7].hidden = !false;
board.cells[8].hidden = !false;



function startGame () {
  // Don't remove this function call: it makes the game work!

  for (var i = 0; i < board.cells.length; i++) {
      board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
      document.addEventListener('click', checkForWin)
      document.addEventListener('contextmenu', checkForWin)
      }
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
    for (var i = 0; i < board.cells.length; i++) {
      if (board.cells[i].isMine && !board.cells[i].isMarked) {
         return
      }
      if (!board.cells[i].isMine && board.cells[i].hidden) {
         return
       }
     }
lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
        var surroundingCells = lib.getSurroundingCells(cell.row, cell.col)
        var count = 0;
            for (var j = 0; j < surroundingCells.length; j++) {
              if (surroundingCells[j].isMine === true) {
                count++;
              }
            }
return count;
}





//
