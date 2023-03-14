import { useState } from "react";
import { useNavigate } from "react-router";
import {MdOutlineSecurity} from "react-icons/md";
import { WHATS_YOUR_LEGAL_NAME } from "../../content";

export default function Name () {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");

  const next = (name) => {
    console.log(name)
    navigate("/apply/address");
  };

  return (
    <div className="name mx-auto p-6">
      <h1 className="text-2xl font-semibold leading-7 mb-2">{WHATS_YOUR_LEGAL_NAME}</h1>
      <h3 className="text-lg font-normal leading-7 mb-6">Please enter your name as it appears on your driver’s license</h3>
      <div className="type-content flex flex-col items-center w-full">
        <div className="inputs w-full mb-6">
          <div className="name-input text-left mb-3">
            <label className="text-sm font-semibold mb-1">First Name (Legal)</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input 
                className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" 
                type="text" 
                name="First Name"
                inputMode 
                id="firstname"
                autoCapitalize="off" 
              />
            </div>
          </div>
          <div className="name-input text-left mb-3">
            <label className="text-sm font-semibold mb-1">Last Name (Legal)</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input 
                className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" 
                type="text" 
                name="Last Name"
                inputMode 
                id="lastname"
                autoCapitalize="off" 
              />
            </div>
          </div>
        </div>
        <button className="next-button w-full rounded-lg bg-[#404cde] hover:bg-[#5764ff] disabled:bg-[#5764ff] disabled:opacity-25 p-4 text-white font-semibold" onClick={()=>next(fullname)}>Next</button>
      </div>
    </div>
  );
}