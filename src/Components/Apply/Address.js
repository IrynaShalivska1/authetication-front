import { useState } from "react";
import { useNavigate } from "react-router";
import { WHATS_YOUR_ADDRESS } from "../../content";

export default function Address () {
  const navigate = useNavigate();
  const [lived, setLived] = useState("");
  const [address, setAddress] = useState({});

  const next = (addressInfo) => {
    console.log(addressInfo)
    navigate("/apply/ssn-dob");
  };

  return (
    <div className="address mx-auto p-6">
      <h1 className="text-2xl font-semibold leading-7 mb-2">{WHATS_YOUR_ADDRESS}</h1>
      <div className="type-content flex flex-col items-center w-full">
        <div className="inputs w-full mb-6">
          <div className="address-input text-left mb-3">
            <label className="text-sm font-semibold mb-1">Address</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="text" name="Address" inputMode id="address" autoCapitalize="off"/>
            </div>
          </div>
          <div className="address-input text-left mb-3">
            <label className="text-sm font-semibold mb-1">City</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="text" name="City" inputMode id="city" autoCapitalize="off"/>
            </div>
          </div>
          <div className="flex justify-between items-cemter">
            <div className="address-input text-left mb-3 mr-2 w-1/2">
              <label className="text-sm font-semibold mb-1">State</label>
              <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
                <select id="state" name="State" className="text-lg py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full">
                  <option className="my-2" value="al">AL</option>
                  <option className="my-2" value="AK">AK</option>
                  <option className="my-2" value="AZ">AZ</option>
                  <option className="my-2" value="AR">AR</option>
                  <option className="my-2" value="al">CA</option>
                  <option className="my-2" value="AK">CT</option>
                  <option className="my-2" value="AZ">CO</option>
                  <option className="my-2" value="AR">DE</option>
                  <option className="my-2" value="al">DC</option>
                  <option className="my-2" value="AK">FL</option>
                  <option className="my-2" value="AZ">GA</option>
                  <option className="my-2" value="AR">HI</option>
                  <option className="my-2" value="al">ID</option>
                  <option className="my-2" value="AK">IL</option>
                  <option className="my-2" value="AZ">IN</option>
                  <option className="my-2" value="AR">IA</option>
                  <option className="my-2" value="al">KS</option>
                  <option className="my-2" value="AK">KY</option>
                  <option className="my-2" value="AZ">LA</option>
                  <option className="my-2" value="AR">ME</option>
                  <option className="my-2" value="al">MD</option>
                  <option className="my-2" value="AK">MI</option>
                  <option className="my-2" value="AZ">MA</option>
                  <option className="my-2" value="AR">MN</option>
                </select>
              </div>
            </div>
            <div className="address-input text-left mb-3 w-1/2">
              <label className="text-sm font-semibold mb-1">Zip</label>
              <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
                <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="text" name="City" inputMode id="city" autoCapitalize="off"/>
              </div>
            </div>
          </div>
          <div className="address-input text-left mb-3">
            <label className="text-sm font-semibold mb-1">Unit/Apt #</label>
            <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
              <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="text" name="City" inputMode id="city" autoCapitalize="off"/>
            </div>
          </div>
        </div>
        <div className="live-history w-full">
          <h3 className="mb-4">Have you lived here for 2+ years?</h3>
          <div className="flex items-center w-full">
            <div className="address-input text-left mb-3 w-1/2 mr-2">
              <button className={`flex justify-start items-center p-4 border focus:border-[#404cde] rounded-lg w-full`} onClick={()=>setLived(true)}>
                <input className="text-xl py-3 px-4 mr-4 focus:border-[#404cde] rounded-lg outline-none" checked={lived===true?true:false} type="radio" name="City" inputMode id="city" autoCapitalize="off"/>
                <label className="text-sm font-semibold mb-1">Yes</label>
              </button>
            </div>
            <div className="address-input text-left mb-3 w-1/2">
              <button className={`flex justify-start items-center p-4 border focus:border-[#404cde] rounded-lg w-full`} onClick={()=>setLived(false)}>
                <input className="text-xl py-3 px-4 mr-4 focus:border-[#404cde] rounded-lg outline-none" checked={lived===false?true:false} type="radio" name="City" inputMode id="city" autoCapitalize="off"/>
                <label className="text-sm font-semibold mb-1">No</label>
              </button>
            </div>
          </div>
        </div>
        {
          lived === false &&
            <div className="prior-input">
              <div className="inputs w-full mb-6">
                <div className="address-input text-left mb-3">
                  <label className="text-sm font-semibold mb-1">Prior Address</label>
                  <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
                    <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="text" name="Address" inputMode id="address" autoCapitalize="off"/>
                  </div>
                </div>
                <div className="address-input text-left mb-3">
                  <label className="text-sm font-semibold mb-1">City</label>
                  <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
                    <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="text" name="City" inputMode id="city" autoCapitalize="off"/>
                  </div>
                </div>
                <div className="flex justify-between items-cemter">
                  <div className="address-input text-left mb-3 mr-2 w-1/2">
                    <label className="text-sm font-semibold mb-1">State</label>
                    <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
                      <select id="state" name="State" className="text-lg py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full">
                        <option className="my-2" value="al">AL</option>
                        <option className="my-2" value="AK">AK</option>
                        <option className="my-2" value="AZ">AZ</option>
                        <option className="my-2" value="AR">AR</option>
                        <option className="my-2" value="al">CA</option>
                        <option className="my-2" value="AK">CT</option>
                        <option className="my-2" value="AZ">CO</option>
                        <option className="my-2" value="AR">DE</option>
                        <option className="my-2" value="al">DC</option>
                        <option className="my-2" value="AK">FL</option>
                        <option className="my-2" value="AZ">GA</option>
                        <option className="my-2" value="AR">HI</option>
                        <option className="my-2" value="al">ID</option>
                        <option className="my-2" value="AK">IL</option>
                        <option className="my-2" value="AZ">IN</option>
                        <option className="my-2" value="AR">IA</option>
                        <option className="my-2" value="al">KS</option>
                        <option className="my-2" value="AK">KY</option>
                        <option className="my-2" value="AZ">LA</option>
                        <option className="my-2" value="AR">ME</option>
                        <option className="my-2" value="al">MD</option>
                        <option className="my-2" value="AK">MI</option>
                        <option className="my-2" value="AZ">MA</option>
                        <option className="my-2" value="AR">MN</option>
                      </select>
                    </div>
                  </div>
                  <div className="address-input text-left mb-3 w-1/2">
                    <label className="text-sm font-semibold mb-1">Zip</label>
                    <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
                      <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="text" name="City" inputMode id="city" autoCapitalize="off"/>
                    </div>
                  </div>
                </div>
                <div className="address-input text-left mb-3">
                  <label className="text-sm font-semibold mb-1">Unit/Apt #</label>
                  <div className={`input-div border focus:border-[#404cde] rounded-lg`}>
                    <input className="text-xl py-3 px-4 focus:border-[#404cde] rounded-lg outline-none w-full" type="text" name="City" inputMode id="city" autoCapitalize="off"/>
                  </div>
                </div>
              </div>
            </div>
        }
        <button className="next-button w-full rounded-lg bg-[#404cde] hover:bg-[#5764ff] disabled:bg-[#5764ff] disabled:opacity-25 p-4 text-white font-semibold" onClick={()=>next(address)}>Next</button>
      </div>
    </div>
  );
}