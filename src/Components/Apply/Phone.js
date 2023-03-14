import { useState } from "react";
import { useNavigate } from "react-router";
import {MdOutlineSecurity} from "react-icons/md";
import { WHATS_YOUR_PHONE_NUMBER } from "../../content";

export default function Phone () {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const next = (email) => {
    console.log(email);
    
    navigate("/apply/name");
  };

  return (
    <div className="phone mx-auto p-6">
      <h1 className="text-2xl font-semibold leading-7 mb-6">{WHATS_YOUR_PHONE_NUMBER}</h1>
      <div className="type-content flex flex-col items-center w-full">
        <div className="inputs w-full mb-6">
          <div className="email-input text-left">
            <label className="font-semibold mb-1">Phone Number</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input 
                className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" 
                type="tel" 
                name="phone"
                inputMode 
                id="phone"
                pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$" 
                autoCapitalize="off" 
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <MdOutlineSecurity className="mr-2 text-[#02d2ad]" style={{"fontSize": "28px"}}/>
          <p className="text-left text-sm">We'll only call or text you regarding your application or transactions.</p>          
        </div>
        <button className="next-button w-full rounded-lg bg-[#404cde] disabled:bg-[#5764ff] disabled:opacity-25 p-4 text-white font-semibold" onClick={()=>next(phone)}>Next</button>
      </div>
    </div>
  );
}