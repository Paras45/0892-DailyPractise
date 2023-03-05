import React ,{useEffect, useState} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate,useParams} from "react-router-dom";
export default function EditUser() {
    let history=useNavigate();
    const {id}=useParams();

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:""
    })
    const {name,username,email,password}=user;
    const onValChange= e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:4000/users/${id}`,user);
        history("/Home");
    }
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async()=>{
        let result=await axios.get(`http://localhost:4000/users/${id}`);
        setUser(result.data);
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
                    
                    <input type="text" name='password' value={password} placeholder="Password" onChange={e=>onValChange(e)} class="form-control"/>
                </div>
            <input type="submit" class="btn btn-primary"/>
        </form>
        </div>
    </div>
  )
}
