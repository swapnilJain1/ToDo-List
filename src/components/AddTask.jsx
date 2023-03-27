import React,{useRef} from 'react'
import "./AddTask.css"

function AddTask({allTask,setAllTask,task,setTask}) {

  // const [task,setTask] = useState("")
  const elementRef = useRef()

  const handleClick = (e) =>{
    e.preventDefault()
    if(task.id){
      // const date = new Date()
      const updatedTaskList = allTask.map(todo =>(
        todo.id===task.id ?{id:task.id,name:e.target.task} :todo
      ))
      setAllTask(updatedTaskList)
    }else{
      const date = new Date()
      const taskObject = {
      id:date.getTime(),
      time : `${date.toLocaleTimeString()} 
      \u00A0\u00A0\u00A0\u00A0 ${date.toLocaleDateString()}`,
      name : task,
    }
     
    setAllTask(oldTask =>taskObject.name ? [...oldTask, taskObject] : [...oldTask])}
    
    elementRef.current.value=""
    
  }

  return (
    <div className='container'>
    <form>
      <input  ref={elementRef} placeholder="Enter the task" type="text" onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleClick}>Add</button>
      </form>
    </div>
  )
}

export default AddTask