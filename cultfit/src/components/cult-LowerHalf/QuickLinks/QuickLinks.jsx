import styled from "styled-components";

const QuickLink = styled.div`
  width: 1200px;
  margin: 93px auto;
  height: 140px;
  text-align: left;
  /* border: 1px solid red; */
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
`;

const Links = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 12px;
  border-bottom: 0.5px solid #a2a2a2;
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
