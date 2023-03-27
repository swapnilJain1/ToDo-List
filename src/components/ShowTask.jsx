import React from 'react'
import "./ShowTask.css"

function ShowTask({allTask,setAllTask,task, setTask}) {
  const handleDelete = (id) =>{
    setAllTask(oldTask => oldTask.filter(task => task.id!==id))
  }
  // const handleEdit = (id) =>{
  //   const selectedTask = allTask.find(task => task.id===id)
  //   setTask(selectedTask.name)
    
  // }

  return (
    <section className='showTask'>
     <div className="show-container">
      <div className="left">
      <h3>Task</h3>
      <p className='task-length'>{allTask ? allTask.length : 0}</p>
      </div>
      <div className="right">
        <button onClick={()=>setAllTask("")} className='clear-button'>Clear All</button>
      </div>
      </div>
      <div className="main">
        <ul className="grid">
          {allTask && allTask.map(task => (
            <li key={task.id} >
              <p>{task.name}</p>
              {/* <span className='edit-del' onClick={()=>handleEdit(task.id)}>📝</span> */}
              <span className='edit-del'
                    onClick={()=>handleDelete(task.id)}
              >❌</span>
              <span className='time'>{task.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ShowTask