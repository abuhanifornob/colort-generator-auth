import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "../../styles/login.css";

const Login = () => {
  const provider=new GoogleAuthProvider();
  const {user,googleWithSinIn}=useContext(AuthContext);
  const [userInfo,setUserInf]=useState({
    email:"",
    password:""
  })
  const [error,setError]=useState({
    email:"",
    password:"",
  });


  const handleOnsubmit=(event)=>{
    event.prevetDefault();
    
  }
  const handleOnChangeEmail=(e)=>{
    
    setUserInf({...userInfo,email:e.target.value})
  }
  const handleOnChangePassword=(e)=>{
    const password=e.target.value;
    if(password.length<6){
      setError({...error,password:"Password Must Be length 7 "})
       setUserInf({...userInfo, password:e.target.value})
      // setUserInf({...userInfo, password:""})
    }
    else{
      setError({...error,password:""})
      setUserInf({...userInfo, password:e.target.value});
     
    }
   
  }
  console.log(error.password);


  const handleGoogleSignIn=()=>{
    googleWithSinIn(provider)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>console.error(error))

  }


  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form onSubmit={handleOnsubmit} className="login-form">
        <input type="text" placeholder="Your Email"
          value={userInfo.email}
           onChange={handleOnChangeEmail}
           />
        <input type="password" placeholder="password" 
        value={userInfo.password} 
        onChange={handleOnChangePassword}
         />
         {
          error.password && <p className="error-message">{error.password}</p>
         }
        <button>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Sign up first</Link>
        </p>
      </form>

      <button onClick={handleGoogleSignIn}>Google</button>
    </div>
  );
};

export default Login;
