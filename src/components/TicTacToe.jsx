import "./TicTacToe.css";
import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [move, setMove] = useState("X");

  const handleDivClick = (n) => {
    if (board[n] !== "") {
      alert("Already Clicked!");
      return;
    }

    let updatedBoard = [...board];
    updatedBoard[n] = move;
    setBoard(updatedBoard);

    // Set the move for the next player
    setMove(move === "X" ? "O" : "X");

    // Check for winner or tie after each move
    if (checkWinner(updatedBoard, move)) {
      setTimeout(() => {
        alert(`${move} wins!`);
        resetGame();
      }, 0);
    } else if (updatedBoard.every((square) => square !== "")) {
      setTimeout(() => {
        alert("It's a tie!");
        resetGame();
      }, 0);
    }
  };

  const checkWinner = (currentBoard, currentMove) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    return winPatterns.some(
      (pattern) =>
        currentBoard[pattern[0]] === currentMove &&
        currentBoard[pattern[1]] === currentMove &&
        currentBoard[pattern[2]] === currentMove
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setMove("X");
  };

  return (
    <div className="main-Table">
      <table>
        <tbody>
          <tr>
            <td onClick={() => handleDivClick(0)}>{board[0]}</td>
            <td onClick={() => handleDivClick(1)}>{board[1]}</td>
            <td onClick={() => handleDivClick(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => handleDivClick(3)}>{board[3]}</td>
            <td onClick={() => handleDivClick(4)}>{board[4]}</td>
            <td onClick={() => handleDivClick(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => handleDivClick(6)}>{board[6]}</td>
            <td onClick={() => handleDivClick(7)}>{board[7]}</td>
            <td onClick={() => handleDivClick(8)}>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TicTacToe;
