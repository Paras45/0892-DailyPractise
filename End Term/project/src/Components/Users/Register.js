import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function Register() {
    let history=useNavigate();
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        proof:"",
        service:"",
        salary:"",
        password:""

    })
    const {name,email,password,phone,proof,salary,Manager,Chef,Cleaner,Security,Aadhaar,PanCard,Driving}=user;
    const onValChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/users",user);
        history("/employee");
    }

  return (
    
       
    <div style={{backgroundImage:"url('https://images.squarespace-cdn.com/content/v1/5ac2ddf285ede15e39a57666/1618566279966-25OU37WJYUXKLKX6UQFF/Design-Anthology-2021-04+Toggle+Hotel%2C+Tokyo-7943.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"17cm"}}>
        <Link to="/employee"style={{height:"auto",marginLeft:"-10px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
        
        <div id="addCust">
            <h1 style={{color:"white",marginLeft:"20px",textDecoration:"underline"}}><b>Add Details</b></h1>
            <form onSubmit={e=>onSubmit(e)}>
                <table style={{color:"white"}}>
                    <tr>
                        <td >
                            <b>Name</b> <input type="text" name='name'  value={name} placeholder="Name" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                            <b>Contact</b> <input type="number" name='phone'  value={phone} placeholder="Phone No" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                    </tr>
                    <tr>
                        <td >
                        <b>Id Proof</b> <select onChange={e=>onValChange(e)} name="proof" className='form-control dropdown'>
                                        <option>Select</option>
                                        <option value={Aadhaar}>Aadhaar</option>
                                        <option value={PanCard}>Pan Card</option>
                                        <option value={Driving}>Driving License</option>
                                        
                                    </select></td>
                        <td>
                        <b>Salary</b> <input type="number" name='salary'  value={salary} placeholder="Salary" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <b>Email</b> <input type="email" name='email'  value={email} placeholder="Email" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                        <b>Password</b> <input type="password" name='password'  value={password} placeholder="Password" required onChange={e=>onValChange(e)}class="form-control "/>
                           
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                    <b>Service</b> <select onChange={e=>onValChange(e)} name="service" className='form-control dropdown'>
                                        <option>Service</option>
                                        <option value={Manager}>Manager</option>
                                        <option value={Chef}>Chef</option>
                                        <option value={Cleaner}>Cleaner</option>
                                        <option value={Security}>Security</option>
                                    </select>
                                    </td> 
                    </tr>
                    <tr >
                        <td colSpan={2}>
                        <button className='btn btn-primary form-control' > <b>Register</b></button>
                        </td>
                    </tr>
                </table>
                
            </form>

        </div>
    </div>
  )
}