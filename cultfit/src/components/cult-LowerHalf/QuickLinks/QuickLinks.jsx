import styled from "styled-components";

const QuickLink = styled.div`
  width: 1200px;
  margin: 93px auto;
  height: 140px;
  text-align: left;
  /* border: 1px solid red; */

  @media screen and (max-width: 400px) {
    margin: 32px auto;
    width: 80%;
  }
`;

const QuickTitle = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  padding: 12px;
  align-content: center;
  margin-bottom: -6px;
  border-bottom: 0.5px solid #a2a2a2;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 420;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }
`;

const Links = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 12px;
  border-bottom: 0.5px solid #a2a2a2;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 390;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const QuickLinks = () => {
  return (
    <QuickLink>
      <QuickTitle>Quick Links</QuickTitle>
      <Links>Help & Support</Links>
      <Links>Terms and Conditions</Links>
    </QuickLink>
  );
};

export default QuickLinks;
