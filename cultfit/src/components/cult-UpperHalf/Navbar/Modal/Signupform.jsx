import cultlogo from "./images/cultlogo.svg";

export const Signupform = () => {

    return (
        <div id="signupform">
           <img src={cultlogo} alt="cultlogo" id="logo" />
           <div id="namebar">
           <input type="text" placeholder="First Name" />
           <input type="text" placeholder="Last Name" />
           </div>
           <input type="email" placeholder="E-mail" />
           <input type="password" placeholder="Enter Password" />
           <input type="password" placeholder="Confirm Password" />
           <button>Continue</button>
           <div>
        By Continuing you agree to the{" "}
        <a href="/">Terms of Services and Privacy policy.</a>
      </div>
        </div>
    )
}