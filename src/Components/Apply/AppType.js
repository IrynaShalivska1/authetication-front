import { useState } from "react";
import {GrCircleInformation} from "react-icons/gr";
import { useNavigate } from "react-router";
import { IM_APPLYING_FOR_BUSINESS_OR_LLC, JUST_ME, WHO_WILL_BE_APPLYING } from "../../content";

export default function AppType () {
  const navigate = useNavigate();
  const [choosed, setChoosed] = useState(0);
  
  const handleType = (selected) => {
    if (selected === 1) setChoosed(1); // 
    else if (selected === 2) setChoosed(2); // 
    navigate("/apply/what");
  };

  return (
    <div className="app-type mx-auto p-6">
      <h1 className="text-2xl font-medium leading-7 mb-6">{WHO_WILL_BE_APPLYING}</h1>
      <div className="type-content flex flex-col items-center w-full">
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(1)}>
          <div className="flex justify-center items-center h-8">{JUST_ME}</div>
        </button >
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(2)}>
          <div className="flex justify-center items-center h-8">{IM_APPLYING_FOR_BUSINESS_OR_LLC}</div>
        </button>
      </div>
      <div className="type-description flex justify-between p-4 bg-[#eaf1ff] rounded-lg my-4">
        <GrCircleInformation className="text-3xl mr-1 h-full" />
        <p className="text-sm m-0">The Carputty Flexline™ is ideal for individuals and businesses with good-to-excellent credit</p>
      </div>
    </div>
  );
}