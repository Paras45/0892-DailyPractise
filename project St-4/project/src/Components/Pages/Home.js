import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link,useNavigate, useParams} from "react-router-dom";
export default function Home() {
  let navigate=useNavigate();
  const [users,setUser]= useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async ()=>{
    const result=await axios.get("http://localhost:4000/users");
    setUser(result.data);
  }
  const DeleteUser=async id=>{
     await axios.delete(`http://localhost:4000/users/${id}`);
     loadUsers();
  }
  
  return (
    <div id="HomeDiv">
      <h1 style={{textAlign:"center",textDecoration:"underline"}}><b>Employee Data</b></h1>
      <table className="table table-striped table-dark">
          <thead class="">
            <tr>
              <th style={{textDecoration:"underline"}}>S.No</th>
              <th style={{textDecoration:"underline"}}>Image</th>
              <th style={{textDecoration:"underline"}}>Name</th>
              <th style={{textDecoration:"underline"}}>User Name</th>
              <th style={{textDecoration:"underline"}}>Email</th>
              <th style={{textDecoration:"underline"}}>Changes</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
                <tr>
                  <th>{index+1}</th>
                  <td><img src={user.image}></img></td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/User/${user.id}`}><i className="fa fa-eye" style={{color:"white",fontSize:"25px",marginLeft:"5%"}} ></i></Link>
                    <Link to={`/EditUser/${user.id}`}><i className='far fa-edit' style={{color:"grey",fontSize:"25px",marginLeft:"5%"}}></i></Link>
                    <Link onClick={()=>DeleteUser(user.id)}><i className='fas fa-trash-alt' style={{color:"red",fontSize:"25px",marginLeft:"5%"}} ></i></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
      </table>
    </div>
  )
}
