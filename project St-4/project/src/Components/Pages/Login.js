import React from 'react';
import {Link} from "react-router-dom";
export default function Login() {
  return (
    <div>
        <div style={{display:"flex"}}>
            <div  id='LoginDiv'>
                <from  id="form">
                    <h1 style={{textDecoration:"underline"}}>Login</h1>
                    
                    <table id="table">
                        <tr>
                            <td colSpan="2" ><input class="form-control" type="email"id="loginE" name="email"required placeholder='Enter Mail'/></td>
                        </tr>
                        <tr>
                            <td colSpan="2"  ><input class="form-control"type="password"id="loginP"  name="password"required placeholder='Enter Password' /></td>
                        </tr>
                       
                        <tr>
                            <td colSpan="2" >
                                <Link className="btn btn-dark " to="/home">Login</Link>
                            </td>
                        </tr>
                    </table>
                    
                 </from>
              
            </div>
            <img src='https://www.pngitem.com/pimgs/m/150-1503966_registered-user-add-friend-icon-png-transparent-png.png'  style={{position:"relative",textAlign:"right",width:"700px",height:"600px",margin:"2%"}}></img>
        </div>
    </div>
  )
}
