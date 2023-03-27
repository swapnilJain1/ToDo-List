import React,{useEffect, useState} from 'react'
import './Header.css'
function Header() {
  const [theme,setTheme] = useState(true)
  useEffect(()=>{
    document.documentElement.removeAttribute("class")

    document.documentElement.classList.add(theme?"dark":"light")
    
  },[theme])
  return (
    <header>
        <div className="logo">
            <img src='https://cdn.icon-icons.com/icons2/7/PNG/128/list_992.png' alt='logo'/>
            <p>Task Master</p>
        </div>
        <div className="theme">
            <button className='bn5' onClick={()=>setTheme(prevTheme => !prevTheme)}>{(theme)?"Light Theme":"Dark Theme"}</button>
            
        </div>
    </header>
  )
}

export default Header