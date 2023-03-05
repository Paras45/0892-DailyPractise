import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import axios from "axios";
export default function CustDetail() {
    const [user,setUser]=useState({
        name:"",
        phone:"",
        proof:"",
        member:"",
        address:"",
        room:"",
        check:""
    })
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    const loadUser=async ()=>{
        let result=await axios.get(`http://localhost:4000/customer/${id}`)
        setUser(result.data);

    }
  return (
    <div >
        <div style={{backgroundImage:"url('https://images.squarespace-cdn.com/content/v1/5b4bd7989d5abb222d218b0d/1598283872668-YSTWUQ2PAWACGL7T79NE/8M9A9268.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"17cm"}}>
            <Link to="/customer"style={{height:"auto",margin:"5px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
            <div id="custD">
                <img src='https://icons.iconarchive.com/icons/icons8/windows-8/512/Data-View-Details-icon.png' style={{width:"20%",margin:"-10% 0% 5% 16%"}}></img>
                <h1><b>Guest Details</b></h1>
                <table className='table table-bordered table-dark '>
                    <tr><td>Name </td><td>{user.name}</td> </tr>
                    <tr><td>Phone No. </td><td>{user.phone}</td> </tr>
                    <tr><td>Id Proof </td><td>{user.proof}</td></tr>
                    <tr><td>Members </td><td>{user.member}</td></tr>
                    <tr><td>Address </td><td>{user.address}</td></tr>
                    <tr><td>Check In </td><td>{user.check}</td></tr>
                </table>
            </div>
        </div>
        
    </div>
  )
}
