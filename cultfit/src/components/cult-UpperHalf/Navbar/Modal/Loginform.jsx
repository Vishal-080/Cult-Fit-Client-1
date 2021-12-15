import cultlogo from "./images/cultlogo.svg";

import "./Modal.css"

export const Loginform = () => {
  return (
    <div id="loginform">
      <img src={cultlogo} alt="cult-logo" id="logo" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Continue</button>
      <div>
        By Continuing you agree to the{" "}
        <a href="/">Terms of Services and Privacy policy.</a>
      </div>
    </div>
  );
};
