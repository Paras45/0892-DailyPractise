import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function AddUser() {
    let history=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:""
    })
    const {name,username,email,password,image}=user;
    const onValChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/users",user);
        history("/Home");
    }

  return (
    
    <div style={{display:"flex"}}>
        <Link to="/home"style={{height:"auto",margin:"5px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
        <div id="AddUser">
            <form onSubmit={e=>onSubmit(e)}>
                <div class="mb-3">
                    
                    <input type="text" name='name'  value={name} placeholder="Name" required onChange={e=>onValChange(e)}class="form-control "/>
                </div>
                <div class="mb-3">
                    
                    <input type="text" name='username'value={username}required placeholder="UserName" onChange={e=>onValChange(e)} class="form-control"/>
                </div>
                <div class="mb-3">
                   
                    <input type="Email" name='email' value={email} placeholder="Email" onChange={e=>onValChange(e)} class="form-control"/>
                </div>
                <div class="mb-3">
                    
                    <input type="password" name='password' value={password} placeholder="Password" onChange={e=>onValChange(e)} class="form-control"/>
                </div>
                <div class="mb-3">
                    
                    <input type="text" name='image' value={image} onChange={e=>onValChange(e)} class="form-control"/>
                </div>
                <input type="submit"value={"Sign Up"} class="btn btn-dark"/>
            </form>

        </div>
        <img src='https://www.pngitem.com/pimgs/m/550-5505643_thumb-image-png-register-icon-transparent-png.png' style={{position:"relative",textAlign:"right",width:"700px",height:"600px",margin:"2%"}}></img>
    </div>
  )
}
