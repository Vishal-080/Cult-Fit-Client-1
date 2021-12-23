import { useState } from "react";
import Modal from "react-modal";
import { Loginform } from "./Loginform";
import { Signupform } from "./Signupform";
import { Socialpage } from "./Socialpage";

import cross from "./images/cross.svg";
import google from "./images/google.svg";
import fb from "./images/fb.svg";

import "./Modal.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { LOGIN_FAILURE } from "../../../../Store/AuthStore/actionTypes";
import { Actions } from "../../../../Store/AuthStore/action";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const customStyles = {
  content: {
    width: "374px",
    height: "572px",
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fffff",
    borderRadius: "10px",
    zIndex: "200",
  },
};

export const ModalInFunctionalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [val, setVal] = useState(true);
  const [social, setSocial] = useState(true);
  const { isAuth } = useSelector(store => store.auth, shallowEqual)
  const [dropdown, setDropDown] = useState(false)
  const dispatch = useDispatch();
  const history = useHistory()

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
    setVal(true);
    setSocial(true);
  };

  const logoutuser = () => {
    setDropDown(false)
    dispatch(Actions(LOGIN_FAILURE, ""))
    localStorage.clear();
    history.push("/")
  }

  const profileclick = () => {
    setDropDown(false)
    history.push("/profile")
  }

  return val ? (
    <>
      {isAuth ? <>
        <img src="/workoutimages/drop.svg" className="downarrow" onClick={() => {
          setDropDown(!dropdown)
        }} />
        {dropdown ? <div className="dropdownmenu">
          <div onClick={profileclick}>
            <img src="https://static.cure.fit/assets/images/profile-icon.svg" />
            Profile
          </div>
          <div className="orders">
            <img src="https://static.cure.fit/assets/images/cart-black.svg" />
            Orders
          </div>
          <div>
            <img src="https://static.cure.fit/assets/images/health-profile-black.svg" />
            Medical Records
          </div>
          <div><img src="https://static.cure.fit/assets/images/combined-shape-black.svg" />
            Active Packs
          </div>
          <div>
            <img src="https://static.cure.fit/assets/images/coupon-black.svg" />
            Redeem Voucher
          </div>
          <div>
            <img src="https://static.cure.fit/assets/images/settings-black.svg" />
            Account
          </div>
          <div>
            <img src="https://static.cure.fit/assets/images/support-black.svg" />
            Support
          </div>
          <div onClick={logoutuser}>
            <img src="https://static.cure.fit/assets/images/logout-black.svg" />
            Logout
          </div>
        </div> : ""}
      </> : <button id="login-button" onClick={setModalIsOpenToTrue}>Login</button>}

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancelinlogin" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="cross-icon" />
        </button>
        <Loginform closeModal={setModalIsOpenToFalse} />
        <button
          id="page-one-social"
          onClick={() => {
            setVal(false);
            setSocial(true);
          }}
        >
          Continue with  &ensp;<img src={google} alt="google-icon" />&ensp;<img src={fb} alt="fb-icon" />
        </button>
        <div id="sign-up">
          Don’t have an account?
          <button
            onClick={() => {
              setVal(false);
              setSocial(false);
            }}
          >
            Sign up
          </button>
        </div>
      </Modal>
    </>
  ) : social ? (
    <>
      <button id="login-button" onClick={setModalIsOpenToTrue}>Login</button>

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancelinlogin" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="cross-icon" />
        </button>
        <Socialpage />
      </Modal>
    </>
  ) : (
    <>
      <button id="login-button" onClick={setModalIsOpenToTrue}>Login</button>

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancelinlogin" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="cross-icon" />
        </button>
        <Signupform />
        <button
          id="page-one-social"
          onClick={() => {
            setVal(false);
            setSocial(true);
          }}
          className="social-two"
        >
          Continue with&ensp;<img src={google} alt="google-icon" />&ensp;<img src={fb} alt="fb-icon" />
        </button>
      </Modal>
    </>
  );
};
