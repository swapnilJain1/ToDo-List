import React  from 'react'
import "./AddTask.css"

function AddTask({allTask,setAllTask,task,setTask}) {

  // const [task,setTask] = useState("")

  const handleClick = (e) =>{
    e.preventDefault()
    
    const date = new Date()
    const taskObject = {
      id:date.getTime(),
      time : `${date.toLocaleTimeString()} 
      \u00A0\u00A0\u00A0\u00A0 ${date.toLocaleDateString()}`,
      name : task,
    }
     
    setAllTask(oldTask =>taskObject.name ? [...oldTask, taskObject] : [...oldTask])
    // setTask(oldTask => (
    //   {...oldTask,oldTask.name=""}))
    
  }

  return (
    <div className='container'>
    <form>
      <input value={task.name} placeholder="Enter the task" type="text" onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}

export default AddTask