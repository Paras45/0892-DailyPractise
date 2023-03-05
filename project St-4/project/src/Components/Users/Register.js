import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function Register() {
    let history=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:""
    })
    const {name,username,email,password}=user;
    const onValChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/users",user);
        history("/");
    }

  return (
    
    <div style={{display:"flex"}}>
        <Link to="/"style={{height:"auto",margin:"5px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
        <div id="AddUser">
        <h1 style={{textAlign:""}}>Register</h1>
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
                <input type="submit" class="btn btn-success"/>
            </form>

        </div>
    </div>
  )
}
