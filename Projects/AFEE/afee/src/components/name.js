import React, { useRef,useState } from 'react'

function Name(props) { 
    function demo(){
        nameref.current.focus()
        nameref.current.style.color="red"
        nameref.current.style.display="none";
        setName1(nameref.current.value)
    }
const nameref= useRef();
const [name1,setName1]=useState();
  return (
    <div>
        <h1>Name is={name1}</h1>
        <input type="text" ref={nameref}/>
        <button onClick={demo} type="button">Click</button>
    </div>
  )
}

export default Name;