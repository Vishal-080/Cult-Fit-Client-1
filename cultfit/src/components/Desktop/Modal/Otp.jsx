
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./payment.css";

export const Otp = () => {

  const history = useHistory();

  const DoBooking = () => {

    const bookingdetails= JSON.parse(localStorage.getItem('bookingdetails'));

    axios
        .post("http://localhost:7765/bookings", bookingdetails)
        .then(res => {
            console.log("data", res.data)
            history.push("/bookingdetails")
        })
        .catch(err => {
            console.log("Not properly authenticated!");
            console.log("Error", err);
        })
}


  return (
    <div>
      <div id="body-phone">
        <div id="heading-phone">Paytm Wallet</div>
        <div id="enter">Enter the 6-digit code sent to your Number </div>
        <div id="enter-number">
          <input id="otp"
            type="text"
            maxlength="6"
          />
        </div>
        <div id="info">Haven't recieved the OTP</div>
        <a>resend OTP</a>
        <button id="btn-2" onClick={DoBooking}>CONFIRM</button>
      </div>
    </div>
  );
};
