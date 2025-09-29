import React,{useContext, useState} from 'react'
import {useBoard , BoardContext } from '../BoardContext'
import Column from './Column'
import TashBin from './TashBin';


  function TaskInput(){
    const {dispatch} = useContext(BoardContext);
    const [text, setText] = useState('');

    const handleSubmit = (e) =>{
      e.preventDefault();
      if(!text.trim()) return;
      dispatch({type: 'ADD_TASK', payload:{text}});
      setText('');
    };

    return(
      <div> 
      <h1 style={{"color":"white"}}>Kanban Board</h1>
      <form className='task-form' onSubmit={handleSubmit}>
        <input className="ipbox" type='text' 
        placeholder='add new task..' 
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>
        <button type='submit' className='button'>Add Task</button>
      </form>
      </div>
    )
  }


  export default function Board(){
    const {state} = useBoard();
  return (
    <> <TaskInput />
      
    <div className='board'>
      {Object.values(state.columns).map((col)=>(
        <Column key={col.id} column = {col}/>
      ))}
      <TashBin />
      <div>
        
      </div>
    </div>
   </>
  )
}


