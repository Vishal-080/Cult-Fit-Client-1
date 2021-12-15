import styled from "styled-components";

const BeSpiritedContainer = styled.div`
  width: 1200px;
  margin: auto;
`;
const Title1 = styled.div`
  font-size: 96px;
  font-weight: bold;
  font-style: normal;
`;

const Title2 = styled.div`
  font-size: 60px;
  font-weight: bold;
  font-style: normal;
`;
const Title3 = styled.div`
  color: #908e8e;
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
`;

export const BeSpirited = () => {
  return (
    <BeSpiritedContainer>
      <Title1>BE SPIRITED</Title1>
      <Title2>FEARLESS</Title2>
      <Title3>An EVERYDAY ATHLETE</Title3>
    </BeSpiritedContainer>
  );
};

export default BeSpirited;
