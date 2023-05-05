import React, { useState } from 'react'

const AddTask = ({addTask}) => {

  const [value, setValue] = useState ("")

  const addItem = () =>{

    if (value) {
      addTask(value)
      setValue("")   
    }
  }
  return (
    <>
        <div className='input-container'>
            
            <input type="text" placeholder="Add a New Task" className='input' value={value} required="true"
            onChange={(e)=> 
              setValue(e.target.value)}
            />
            <button onClick={addItem}className='add-btn'> 📌 </button>
        </div>
    </>
  )
}

export default AddTask