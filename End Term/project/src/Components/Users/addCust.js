import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
export default function AddCust() {
    let history=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        password:""
    })
    const {name,phone,Aadhaar,PanCard,Driving,member,address,room,check,Single,Deluxe,Luxury,Suite,Others}=user;
    const onValChange= e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:4000/customer",user);
        history("/customer");
    }

  return (
    
    <div style={{backgroundImage:"url('https://images.squarespace-cdn.com/content/v1/5c8bcb1f7046805c81a7a1f2/1652680510346-PFOQDTSLKWT5NX8BC0LN/06.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover",height:"17cm"}}>
        <Link to="/customer"style={{height:"auto",marginLeft:"-10px"}}><i className="fas fa-arrow-left" style={{color:"black",fontSize:"25px",marginLeft:"5%"}}></i></Link>
        
        <div id="addCust">
            <h1 style={{color:"white",marginLeft:"20px",textDecoration:"underline"}}>Add Guest Details</h1>
            <form onSubmit={e=>onSubmit(e)}>
                <table style={{color:"white"}}>
                    <tr>
                        <td >
                            <b>Name</b> <input type="text" name='name'  value={name} placeholder="Name" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                            <b>Phone No</b> <input type="number" name='phone'  value={phone} placeholder="Phone No" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                    </tr>
                    <tr>
                        <td >
                        <b>Id Proof</b> <select onChange={e=>onValChange(e)} name="proof" className='form-control dropdown'>
                                        <option>Select</option>
                                        <option value={Aadhaar}>Aadhaar</option>
                                        <option value={PanCard}>Pan Card</option>
                                        <option value={Driving}>Driving License</option>
                                        <option value={Others}>Others...</option>
                                    </select>
                        </td>
                        <td>
                            <b>Members</b> <input type="number" name='member'  value={member} placeholder="Members" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <b>Check In</b> <input type="date" name='check'  value={check}  required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td>
                            <b>Room No</b><input type="number" name='room'  value={room} placeholder="Room No" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                    </tr>
                    <tr>
                        
                        <td >
                            <b>Address</b> <input type="text" name='address'  value={address} placeholder="Address" required onChange={e=>onValChange(e)}class="form-control "/>
                        </td>
                        <td >
                        <b>Room Type</b> <select onChange={e=>onValChange(e)} name="Room Type" className='form-control dropdown'>
                                        <option>Select</option>
                                        <option value={Single}>Single</option>
                                        <option value={Luxury}>Luxury</option>
                                        <option value={Deluxe}>Deluxe</option>
                                        <option value={Suite}>Suite</option>
                                    </select>
                        </td>
                    </tr>
                    
                    <tr >
                        <td colSpan={2}>
                        <button className='btn btn-primary form-control' > Add Guest</button>
                        </td>

                    </tr>
                </table>
                
            </form>

        </div>
    </div>
  )
}
