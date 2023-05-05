import React from 'react'

const ListTask = ({ task, index, removeTask }) => {
  return (
    <>
        <div className='list-task'>
            {task.title}
            <button  onClick={()=>{removeTask(index)}} className='delete-btn'> ❌ </button>
        </div>
    </>
  )
}

export default ListTask

