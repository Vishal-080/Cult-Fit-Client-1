import styled from "styled-components";

const BeSpiritedContainer = styled.div`
  width: 1200px;
  margin: 93px auto;
  text-align: left;

  @media screen and (max-width: 400px) {
    width: 80%;
    margin: 32px auto;
    text-align: left;
  }
`;

const Title1 = styled.div`
  font-size: 96px;
  line-height: 70px;
  font-weight: bold;
  font-style: normal;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 420;
    font-size: 24px;
    line-height: 40px;
  }
`;

const Title2 = styled.div`
  font-size: 60px;
  line-height: 70px;
  font-weight: bold;
  font-style: normal;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 420;
    font-size: 14px;
    line-height: 20px;
  }
`;

const Title3 = styled.div`
  color: #908e8e;
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  font-style: normal;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 390;
    font-size: 13px;
    line-height: 20px;
    color: #908e8e;
  }
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
