import { useState } from "react";
import Modal from "react-modal";

import { PaymentOption } from "./PaymentOption";
import { Phonenumber } from "./Phonenumber";
import{Otp} from "./Otp";

import cross from "./images/cross.svg";

import "./payment.css";

const customStyles = {
  content: {
    width: "558px",
    height: "535px",
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fffff",
    borderRadius: "30px",
    boxShadow: "0px 4px 24px 2px rgba(0, 0, 0, 0.144)",
  },
};

export const ModalInFunctionalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [val, setVal] = useState(true);
  const [val2, setVal2] = useState(true);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
    setVal(true);
    setVal2(true);
  };

  const handleStatus = (boolean) => {
    setVal(boolean);
  };

  const handleStatus2 = (boolean) => {
    setVal(true)
    setVal2(boolean)
  };

  return (val===true && val2===true )? (
    <>
      <button id="loginbutton" onClick={setModalIsOpenToTrue}>
        PROCEED TO PAY
      </button>

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancel" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="close" />
        </button>
        <PaymentOption changeStatus={handleStatus} />
      </Modal>
    </>
  ) : (val===false && val2===true) ? (
    <>
      <button id="loginbutton" onClick={setModalIsOpenToTrue}>
        PROCEED TO PAY
      </button>

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancel" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="close" />
        </button>
        <Phonenumber changeStatus2 = {handleStatus2} />
      </Modal>
    </>
  ) :
  (
    <>
      <button id="loginbutton" onClick={setModalIsOpenToTrue}>
        PROCEED TO PAY
      </button>

      <Modal id="signin-render" style={customStyles} isOpen={modalIsOpen}>
        <button id="cancel" onClick={setModalIsOpenToFalse}>
          <img src={cross} alt="close" />
        </button>
        <Otp />
      </Modal>
    </>
  )
}
