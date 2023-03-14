import { useState } from "react";
import {GrCircleInformation} from "react-icons/gr";
import { useNavigate } from "react-router";
import { BUY_A_NEW_OR_USED_VEHICLE, BUY_OUT_THE_LEASE_ON_MY_VEHICLE, GET_A_VALUATION_FOR_MY_VEHICLE, REFI_MY_CURRENT_AUTO_LOAN, WHAT_ARE_YOU_LOOKING_TO_DO } from "../../content";

export default function What () {
  const navigate = useNavigate();
  const [choosed, setChoosed] = useState(0);
  
  const handleType = (selected) => {
    if (selected === 1) setChoosed(1);
    else if (selected === 2) setChoosed(2);
    else if (selected === 3) setChoosed(3);
    else if (selected === 4) setChoosed(4);
    navigate("/apply/when");
  };

  return (
    <div className="what mx-auto p-6">
      <h1 className="text-2xl font-semibold leading-7 mb-6">{WHAT_ARE_YOU_LOOKING_TO_DO}</h1>
      <div className="type-content flex flex-col items-center w-full">
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(1)}>
          <div className="flex justify-center items-center h-8">{BUY_A_NEW_OR_USED_VEHICLE}</div>
        </button >
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(2)}>
          <div className="flex justify-center items-center h-8">
            {REFI_MY_CURRENT_AUTO_LOAN}
          </div>
        </button>
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(3)}>
          <div className="flex justify-center items-center h-8">
            {BUY_OUT_THE_LEASE_ON_MY_VEHICLE}
          </div>
        </button>
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(4)}>
          <div className="flex justify-center items-center h-8">
            {GET_A_VALUATION_FOR_MY_VEHICLE}
          </div>
        </button>
      </div>
    </div>
  );
}