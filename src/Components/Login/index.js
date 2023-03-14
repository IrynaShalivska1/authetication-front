import { useState } from "react";
import { useNavigate } from "react-router";
import {BiUserPlus} from "react-icons/bi";
import logo from '../../assets/images/logo.png';

export default function Login() {
  const navigate = useNavigate();
  const [focus, setFocus] = useState("");

  const signin = (data) => {
    console.log(data);
  };

  const handleFocus = (flag) => {
    console.log("handlefocus")
    if (flag === "email") setFocus("email");
    else if (flag === "password") setFocus("password");
  };

  return (
    <div className="signin">
      <header className="App-header p-3">
        <button className='logo-button h-16' onClick={()=> navigate("/")}>
          <img src={logo} alt="Logo" className="h-full" />
        </button>
        <div className='progress'>
          <div className='progress-bar'>
          </div>
        </div>
      </header>
      <div className="signin-form flex flex-col items-center mx-auto mt-6 px-6 pb-6">
        <h1 className="text-3xl font-semibold mb-6 text-center">Member Sign In</h1>
        <div className="inputs w-full mb-4">
          <div className="email-input">
            <label>Email</label>
            <div className={`input-div${focus === "email" ? " focus" : ""}`}>
              <input type="email" name="email" id="email" autoCapitalize="off" onFocus={() => handleFocus("email")} />
            </div>
          </div>
          <div className="password-input">
            <label>Password</label>
            <div className={`input-div${focus === "password" ? " focus" : ""}`}>
              <input type="password" name="password" id="password" autoCapitalize="off" onFocus={() => handleFocus("password")} />
            </div>
          </div>
        </div>
        <div className="forgot w-full text-left mb-8">
          <button className="forgot-button" onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
        </div>
        <button className="signin-button w-full rounded-lg p-4 text-white font-semibold mb-7" onClick={signin}>Sign In</button>
        <div className="signup">
          <button className="flex items-center text-base text-[#404cde]" onClick={() => navigate('/apply')}>
            <BiUserPlus className="mr-2" style={{"color": "#404cde", "fontSize": "24px"}}/>
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
}