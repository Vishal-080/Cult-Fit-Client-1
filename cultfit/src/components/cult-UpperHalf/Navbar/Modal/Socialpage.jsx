import cultlogo from "./images/cultlogo.svg";

import fbcolor from "./images/fbcolor.svg";
import googlecolor from "./images/googlecolor.svg";
import google from "./images/google.svg";

export const Socialpage = () => {

  const googleAuth = () => {
    localStorage.setItem("loginMethod","Fastlogin")
    window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/google`,'_self');
  }

  return (
    <div id="social-page">
      <img src={cultlogo} alt="cult-logo" id="logo" />
      <button id="buttonone" onClick={googleAuth}>
        <img src={googlecolor} alt="googlecolor-logo" /> Sign in Google
      </button>
      <button id="buttontwo">
        <img src={fbcolor} alt="fb-logo" />
        Sign in Facebook
      </button>
      <button id="buttonthree">
        <img src={google} alt="google-logo" />
        Sign in with Email
      </button>
    </div>
  );
};
