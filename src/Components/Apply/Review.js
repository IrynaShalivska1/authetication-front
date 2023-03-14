import { useState } from "react";
import {BsQuestionCircle} from "react-icons/bs";
import { useNavigate } from "react-router";
import EmailLogo from "../../assets/images/mail.png";
import NumLogo from "../../assets/images/num.png";

export default function Review () {
  const navigate = useNavigate();
  const [choosed, setChoosed] = useState(0);
  
  const next = (selected) => {
    console.log(selected);
    navigate("/dashboard");
  };

  return (
    <div className="review mx-auto p-6">
      <div className="email-logo relative">
        <img className="mx-auto my-4" src={EmailLogo} alt="email"/>
        <img className="absolute top-0 right-[40%]" src={NumLogo} alt="Number" />
      </div>
      <h1 className="text-2xl font-semibold leading-7 mb-4">We’re unable to offer you a Carputty line of credit at this time.</h1>
      <h3 className="text-xl font-medium leading-7 mb-8">For further details about the decision, please review the letter we emailed you.</h3>
      <h5 className="text-sm mb-2">While the timing didn’t work out for now, we’d still love to have you in our community and invite you to reapply again in the future.</h5>
      <h5 className="text-sm mb-2">You’re still able to use your valuation tool. See the current valuation and future depreciation of your vehicles.</h5>
      <button className="flex justify-center items-center w-full rounded-lg bg-[#ecedfa] text-[#424cd6] disabled:bg-[#5764ff] disabled:opacity-25 p-4 font-semibold mb-7" onClick={()=>next(choosed)}>
        Get Vehicle Valuations
      </button>
      <button className="flex justify-center items-center mx-auto text-[#404cde]" onClick={()=>navigate("/contact")}>
        <BsQuestionCircle className="text-xl mr-2" />Need help? Click here to contact us.
      </button>
    </div>
  );
}