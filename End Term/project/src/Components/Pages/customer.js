import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
export default function Customer() {
  const [users,setUser]= useState([]);
  useEffect(()=>{
    loadUsers();
  },[]);
  const loadUsers=async ()=>{
    const result=await axios.get("http://localhost:4000/customer");
    setUser(result.data);
  }
  const DeleteUser=async id=>{
     await axios.delete(`http://localhost:4000/customer/${id}`);
     loadUsers();
  }
  
  return (
    <div id="HomeDiv" style={{backgroundImage:"url('https://mikuta.nu/wp-content/uploads/2017/02/mikuta-zhero-kappl-18.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"17cm",color:"white"}}>
      
      
      <h1 style={{textAlign:"center",textDecoration:"underline",textShadow:"5px 5px 5px black",}}>Guests</h1>
      
      <table class="table table-sm table-dark text-center mt-5">
        
          <thead >
            <tr >
              <th><b>S.No</b></th>
              <th><b>Name</b></th>
              <th><b>Phone No</b></th>
              <th><b>Id Proof</b></th>
              <th><b>Members</b></th>
              <th><b>Room no</b></th>
              <th><b>Address</b></th>
              <th><b>Check In</b></th>
              <th><b>Action</b></th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index)=>(
                <tr>
                  <th>{index+1}</th>
                  
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.proof}</td>
                  <td>{user.member}</td>
                  <td>{user.room}</td>
                  <td>{user.address}</td>
                  <td>{user.check}</td>
                  <td>
                    <Link to={`/custdetail/${user.id}`}><i className="fa fa-eye" style={{color:"white",fontSize:"25px",marginLeft:"5%"}} ></i></Link>
                    <Link to={`/editcust/${user.id}`}><i className='far fa-edit' style={{color:"blue",fontSize:"25px",marginLeft:"5%"}}></i></Link>
                    <Link onClick={()=>DeleteUser(user.id)}><i className='fas fa-trash-alt' style={{color:"red",fontSize:"25px",marginLeft:"5%"}} ></i></Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
      </table>
      <Link style={{marginLeft:"39%",width:"10cm"}}className='btn btn-primary' to="/addCust">Add Guest</Link>
    </div>
  )
}