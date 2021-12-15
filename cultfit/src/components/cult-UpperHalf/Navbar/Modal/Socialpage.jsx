import cultlogo from "./images/cultlogo.svg";

export const Socialpage = () => {

    return (
        <div>
            <img src={cultlogo} alt="cult-logo" />
            <button>Sign in with Google</button>
            <button>Sign in with Facebook</button>
            <button>Sign in with Email</button>
        </div>
    )
}