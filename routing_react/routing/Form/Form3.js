import React, { useState } from 'react';
const Form3=()=> {
    const [name,setName]=useState("");
        const handleSubmit = (event)=>{
        event.preventDefault();
        //alert(`The name you entered was: ${name}`);
        console.log(name);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                <input type="submit" />
                </label>
        </form>
    )
}

export default Form3;
