import React from 'react'
import { BoardProvider } from './BoardContext'
import Board from './Components/Board'

function App() {
  return (
    <div>
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  )
}

export default App
