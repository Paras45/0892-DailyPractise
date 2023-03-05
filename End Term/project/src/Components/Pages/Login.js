import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
export default function Login() {
    let navigate=useNavigate();
    const [user,setUser]=useState([]);
    useEffect(()=>{
        loaduser();
    },[]);
    const loaduser=async ()=>{
        let res=await axios.get("http://localhost:4000/users");
        setUser(res.data);
    }
    const onSubmit=()=>{
        let flag=1;
     
        user.map((users)=>{
            let email=document.getElementById("loginE").value;
            let password=document.getElementById("loginP").value;;
            if(users.email==email){
               if(users.password==password){
              
                flag=2;
               document.getElementById("homeBtn").style.display="block";
               document.getElementById("Cust").style.display="block";
               document.getElementById("Empl").style.display="block";
               document.getElementById("loginBtn").style.display="none";
               document.getElementById("logo2").style.display="none";
               document.getElementById("logo").style.display="inline";
               navigate("/Home");
               } else{
                alert("Enter Correct Password.");
                navigate("/");
                flag=2;
               }
            }else{
               if(flag===2){
                flag=2;
               }
               else{
                flag=1;
               }
            }
        })
        if(flag===1){
            alert("Enter valid Email or Register first.");
        }
        
    }
  return (
    <div>
        <div style={{backgroundImage:"url('https://mocah.org/uploads/posts/708653-Interior-Hotel-Armchair-Lamp-Chandelier-Design.jpg')",backgroundAttachment:"fixed",backgroundSize:"cover"}}>
            
            <div  id='LoginDiv'>
                <from  id="form">
                    <h1 ><img src="https://www.pngitem.com/pimgs/m/273-2738719_user-login-icon-png-transparent-background-login-icon.png" style={{width:"200px",height:"200px",borderRadius:"60%"}}></img></h1>
                    
                    <table id="table">
                        <tr>
                            <td colSpan="2" ><input class="form-control" type="email"id="loginE" name="email"required placeholder='Enter Email'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"  ><input class="form-control"type="password"id="loginP"  name="password"required placeholder='Enter Password' /></td>
                        </tr>
                       
                        <tr>
                            <td colSpan="2" >
                                <button className="btn btn-primary "onClick={e=>onSubmit()}>Login</button>
                            </td>
                        </tr>
                        {/* <tr>
                            <td colSpan="2">
                                Don't have account ? <Link to="/register" id='link'><b>Register</b></Link>
                            </td>
                        </tr> */}
                    </table>
                    
                 </from>
              
            </div>
        </div>
    </div>
  )
}
