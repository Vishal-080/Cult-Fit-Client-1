import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import cultlogo from "./images/cultlogo.svg";

export const Signupform = () => {

  const history = useHistory();

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    trials:1
  })

  const [signuperror, setSignUpError] = useState(false)


  const handlechange = (e) => {

    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const emptyData = () => {
    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    })
  }

  const normalSignUp = () => {

    if (!userData.firstname || !userData.lastname || !userData.email || !userData.password) {
      return
    }

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, userData)
      .then(res => {
        setSignUpError(false)
        emptyData()
        history.push("/");
        alert("Kindly click on login")
      }).catch(function (e) {
        setSignUpError(true)
        emptyData()
        console.error("e", e.response);
      })
  }


  return (
    <div id="signupform">
      <img src={cultlogo} alt="cultlogo" id="logo" />
      <div id="namebar">
        <input value={userData.firstname} name="firstname" onChange={handlechange} type="text" placeholder="First Name" />
        <input value={userData.lastname} name="lastname" onChange={handlechange} type="text" placeholder="Last Name" />
      </div>
      <input value={userData.email} name="email" onChange={handlechange} type="email" placeholder="E-mail" />
      <input value={userData.password} name="password" onChange={handlechange} type="password" placeholder="*******" />
      <input value={userData.password} type="password" placeholder="Confirm Password" />

      {signuperror ? <p className="AlreadyRegister">Already registered, please go to login</p> : ""}

      <button onClick={normalSignUp}>Continue</button>
      <div>
        By Continuing you agree to the{" "}
        <a href="/">Terms of Services and Privacy policy.</a>
      </div>
    </div>
  )
}