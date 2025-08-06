import React, { useState } from "react";

const Login = () => { 
  const   [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('')
  function signInHandler(){
    if(email == "ruban8801@gamil.com" && password ==="123"){
      setMessage("Loading...")
      setTimeout(()=>{
        setMessage("Successfully Loggedin")

      },3000)
    }else{
      setMessage("Loading...")
      setTimeout(()=>{
        setMessage("Invaild Credentaials")

      },3000)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="text" name="" id="" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" name="" id="" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signInHandler}>Signin</button>
      
      {message && <p>{message}</p> }
    </div>
    
  )
};

export default Login;
