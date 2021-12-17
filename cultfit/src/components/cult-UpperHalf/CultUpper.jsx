import styled from "styled-components";
import topimg from "./images/topimg.png";
import offer1 from "./images/offer1.png";
import vidimg from "./images/vidimg.svg";
import tag from "./images/tag.svg";
import forward from "./images/forward.svg";
import timer from "./images/timer.svg";

export const CultUpper = () => {
  return (
    <div>
      <Adimg>
        <img src={topimg} alt="topimg" />
      </Adimg>
      <Offerimg>
        <img src={offer1} alt="offerimg" />
      </Offerimg>
      <Saletimer>
        <img id="img-one" src={timer} alt="timer" />
        <img id="img-two" src={forward} alt="forward-icon" />
      </Saletimer>
      <Freetrial>
        <div className="freetrial">Two Free Trials</div>
        <div className="freeclasses">Experience Cult classes for free</div>
        <div className="tickets">
          <div className="ind-tickets" id="ind-tickets-redeemed">
          <div className="rounded1"></div>
            <div>
            <h1>01</h1>
            <button>Redeemed</button>
            </div>
            <div className="rounded2"></div>
          </div>
          <div className="ind-tickets">
          <div className="rounded1"></div>
            <div>
            <h1>02</h1>
            <button>TRY FOR FREE</button>
            </div>
            <div className="rounded2"></div>
          </div>
        </div>
      </Freetrial>
      <VideoContainer>
        <div className="tag">See why we are the safest gym in town</div>
        <img src={vidimg} alt="vid-thumb" />
      </VideoContainer>
      <Elite>
        <div className="pass">
          <div>cultpass ELITE</div>
          <div>
            Unlimited access to all cult centers, gyms and live workouts
          </div>
          <div className="tag-two">
            <div className="line"> </div>
            ENJOY THE BENEFITS OF
            <div className="line"> </div>
          </div>
        </div>
        <div className="types">
          <div>Buy Now start anytime</div>
          <div>Pause pack anytime</div>
          <div>Safest gyms In Town</div>
          <div>No-Cost EMI available</div>
        </div>
        <div className="mini-heading">Choose Your Subscription</div>
        <div className="cards">
          <div>
            <Card1>
              <div>
                <strong>&ensp;10 Months</strong>
                <div>
                  <strike>₹45550</strike> &ensp; ₹16490
                </div>
              </div>
              <button>BUY</button>
            </Card1>
            <Card2>
              <div className="element">
                <img src={tag} alt="tag-icon" />
                <div>Only Today | FREE Myntra Voucher worth ₹1000</div>
              </div>
            </Card2>
          </div>
          <div>
            <Card1>
              <div>
                <strong>&ensp;10 Months</strong>
                <div>
                  <strike>₹45550</strike> &ensp; ₹16490
                </div>
              </div>
              <button>BUY</button>
            </Card1>
            <Card2>
              <div className="element">
                <img src={tag} alt="tag-icon" />
                <div>Only Today | FREE Myntra Voucher worth ₹1000</div>
              </div>
            </Card2>
          </div>
          <div>
            <Card1>
              <div>
                <strong>&ensp;10 Months</strong>
                <div>
                  <strike>₹45550</strike> &ensp; ₹16490
                </div>
              </div>
              <button>BUY</button>
            </Card1>
            <Card2>
              <div className="element">
                <img src={tag} alt="tag-icon" />
                <div>Only Today | FREE Myntra Voucher worth ₹1000</div>
              </div>
            </Card2>
          </div>
        </div>
      </Elite>
    </div>
  );
};

//custom styled-components
//1. top image just below the navbar
const Adimg = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 65px;
`;
//2. offer(extra 1 month extension)
const Offerimg = styled.div`
  width: 1200px;
  height: 92px;
  margin: 152px auto;
  margin-bottom: 0px;

  img {
    width: 100%;
    height: 100%;
  }
`;
//3.timer divison
const Saletimer = styled.div`
  width: 1200px;
  height: 92px;
  margin: 0px auto;
  background-color: #ececec;

  display: flex;

  #img-one {
    width: 139px;
    height: 47px;
    margin-top: 25px;
    margin-left: 550px;
  }
  #img-two {
    width: 60px;
    height: 47px;
    margin-top: 25px;
    margin-left: 450px;
  }
`;
//4.free-trial div(till tickets)
const Freetrial = styled.div`
  width: 588px;
  height: 200px;
  margin-top: 77px;
  margin-left: 120px;
  /* background: #80808037; */

  .freetrial {
    width: 260px;
    height: 30px;
    text-align: left;
    font-size: 24px;
    font-family: Brandon Text;
    font-style: normal;
    font-weight: bold;
    line-height: 30px;
  }
  .freeclasses {
    width: 219px;
    height: 20px;
    margin-top: 19px;
    text-align: left;
    color: #a2a2a2;

    font-family: Brandon Text;
    font-style: normal;
    font-weight: 390;
    font-size: 16px;
    line-height: 20px;
  }
  .tickets {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    color:white;

    .ind-tickets{
        display:flex;
    }

  }
  .tickets div {
    width: 282px;
    height: 100px;
    background-color:#414152;
    text-align:center;
    .rounded1{
        height: 30px;
        width: 30px;
        margin-top:35px;
        margin-left:-15px;
        border-radius:15px;
        background-color:white;
        /* z-index:1; */
    }
    .rounded2{
        height: 30px;
        width: 30px;
        margin-top:35px;
        margin-right:-15px;
        border-radius:15px;
        background-color:white;
        /* z-index:1; */
    }
  }

  #ind-tickets-redeemed {
      background-color:#a1a1b48f !important;
      button{
        color: black;
        background:transparent;
      }
      div{
        background:transparent;
      }
      .rounded1{
        height: 30px;
        width: 30px;
        margin-top:35px;
        margin-left:-15px;
        border-radius:15px;
        background-color:white;
        /* z-index:1; */
    }
    .rounded2{
        height: 30px;
        width: 30px;
        margin-top:35px;
        margin-right:-15px;
        border-radius:15px;
        background-color:white;
        /* z-index:1; */
    }
    }

  button {
    width: 169px;
    height: 38px;
    background: #ff3278;
    border-radius: 34px;
    color: white;
    border: none;

    font-family: Brandon Text;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
  }
`;

//5.Video container
const VideoContainer = styled.div`
  width: 100%;
  height: inherit;
  margin-top: 144px;

  .tag {
    margin-left: 120px;
    text-align: left;
    font-family: Brandon Text;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
  }
  img {
    margin-top: 23px;
    width: 100%;
    height: 100%;
  }
`;

//6.elite section
const Elite = styled.div`
  height: 492px;
  width: 100%;
  background-color: #888e9e;
  margin-top: 75px;

  .pass {
    padding-top: 31px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    text-align: center;

    .tag-two {
      display: flex;
      flex-direction: row;
      justify-content: center;
      /* margin-top:20px; */
    }

    .line {
      width: 233px;
      height: 2px;
      margin-top: 10px;
      border-radius: 1px;
      background-color: #ffffff;
    }
  }
  .pass * {
    margin-top: 20px;
  }
  .types {
    color: #ffffff;
    width: 888px;
    height: 22px;
    display: flex;
    margin: 47px auto;
    justify-content: space-between;
  }
  .mini-heading {
    width: 180px;
    height: 22px;
    color: #ffffff;
    margin: 60px auto;
    margin-bottom: 26px;
  }

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
    margin: 0px auto;
  }
`;

const Card1 = styled.div`
  width: 384px;
  height: 66px;
  background: #ffffff;
  border-radius: 6px;
  border-bottom: 0.4px dotted black;
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  * {
    text-align: left;
  }
  div {
    padding-top: 5px;
    padding-left: 5px;
  }
  button {
    width: 60px;
    border: none;
    background: #ffffff;
    color: #ff3278;
    font-weight: 700;
    border-radius: 6px;
  }
`;
const Card2 = styled.div`
  width: 384px;
  height: 40px;
  background: #ffffff;
  border-radius: 6px;
  border-top: 0.4px dotted black;
  margin-top: 0px;
  text-align: center;

  .element {
    width: 280px;
    height: 20px;
    margin-top: 8px;
    margin-left: 54px;
    display: flex;

    font-family: Brandon Text;
    font-style: normal;
    font-weight: 390;
    font-size: 12px;
    line-height: 20px;

    img{
      width:15px;
      height:15px;
      margin-top: 2px;
    }
  }
`;
