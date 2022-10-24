import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import "../../styles/login.css";

const Login = () => {
  const provider=new GoogleAuthProvider();
  const {user,googleWithSinIn}=useContext(AuthContext);
  const handleGoogleSignIn=()=>{
    googleWithSinIn(provider)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>console.error(error))

  }

  console.log(user);
  return (
    <div className="login-container">
      <div className="login-title">
        Login
        <BiLogInCircle />
      </div>
      <form className="login-form">
        <input type="text" placeholder="Your Email" />
        <input type="password" placeholder="password" />
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
