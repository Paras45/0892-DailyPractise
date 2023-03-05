import React from 'react'
import {Link,NavLink} from "react-router-dom";
export default function Navbar() {
    
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <Link to="/Home" id="logo">
                            <header className="App-header">
                                <img src="https://m.media-amazon.com/images/I/51qWyALRoPL.jpg" className="App-logo" alt="logo" id="img"/>
                            </header>
                        </Link>
                    </li>
                    
                    <li class="nav-item">
                        <NavLink to="/Home" id="homeBtn" className='nav-link'><b>Home</b></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/About" className='nav-link'><b>About</b></NavLink>
                    </li>                    
                    <li class="nav-item">
                         <NavLink to="/Contact" className='nav-link'><b>Contact</b></NavLink>
                    </li>
                    
                </ul>
                <Link to="/" className='btn btn-outline-light m-2' id="loginBtn"><b>Login</b></Link>
                <Link to="/AddUser" className='btn btn-outline-light ' id="Sign UpBtn" ><b>Sign Up</b></Link>
            </div>
            
        </nav>
    </div>
  )
}
