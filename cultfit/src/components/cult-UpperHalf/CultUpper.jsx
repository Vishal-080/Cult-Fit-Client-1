import styled from "styled-components";

import topimg from "./images/topimg.png";
import offer1 from "./images/offer1.png";

export const CultUpper = () => {
  return (
    <div>
      <Adimg>
        <img src={topimg} alt="topimg" />
      </Adimg>
      <Offerimg>
        <img src={offer1} alt="offerimg" />
      </Offerimg>
      <Saletimer>need to add timer and button</Saletimer>
      <Freetrial>
        <div className="freetrial">Two Free Trials</div>
        <div className="freeclasses">Experience Cult classes for free</div>
        <div className="tickets">
          <div>
            <h1>01</h1>
            <button>try for free</button>
          </div>
          <div>
            <h1>02</h1>
            <button>try for free</button>
          </div>
        </div>
      </Freetrial>
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
`;
//4.free-trial div(till tickets)
const Freetrial = styled.div`
  width: 588px;
  height: 200px;
  margin-top: 77px;
  margin-left: 120px;
  background: #80808037;

  .freetrial {
    width: 260px;
    height: 30px;
    text-align: left;
    font-size: 24px;
    font-family: "Brandon" Text;
    font-style: normal;
    font-weight: bold;
    line-height: 30px;
  }
  .freeclasses {
    width: 219px;
    height: 20px;
    margin-top:19px;
    text-align: left;
    color:#A2A2A2;

    font-family: 'Brandon' Text;
    font-style: normal;
    font-weight: 390;
    font-size: 16px;
    line-height: 20px;
  }
  .tickets{
      display:flex;
      justify-content: space-between;
      margin-top:30px;
  }
  .tickets div{
      width:282px;
      height:100px;
      background-color:red;
  }
  }
`;
