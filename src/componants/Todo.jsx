import React, { useEffect, useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'
import './Todo.css'

const Todo = () => {
  const [tasks,setTasks] =useState([])

  useEffect (() =>{
    document.title = `You have ${tasks.length} pending task(s)`
  });

  const addTask = (title) =>{
    const newTask = [...tasks, {title}];
    setTasks(newTask);
  }

  const removeTask = (index)=>{
    const deleteTask = [...tasks]
    deleteTask.splice(index,1)
    setTasks(deleteTask);
  }

  return (
    <>
        <div className='todo_container'>
            <div className='Header'>TODO APP </div>
            <div className='add_task'>
                <AddTask  addTask={addTask} />
            </div>
            <div className='list_task'>
              {tasks.map((task, index)=>
                <ListTask task={task} removeTask={removeTask} key={index} />
              )}
            </div>
        </div>
    </>
  )
}

export default Todo