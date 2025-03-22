import { useState } from "react";

const initArr = new Array(9).fill(null)

export function useTicTacToe(){
    const [board, setBoard] = useState(initArr);
    const [isXnext, setisXnext] = useState(true)
    const WINNING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const calculateWinner = (currentBoard: Array<[]>)=>{
        for(let i=0; i< WINNING_PATTERNS.length; i++){
            const [a,b,c] = WINNING_PATTERNS[i]
            if(currentBoard[a] && currentBoard[a] == currentBoard[b] && currentBoard[a] == currentBoard[c]){
                return currentBoard[a];
            }
        }
        return null;
    };

    const handleClick = (idx: number)=>{
        const winner = calculateWinner(board);
        console.log(winner);
        if(winner || board[idx]) return;

        const newBoard = [...board];
        newBoard[idx] = isXnext? "X": "O";
        setBoard(newBoard);
        setisXnext(!isXnext)

    }

    const getStatusMessage = ()=>{
        const winner = calculateWinner(board);
        if(winner) return `Player ${winner} wins!!`;
        if(!board.includes(null)) return `It's a draw`;
        return `Player ${isXnext? "X": "O" } turn`
    }
    const resetGame = ()=>{
        setBoard(initArr)
    }


    return {board, calculateWinner, handleClick, getStatusMessage, resetGame}
}