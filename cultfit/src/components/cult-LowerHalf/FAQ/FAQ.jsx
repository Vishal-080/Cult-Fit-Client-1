import styled from "styled-components";

const Container = styled.div`
  background-color: #f4f4fe;
  padding: 50px 120px;

  @media screen and (max-width: 400px) {
    display:none;
  }
`;

const FAQContainer = styled.div`
  width: 1200px;
  margin: auto;

  @media screen and (max-width: 400px) {
    width: 80%;
    margin: auto;
  }
`;

const Row1 = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
`;

const FaqTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 420;
    font-size: 14px;
    line-height: 20px;
  }
`;

const SeeAllTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: #ff3278;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 390;
    font-size: 12px;
    line-height: 20px;
  }
`;

const Row2 = styled.div`
  margin-top: 33px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  color: #888e9e;

  @media screen and (max-width: 400px) {
    display: none !important;
  }
`;

const Row3 = styled.div`
  margin-top: 33px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
  color: #888e9e;
  background-color: #f2f4f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 390;
    font-size: 13px;
    line-height: 20px;
  }
`;

const InnerDiv = styled.div`
  width: 1160px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  height: 30px;

  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;

const InnerDivLeft = styled.div`
  width: 137px;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  color: #6a6a6a;
`;

const Row4 = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  padding: 20px;
  color: #888e9e;
  background-color: #f2f4f8;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const BigRow = styled.div`
  margin-top: 33px;
  height: 240px;
`;

const Answer = styled.div`
  width: 870px;
  margin-top: 5px;
  margin-left: 20px;
  height: 80px;
  font-style: normal;
  font-weight: 390;
  font-size: 16px;
  line-height: 20px;
  color: #6a6a6a;

  @media screen and (max-width: 400px) {
    font-style: normal;
    font-weight: 390;
    font-size: 12px;
    line-height: 20px;
    width: 100%;
    margin-left: 0px;
    height: 160px;
  }
`;

const YesNoDiv = styled.div`
  width: 269px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  font-size: 16px;
  margin: 23px 0 23px 20px;
  color: #6a6a6a;
  font-style: normal;
  font-weight: 390;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    margin: 23px 0 23px 0px;
  }
`;

const Yes = styled.div`
  color: #ff3278;
`;
const TextDiv = styled.div`
  height: 352px;
  margin-top: 33px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #888e9e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 400px) {
    display:none;
  }
`;

const InnerTextDiv = styled.div`
  width: 572px;
  font-size: 12px;
  line-height: 20px;

  @media screen and (max-width: 400px) {
    width: 100%;
    font-style: normal;
    font-weight: 390;
    font-size: 12px;
    line-height: 20px;
    margin-top: 23px;
    height: 302px;
  }
`;

const None = styled.div`
  @media (max-width: 400px) : {
    display: "none";
  }
`;

export const FAQ = () => {
  return (
    <Container>
      <FAQContainer>
        <Row1>
          <FaqTitle>FAQ</FaqTitle>
          <SeeAllTitle>SEE ALL</SeeAllTitle>
        </Row1>
        <Row2>7 QUESTIONS</Row2>
        <Row3>
          <InnerDiv>
            <InnerDivLeft>
              <img src="./FaqImages/Ellipse5.svg" alt="dot" />
              What is cult ?
            </InnerDivLeft>
            <img src="./FaqImages/drop-down-icon.svg" alt="dropdown" />
          </InnerDiv>
        </Row3>
        <Row3>
          <InnerDiv>
            <InnerDivLeft>
              <img src="./FaqImages/Ellipse5.svg" alt="dot" />
              What is cult ?
            </InnerDivLeft>
            <img src="./FaqImages/drop-down-icon.svg" alt="dropdown" />
          </InnerDiv>
        </Row3>
        <Row3>
          <InnerDiv>
            <InnerDivLeft>
              <img src="./FaqImages/Ellipse5.svg" alt="dot" />
              What is cult ?
            </InnerDivLeft>
            <img src="./FaqImages/drop-down-icon.svg" alt="dropdown" />
          </InnerDiv>
        </Row3>
        <Row3>
          <InnerDiv>
            <InnerDivLeft>
              <img src="./FaqImages/Ellipse5.svg" alt="dot" />
              What is cult ?
            </InnerDivLeft>
            <img src="./FaqImages/drop-down-icon.svg" alt="dropdown" />
          </InnerDiv>
        </Row3>
        <BigRow>
          <Row4>
            <InnerDiv>
              <InnerDivLeft>
                <img src="./FaqImages/Ellipse5.svg" alt="dot" />
                What is cult ?
              </InnerDivLeft>
              <img
                src="./FaqImages/drop-down-icon.svg"
                alt="dropdown"
                style={{ transform: "rotate(-180deg)" }}
              />
            </InnerDiv>
          </Row4>
          <Answer>
            At Cult, we make fitness fun and easy. We have best-in-class
            trainers & offer group workouts ranging from yoga to Boxing. Our
            workouts can be done both at a cult center and at home with the help
            of do it yourself (DIY) workout videos. Cult.fiuses the best in
            technology to give you a world-class experience. You can book
            classes, follow workout videos - all with the click of a button from
            the cult.fit app or website.
          </Answer>
          <YesNoDiv>
            <div>Do you find this helpful?</div>
            <Yes>YES</Yes>
            <Yes>NO</Yes>
          </YesNoDiv>
        </BigRow>
        <TextDiv>
          <InnerTextDiv>
            <p style={{ color: "#000000", fontWeight: "bold", marginTop: "0" }}>
              Which Are The Best Gyms Near Me?
            </p>
            Cult.fit has gyms in various locations around the nation. It
            established its first center in South Bangalore and now has spread
            over to more than 130 locations in India. It has its centers in
            Bangalore, Hyderabad, Delhi, Mumbai, etc. Find the nearest gym by
            searching for the best gym near me, choose the cult.fit the gym
            nearby, and experience the magic. If the cult.fit center is not
            close to you, You can also go for the Workout from Home option and
            experience its wonder. Whether you are a resident of Delhi, or
            Mumbai, cult.fit has covered all. Here are some places, you will
            find the centers: Bangalore: You will find many cult.fit centers in
            Bangalore like in Jp Nagar, Bellandur, RR Nagar, Electronic city.
            Banashankari, Malleswaram, and 14 more locations. You will get more
            new locations at Yelahanka, Hennur, and 4 more other places in
            Bangalore soon. Search for the good gyms near me and you will find
            it. Delhi: If you are staying in Delhi, you can find the centers
            around Model Town, Pitampura, Ring Road, Dwarka Sector 12, Hauz
            Khas, and some more spread out. You can search cult gyms around me
            and you will get a list of centers around you. Hyderabad: If you are
            based out of Hyderabad, You can opt for the workouts in
            Himayatnagar, Banjara Hills, Nizampet x roads, Jubilee Hills, LB
            Nagar, and some more areas. Mumbai: You will find some centers
            around Mumbai in palladium, Andheri, Lokhandwala, Tardeo, and Juhu
            soon. If you are in Chennai, Jaipur, Visakhapatnam, Kanpur,
            Ludhiana, Bhopal, Mangalore, find your way to Cult.fit fitness. Just
            find the Top gyms near me and you will find it on the list. So,
            Don’t wait, search for good gyms near me and opt for a different
            world of workouts.
          </InnerTextDiv>
          <InnerTextDiv>
            <p style={{ color: "#000000", fontWeight: "bold", marginTop: "0" }}>
              Which Are The Best Gyms Near Me?
            </p>
            Cult.fit has gyms in various locations around the nation. It
            established its first center in South Bangalore and now has spread
            over to more than 130 locations in India. It has its centers in
            Bangalore, Hyderabad, Delhi, Mumbai, etc. Find the nearest gym by
            searching for the best gym near me, choose the cult.fit the gym
            nearby, and experience the magic. If the cult.fit center is not
            close to you, You can also go for the Workout from Home option and
            experience its wonder. Whether you are a resident of Delhi, or
            Mumbai, cult.fit has covered all. Here are some places, you will
            find the centers: Bangalore: You will find many cult.fit centers in
            Bangalore like in Jp Nagar, Bellandur, RR Nagar, Electronic city.
            Banashankari, Malleswaram, and 14 more locations. You will get more
            new locations at Yelahanka, Hennur, and 4 more other places in
            Bangalore soon. Search for the good gyms near me and you will find
            it. Delhi: If you are staying in Delhi, you can find the centers
            around Model Town, Pitampura, Ring Road, Dwarka Sector 12, Hauz
            Khas, and some more spread out. You can search cult gyms around me
            and you will get a list of centers around you. Hyderabad: If you are
            based out of Hyderabad, You can opt for the workouts in
            Himayatnagar, Banjara Hills, Nizampet x roads, Jubilee Hills, LB
            Nagar, and some more areas. Mumbai: You will find some centers
            around Mumbai in palladium, Andheri, Lokhandwala, Tardeo, and Juhu
            soon. If you are in Chennai, Jaipur, Visakhapatnam, Kanpur,
            Ludhiana, Bhopal, Mangalore, find your way to Cult.fit fitness. Just
            find the Top gyms near me and you will find it on the list. So,
            Don’t wait, search for good gyms near me and opt for a different
            world of workouts.
          </InnerTextDiv>
        </TextDiv>
        <TextDiv>
          <InnerTextDiv>
            <p style={{ color: "#000000", fontWeight: "bold", marginTop: "0" }}>
              Which Are The Best Gyms Near Me?
            </p>
            Cult.fit has gyms in various locations around the nation. It
            established its first center in South Bangalore and now has spread
            over to more than 130 locations in India. It has its centers in
            Bangalore, Hyderabad, Delhi, Mumbai, etc. Find the nearest gym by
            searching for the best gym near me, choose the cult.fit the gym
            nearby, and experience the magic. If the cult.fit center is not
            close to you, You can also go for the Workout from Home option and
            experience its wonder. Whether you are a resident of Delhi, or
            Mumbai, cult.fit has covered all. Here are some places, you will
            find the centers: Bangalore: You will find many cult.fit centers in
            Bangalore like in Jp Nagar, Bellandur, RR Nagar, Electronic city.
            Banashankari, Malleswaram, and 14 more locations. You will get more
            new locations at Yelahanka, Hennur, and 4 more other places in
            Bangalore soon. Search for the good gyms near me and you will find
            it. Delhi: If you are staying in Delhi, you can find the centers
            around Model Town, Pitampura, Ring Road, Dwarka Sector 12, Hauz
            Khas, and some more spread out. You can search cult gyms around me
            and you will get a list of centers around you. Hyderabad: If you are
            based out of Hyderabad, You can opt for the workouts in
            Himayatnagar, Banjara Hills, Nizampet x roads, Jubilee Hills, LB
            Nagar, and some more areas. Mumbai: You will find some centers
            around Mumbai in palladium, Andheri, Lokhandwala, Tardeo, and Juhu
            soon. If you are in Chennai, Jaipur, Visakhapatnam, Kanpur,
            Ludhiana, Bhopal, Mangalore, find your way to Cult.fit fitness. Just
            find the Top gyms near me and you will find it on the list. So,
            Don’t wait, search for good gyms near me and opt for a different
            world of workouts.
          </InnerTextDiv>
          <InnerTextDiv>
            <p style={{ color: "#000000", fontWeight: "bold", marginTop: "0" }}>
              Which Are The Best Gyms Near Me?
            </p>
            Cult.fit has gyms in various locations around the nation. It
            established its first center in South Bangalore and now has spread
            over to more than 130 locations in India. It has its centers in
            Bangalore, Hyderabad, Delhi, Mumbai, etc. Find the nearest gym by
            searching for the best gym near me, choose the cult.fit the gym
            nearby, and experience the magic. If the cult.fit center is not
            close to you, You can also go for the Workout from Home option and
            experience its wonder. Whether you are a resident of Delhi, or
            Mumbai, cult.fit has covered all. Here are some places, you will
            find the centers: Bangalore: You will find many cult.fit centers in
            Bangalore like in Jp Nagar, Bellandur, RR Nagar, Electronic city.
            Banashankari, Malleswaram, and 14 more locations. You will get more
            new locations at Yelahanka, Hennur, and 4 more other places in
            Bangalore soon. Search for the good gyms near me and you will find
            it. Delhi: If you are staying in Delhi, you can find the centers
            around Model Town, Pitampura, Ring Road, Dwarka Sector 12, Hauz
            Khas, and some more spread out. You can search cult gyms around me
            and you will get a list of centers around you. Hyderabad: If you are
            based out of Hyderabad, You can opt for the workouts in
            Himayatnagar, Banjara Hills, Nizampet x roads, Jubilee Hills, LB
            Nagar, and some more areas. Mumbai: You will find some centers
            around Mumbai in palladium, Andheri, Lokhandwala, Tardeo, and Juhu
            soon. If you are in Chennai, Jaipur, Visakhapatnam, Kanpur,
            Ludhiana, Bhopal, Mangalore, find your way to Cult.fit fitness. Just
            find the Top gyms near me and you will find it on the list. So,
            Don’t wait, search for good gyms near me and opt for a different
            world of workouts.
          </InnerTextDiv>
        </TextDiv>
        <TextDiv className="None">
          <InnerTextDiv>
            <p style={{ color: "#000000", fontWeight: "bold", marginTop: "0" }}>
              Which Are The Best Gyms Near Me?
            </p>
            Cult.fit has gyms in various locations around the nation. It
            established its first center in South Bangalore and now has spread
            over to more than 130 locations in India. It has its centers in
            Bangalore, Hyderabad, Delhi, Mumbai, etc. Find the nearest gym by
            searching for the best gym near me, choose the cult.fit the gym
            nearby, and experience the magic. If the cult.fit center is not
            close to you, You can also go for the Workout from Home option and
            experience its wonder. Whether you are a resident of Delhi, or
            Mumbai, cult.fit has covered all. Here are some places, you will
            find the centers: Bangalore: You will find many cult.fit centers in
            Bangalore like in Jp Nagar, Bellandur, RR Nagar, Electronic city.
            Banashankari, Malleswaram, and 14 more locations. You will get more
            new locations at Yelahanka, Hennur, and 4 more other places in
            Bangalore soon. Search for the good gyms near me and you will find
            it. Delhi: If you are staying in Delhi, you can find the centers
            around Model Town, Pitampura, Ring Road, Dwarka Sector 12, Hauz
            Khas, and some more spread out. You can search cult gyms around me
            and you will get a list of centers around you. Hyderabad: If you are
            based out of Hyderabad, You can opt for the workouts in
            Himayatnagar, Banjara Hills, Nizampet x roads, Jubilee Hills, LB
            Nagar, and some more areas. Mumbai: You will find some centers
            around Mumbai in palladium, Andheri, Lokhandwala, Tardeo, and Juhu
            soon. If you are in Chennai, Jaipur, Visakhapatnam, Kanpur,
            Ludhiana, Bhopal, Mangalore, find your way to Cult.fit fitness. Just
            find the Top gyms near me and you will find it on the list. So,
            Don’t wait, search for good gyms near me and opt for a different
            world of workouts.
          </InnerTextDiv>
          <InnerTextDiv>
            <p style={{ color: "#000000", fontWeight: "bold", marginTop: "0" }}>
              Which Are The Best Gyms Near Me?
            </p>
            Cult.fit has gyms in various locations around the nation. It
            established its first center in South Bangalore and now has spread
            over to more than 130 locations in India. It has its centers in
            Bangalore, Hyderabad, Delhi, Mumbai, etc. Find the nearest gym by
            searching for the best gym near me, choose the cult.fit the gym
            nearby, and experience the magic. If the cult.fit center is not
            close to you, You can also go for the Workout from Home option and
            experience its wonder. Whether you are a resident of Delhi, or
            Mumbai, cult.fit has covered all. Here are some places, you will
            find the centers: Bangalore: You will find many cult.fit centers in
            Bangalore like in Jp Nagar, Bellandur, RR Nagar, Electronic city.
            Banashankari, Malleswaram, and 14 more locations. You will get more
            new locations at Yelahanka, Hennur, and 4 more other places in
            Bangalore soon. Search for the good gyms near me and you will find
            it. Delhi: If you are staying in Delhi, you can find the centers
            around Model Town, Pitampura, Ring Road, Dwarka Sector 12, Hauz
            Khas, and some more spread out. You can search cult gyms around me
            and you will get a list of centers around you. Hyderabad: If you are
            based out of Hyderabad, You can opt for the workouts in
            Himayatnagar, Banjara Hills, Nizampet x roads, Jubilee Hills, LB
            Nagar, and some more areas. Mumbai: You will find some centers
            around Mumbai in palladium, Andheri, Lokhandwala, Tardeo, and Juhu
            soon. If you are in Chennai, Jaipur, Visakhapatnam, Kanpur,
            Ludhiana, Bhopal, Mangalore, find your way to Cult.fit fitness. Just
            find the Top gyms near me and you will find it on the list. So,
            Don’t wait, search for good gyms near me and opt for a different
            world of workouts.
          </InnerTextDiv>
        </TextDiv>
      </FAQContainer>
    </Container>
  );
};

export default FAQ;
