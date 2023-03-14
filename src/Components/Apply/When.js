import { useState } from "react";
import { useNavigate } from "react-router";
import { A_FEW_WEEKS, A_MONTH, NOT_SURE_YET, NOW, WHEN_ARE_YOU_LOOKING_TO_BUY_OUT_YOUR_LEASE } from "../../content";

export default function When () {
  const navigate = useNavigate();
  const [choosed, setChoosed] = useState(0);
  
  const handleType = (selected) => {
    if (selected === 1) setChoosed(1);
    else if (selected === 2) setChoosed(2);
    else if (selected === 3) setChoosed(3);
    else if (selected === 4) setChoosed(4);
    navigate("/apply/email");
  };

  return (
    <div className="when mx-auto p-6">
      <h1 className="text-2xl font-semibold leading-7 mb-6">{WHEN_ARE_YOU_LOOKING_TO_BUY_OUT_YOUR_LEASE}</h1>
      <div className="type-content flex flex-col items-center w-full">
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(1)}>
          <div className="flex justify-center items-center h-8">
            {NOW}
          </div>
        </button >
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(2)}>
          <div className="flex justify-center items-center h-8">
            {A_FEW_WEEKS}
          </div>
        </button>
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(3)}>
          <div className="flex justify-center items-center h-8">
            {A_MONTH}
          </div>
        </button>
        <button className="text-sm leading-4 w-full py-3 mb-3 rounded-lg border border-[#cccccc] hover:border-[#404cde]" onClick={()=>handleType(4)}>
          <div className="flex justify-center items-center h-8">
            {NOT_SURE_YET}
          </div>
        </button>
      </div>
    </div>
  );
}