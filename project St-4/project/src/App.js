import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contacts';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import AddUser from './Components/Users/AddUser';
import EditUser from './Components/Users/EditUser';
import User from './Components/Users/User';
import Login from './Components/Pages/Login';
import Register from './Components/Users/Register';
import Develop from './Components/Layout/Develop';
function App() {
  return (
    <BrowserRouter>
        <div className="App">
         <Navbar/>
         <Routes>
              <Route exact path='/' element={<Login/>}/>
             <Route exact path='/Home' element={<Home/>}/>
             <Route exact path='/About' element={<About/>}/>
             <Route exact path='/Contact' element={<Contact/>}/>
             <Route exact path="/AddUser" element={<AddUser/>} />
             <Route exact path='/EditUser/:id' element={<EditUser/>}/>
             <Route exact path='/User/:id' element={<User/>}/>
             <Route exact path='/register' element={<Register/>}/>
         </Routes>
         <Develop/>
        </div>
        
    </BrowserRouter>

  );
}

export default App;
