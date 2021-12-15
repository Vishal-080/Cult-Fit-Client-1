import cultlogo from "./images/cultlogo.svg";

import fbcolor from "./images/fbcolor.svg";
import googlecolor from "./images/googlecolor.svg";
import google from "./images/google.svg";

export const Socialpage = () => {
  return (
    <div id="social-page">
      <img src={cultlogo} alt="cult-logo" id="logo" />
      <button id="buttonone">
        <img src={googlecolor} alt="googlecolor-logo" /> Sign in with Google
      </button>
      <button id="buttontwo">
        <img src={fbcolor} alt="fb-logo" />
        Sign in with Facebook
      </button>
      <button id="buttonthree">
        <img src={google} alt="google-logo" />
        Sign in with Email
      </button>
    </div>
  );
};
