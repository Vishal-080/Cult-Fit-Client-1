

import "./payment.css"

import debit from "./images/debit.svg";
import paytm from "./images/Paytm.svg";
import amazonpay from "./images/amazonpay.svg";
import bajaj from "./images/bajaj.svg";
import bank from "./images/bank.svg";
import wallet from "./images/wallet.svg";


export const PaymentOption = ({changeStatus}) => {

    const handleStatus = () =>{
        changeStatus(false)
    }


  return (
    <div id="payment-options">
      <div id="heading">Payment Options</div>
      <div id="offer">
        <div id="dummy-two">
          <div id="tagone">6 Months cultpass ELITE</div>
          <div id="tagtwo">Incl. of all taxes</div>
        </div>
        <div id="cost">₹450.00</div>
      </div>
      <div className="payment">
        <img src={debit} alt="debit-card" /> 
        <div id="dummy-info">
          <div id="tagthree">Credit/Debit Card Offer</div>
          <div id="tagfour">Click here to avail No Cost EMI on HDFC, Axis, ICICI, Yes Bank</div>
        </div>
      </div>
      <div className="payment">
        <img src={paytm} alt="paytm-card" /> 
        <button className="paytmpayment" onClick={handleStatus}>Link Account</button>
      </div>
      <div className="payment">
        <img src={amazonpay} alt="amazonpay-card" /> 
        <button>Amazon Pay</button>
      </div>
      <div className="payment">
        <img src={bajaj} alt="bajaj-card" /> 
        <button>Bajaj Finserv</button>
      </div>
      <div className="payment">
        <img src={bank} alt="bank-card" /> 
        <button>Net Banking</button>
      </div>
      <div className="payment">
        <img src={wallet} alt="wallet-card" /> 
        <button>Online Wallet</button>
      </div>

    </div>
  );
};
