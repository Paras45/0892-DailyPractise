import React from 'react'
import {Link,NavLink} from "react-router-dom";
export default function Navbar() {
    const myfun=e=>{
        alert("Please login to access Home page.");
    };
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <Link to="/Home" style={{display:"none"}} id="logo">
                            <header className="App-header">
                                <img src="https://cdn3.vectorstock.com/i/1000x1000/33/22/royal-logo-template-hotel-vector-5963322.jpg" className="App-logo" alt="logo" id="img"width={"100px"}/>
                            </header>
                        </Link>
                    </li>
                    <li>
                        <div onClick={e=>myfun(e)}>
                            <header className="App-header" id={"logo2"}>
                                <img src="https://cdn3.vectorstock.com/i/1000x1000/33/22/royal-logo-template-hotel-vector-5963322.jpg"  id="img1"width={"100px"}/>
                            </header>
                        </div>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/Home" id="homeBtn" style={{display:"none",fontSize:"22px"}}className='nav-link'>Home</NavLink>
                    </li>
                    <li class="nav-item">
                         <NavLink to="/customer" id="Cust" style={{display:"none",fontSize:"22px"}}className='nav-link'>Guests</NavLink>
                    </li>
                    <li class="nav-item">
                         <NavLink to="/employee" id="Empl" style={{display:"none",fontSize:"22px"}}className='nav-link'>Employee</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/About"style={{fontSize:"22px"}} className='nav-link'>About</NavLink>
                    </li>                    
                    <li class="nav-item">
                         <NavLink to="/Contact" style={{fontSize:"22px"}}className='nav-link'>Contact</NavLink>
                    </li>
                    
                    
                </ul>
                <Link to="/" className='btn btn-outline-light m-2' id="loginBtn">Login</Link>
            </div>
            
        </nav>
    </div>
  )
}
