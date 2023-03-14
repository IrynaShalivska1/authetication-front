import { useState } from "react";
import { useNavigate } from "react-router";
import {MdOutlineSecurity} from "react-icons/md";
import {GrCircleInformation} from "react-icons/gr";

export default function SSN () {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const next = (data) => {
    console.log(data);
    
    navigate("/apply/credit");
  };

  return (
    <div className="ssn mx-auto p-6">
      <h1 className="text-2xl font-semibold leading-7 mb-6">Here's what we'll need for the soft credit pull:</h1>
      <div className="type-content flex flex-col items-center w-full">
        <div className="inputs w-full mb-33">
          <div className="password-input text-left mb-3">
            <label className="text-sm font-normal">SSN</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="password" name="password" id="password" autoCapitalize="off" />
            </div>
          </div>
          <div className="date-input text-left mb-3">
            <label className="text-sm font-normal">Date of Birth</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="date" name="password" id="password" autoCapitalize="off" />
            </div>
            <span className="text-sm mx-1">MM/DD/YYYY</span>
          </div>
        </div>
        <label className="privacy flex justify-between items-start mb-4">
          <div className="mr-2 my-1"><input type="checkbox" id="privacy" name="privacy" className="privacy-checkbox" onChange={()=>setChecked(!checked)}/></div>
          <p className="text-sm text-left">I authorize Carputty to verify my credit. I've also read and agreed to Carputty's Terms of Use, Privacy Policy, and Agreement to Authorize Credit</p>
        </label>
        <button className="flex justify-center items-center w-full rounded-lg bg-[#404cde] disabled:bg-[#5764ff] disabled:opacity-25 p-4 text-white font-semibold mb-7" disabled={checked===true?false:true} onClick={()=>next(checked)}>
          <MdOutlineSecurity className="mr-2 text-[#02d2ad]" style={{"fontSize": "28px"}} />
          Securely Check My Score
        </button>
        <div className="type-description flex justify-between p-4 bg-[#eaf1ff] rounded-lg my-4">
          <GrCircleInformation className="text-6xl mr-1 h-full" />
          <p className="text-left text-sm m-0">Carputty considers multiple factors when approving an application, and while a credit score of 680 or higher is favorable, it is not a guarantee of getting approved for a Flexline™.</p>
        </div>
      </div>
    </div>
  );
}