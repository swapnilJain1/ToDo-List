import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';

function App() {
  // const [task,setTask] = useState("")
  const [allTask,setAllTask] = useState([])
  const [task,setTask] = useState({})

  return (
    <div className="App">
      
      <Header/>
      <AddTask allTask={allTask} setAllTask={setAllTask} task={task} setTask={setTask}/>
      <ShowTask allTask={allTask} setAllTask={setAllTask} task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
