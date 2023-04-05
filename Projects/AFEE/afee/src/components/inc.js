import React from 'react'
import { useState,useEffect } from 'react';
export default function Inc() {
    const [content,setContent]=useState("Context");
    const [count,setCount]=useState(0);
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        {count}
        <button onClick={()=>{setCount(count-1)}}>-</button>

        <h1>{content}</h1>

        

        <button onClick={()=>{setContent("comment")}}>Comment</button><br></br>
        <button onClick={()=>{setContent("Post")}}>Post</button><br></br>
        <button onClick={()=>{setContent("Like")}}>Like</button><br></br>
        

    </div>
  )
}
