import { useState } from "react";

import "./payment.css";

export const Phonenumber = ({changeStatus2}) => {
  const [num, setNum] = useState("");

  const handleStatus = () =>{
    changeStatus2(false)
}


    if (num.length === 10) {
      document.getElementById("btn").style.visibility = "visible";
    } 
 

  return (
    <div id="body-phone">
      <div id="heading-phone">Paytm Wallet</div>
      <div id="enter">
        Enter the phone number connected with your paytm wallet
      </div>
      <div id="enter-number">
        +91{" "}
        <input
          type="text"
          maxlength="10"
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <div id="info">This is a one time process only</div>
      <button id="btn" onClick={handleStatus}>SEND OTP</button>
    </div>
  );
};
