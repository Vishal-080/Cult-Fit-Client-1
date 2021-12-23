import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Actions } from "../../../../Store/AuthStore/action";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../../../../Store/AuthStore/actionTypes";
import cultlogo from "./images/cultlogo.svg";

import "./Modal.css"

export const Loginform = ({closeModal}) => {
  
  const history = useHistory();
  const [signuperror,setSignUpError] = useState(false)
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const handlechange = (e) => {

    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    })
  }

  const emptyData = () => {
    setUserData({
      email: "",
      password: ""
    })

  }

  const login = () => {

    if (!userData.email || !userData.password) {
      return
    }

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, userData)
      .then(res => {
        setSignUpError(false)
        emptyData()
        closeModal()
        dispatch(Actions(LOGIN_SUCCESS, res.data.user))
        history.push("/");
      }).catch(function (e) {
        setSignUpError(true)
        emptyData()
        dispatch(Actions(LOGIN_FAILURE, ""))
        console.error("e", e.response);
      })
  }



  return (
    <div id="loginform">
      <img src={cultlogo} alt="cult-logo" id="logo" />
      <input value={userData.email} type="email" name="email" onChange={handlechange} placeholder="Email" />
      <input value={userData.password} type="password" name="password" onChange={handlechange} placeholder="Password" />
      {signuperror?<p className="loginP">Invalid email or password</p>:""}
      <button onClick={login} style={{background:userData.password.length>0?"linear-gradient(90deg, #FF3278 0%, #F74432 100%)":""}}>Continue</button>
      <div>
        By Continuing you agree to the{" "}
        <a href="/">Terms of Services and Privacy policy.</a>
      </div>
    </div>
  );
};


//style={{background: "#c9c9c9"}}