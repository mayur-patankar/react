import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Mycomponent/>
    </div>
  );
}

function Mycomponent () 
{
  const Register = "Register";
  const [username, setUsername] = useState([]);
  const usernamedata = (e) => {
    setUsername(e.target.value);
  }  

  
  const registerUser = () => {
      // alert(`${username} ${password} ${email} ${mobile}`);
      // TODO  MAKE AJAX CALL
      // THERE IS NO DOM
      if (username == "") {
        console.log("register")
        return;
      }
    }      


    return (
    <div className='bg-danger'>
      <input type="text" placeholder="Enter username" onChange={usernamedata} value={username} />
      <input className='danger' color='danger' type="button" onClick={registerUser} value={Register} className='button'/>
      
    </div>
  )
}