import styled from "styled-components";

const QuickLink = styled.div`
  width: 1200px;
  margin: auto;
  /* border: 1px solid red; */
  height: 185px;
`;
const QuickTitle = styled.div`
  color: #000;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  padding: 12px;
  align-content: center;
  margin-bottom: -6px;
`;

const Links = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding: 12px;
`;

export const QuickLinks = () => {
  return (
    <QuickLink>
      <QuickTitle>Quick Links</QuickTitle>
      <hr />
      <Links>Help & Support</Links>
      <hr />
      <Links>Terms and Conditions</Links>
      <hr />
    </QuickLink>
  );
};

export default QuickLinks;
