import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";
export default function User() {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async ()=>{
        let result=await axios.get(`http://localhost:4000/users/${id}`)
        setUser(result.data);

    }
  return (
    <div >
        <div style={{display:"flex"}}>
            <Link to="/home"style={{height:"auto",margin:"5px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
            <div id="User">
                <h1>Employee Details</h1>
                <table className='table table-bordered '>
                    <tr><td>Name </td><td>{user.name}</td> </tr>
                    <tr><td>UserName </td><td>{user.username}</td> </tr>
                    <tr><td>Email </td><td>{user.email}</td></tr>
                    <tr><td>Password </td><td>{user.password}</td></tr>
                </table>
            </div>
        </div>
        
    </div>
  )
}
