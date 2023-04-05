import React from 'react'
import { useState,useContext } from 'react'
export default function Theme() {
  const [theme,setTheme]=useState("light");
 function Myfun(){
    if(theme==="light"){
        document.getElementById("box").style.backgroundColor="black";
        document.getElementById("h1").style.color="white";
        document.getElementById("box").style.height="100vw";
        setTheme("dark");
    }
    else if(theme==="dark"){
        document.getElementById("box").style.backgroundColor="white";
        document.getElementById("h1").style.color="black";
        setTheme("light");
    }
 }
  return (
    <div id="box">
        <h1 id="h1">Theme = {theme}</h1>
        <button onClick={Myfun}>change</button>
    </div>
  )
}
