import cultlogo from "./images/cultlogo.svg";

export const Signupform = () => {

    return (
        <div>
           <img src={cultlogo} alt="cultlogo" />
           <input type="text" placeholder="First Name" />
           <input type="text" placeholder="Last Name" />
           <input type="email" placeholder="E-mail" />
           <input type="password" placeholder="Enter Password" />
           <input type="password" placeholder="Confirm Password" />
           <button>Continue</button>
        </div>
    )
}