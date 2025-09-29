import React from 'react'
import { useBoard } from '../BoardContext'

export default function TashBin() {
  const {dispatch} =useBoard();

  const handleDrop = (e) =>{
    e.preventDefault();
    const task = e.dataTransfer.getData("task");
    const sourceCol = e.dataTransfer.getData("sourceCol");
    if(task && sourceCol){
        dispatch({type: "DELETE_TASK", 
        payload: {sourceCol,  task}})
      };
    };
    const handleDragOver = (e) =>{
        e.preventDefault();
    }
    return(
        <div className='trash-bin'
        onDrop={handleDrop}
        onDragOver={handleDragOver}>
            <p> Drop here to delete...</p>
        </div>
    )
  }



