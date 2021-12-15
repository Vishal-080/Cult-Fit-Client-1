
import "./payment.css";

export const Otp = () => {
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
        <button id="btn-2">CONFIRM</button>
      </div>
    </div>
  );
};
