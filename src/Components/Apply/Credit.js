import { useState } from "react";
import {GrCircleInformation} from "react-icons/gr";
import { useNavigate } from "react-router";

export default function Credit () {
  const navigate = useNavigate();
  const [choosed, setChoosed] = useState(0);
  
  const onCheck = () => {
    navigate("/apply/general-denial");
  };

  return (
    <div className="credit mx-auto p-6">
      <h1 className="text-2xl font-bold leading-7 mb-8">Congrats!<br />Your credit score meets our requirements.</h1>
      <div className="type-content flex flex-col items-center w-full">
        <div className="mb-6">
          <p className="text-lg">You could quality for anywhere from:</p>
          <div className="flex justify-center items-start"><p>$</p><h4 className="text-xl font-bold">25,000</h4><p> to $</p><h4 className="text-xl font-bold">800,000</h4></div>
        </div>
        <div className="mb-6">
          <p className="text-lg">For these low rates:</p>
          <div className="flex justify-center items-start"><h4 className="text-xl font-bold">12.14</h4><p>% to </p><h4 className="text-xl font-bold">13.64</h4><p>%</p></div>
        </div>
        <p className="text-lg mb-4">Let's check and see what your pre-approval amount is.</p>
      </div>
      <button className="flex justify-center p-4 w-full bg-[#404cde] hover:bg-[#5764ff] disabled:bg-[#5764ff] disabled:opacity-25 text-white text-center rounded-lg my-4" onClick={onCheck}>
        <p className="m-0 font-semibold">Check My Pre-Approval Amount</p>
      </button>
    </div>
  );
}