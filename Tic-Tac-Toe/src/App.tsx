import "./App.css"
import { useTicTacToe } from "./hooks/use-tic-tac-toe"



export default function App(){
  
  const {board,  handleClick, getStatusMessage, resetGame} = useTicTacToe()
  
  
  return(
    <div id="bg">
      <div id="root">
        <div id="game" className="">
          <div id="status" className="">
            {getStatusMessage()}
            <button id="reset" onClick={resetGame} style={{fontFamily: "Finlandica"}}>Reset Game</button>
          </div>
          <div id="board">
            {board.map((cell, idx)=>{
              return(
                  <button key={idx} id="cell" onClick={()=>{handleClick(idx)}} disabled={cell!=null}>{cell}
                  </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

