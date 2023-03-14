import { useState } from "react";
import { useNavigate } from "react-router";
import {MdLogin} from "react-icons/md";
import { WHATS_YOUR_EMAIL } from "../../content";

export default function Email () {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const next = (email) => {
    console.log(email);
    
    navigate("/apply/phone");
  };

  return (
    <div className="email mx-auto p-6">
      <h1 className="text-2xl font-semibold leading-7 mb-6">{WHATS_YOUR_EMAIL}</h1>
      <div className="type-content flex flex-col items-center w-full">
        <div className="inputs w-full mb-6">
          <div className="email-input text-left">
            <label className="font-semibold">Email</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="email" name="email" id="email" autoCapitalize="off" />
            </div>
          </div>
        </div>
        <button className="signin-button w-full rounded-lg bg-[#404cde] disabled:bg-[#5764ff] disabled:opacity-25 p-4 text-white font-semibold mb-7" onClick={()=>next(email)}>Next</button>
        <div className="signup">
          <button className="flex items-center text-lg text-[#404cde]" onClick={()=>navigate("/signin")}>
            <MdLogin className="mr-2" style={{"color": "#404cde", "fontSize": "28px"}}/>
            Already a member? Log in
          </button>
        </div>
      </div>
    </div>
  );
}