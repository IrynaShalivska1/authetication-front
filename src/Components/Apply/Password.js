import { useState } from "react";
import { useNavigate } from "react-router";

export default function Password () {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const next = (password) => {
    console.log(password);
    
    navigate("/apply/ssn-dob");
  };

  return (
    <div className="password mx-auto p-6">
      <h1 className="text-2xl font-semibold leading-7 mb-2">Let's save your progress</h1>
      <h3 className="text-lg mb-4">Create a password to get access to your Flexline line of credit & V3 Valuation tool.</h3>
      <div className="type-content flex flex-col items-center w-full">
        <div className="inputs w-full mb-33">
          <div className="password-input text-left">
            <label className="font-semibold">Password</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="password" name="password" id="password" autoCapitalize="off" />
            </div>
          </div>
        </div>
        <div className="description w-full text-left p-3 mb-2">
          <p className="text-sm"> - 8 or more characters</p>
          <p className="text-sm"> - 1 lowercase letter</p>
          <p className="text-sm"> - 1 uppercase letter</p>
          <p className="text-sm"> - 1 number</p>
        </div>
        <button className="signin-button w-full rounded-lg bg-[#404cde] disabled:bg-[#5764ff] disabled:opacity-25 p-4 text-white font-semibold mb-7" onClick={()=>next(password)}>Next</button>
      </div>
    </div>
  );
}