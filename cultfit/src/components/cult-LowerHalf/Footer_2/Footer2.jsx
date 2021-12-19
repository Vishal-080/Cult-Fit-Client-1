import "./footer2.css";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #000;
  @media screen and (max-width: 400px) {
    display:none;
  }
`;

export const Footer2 = () => {
  return (
    <MainContainer>
      <div className="footercontainer">
        <div className="related_searches_section">
          <h4>Related searches</h4>
          <div className="search_list">
            <div>
              <div>Gym Near Me</div>
              <div>Yoga for Back Pain</div>
              <div>Chest Workouts for Men</div>
              <div>Weight Loss Workout</div>
              <div>Yoga Poses for Beginners</div>
              <div>Surya Namaskar for Beginners</div>
              <div>Gym in Chembur</div>
              <div>Gym in Vasant Kunj</div>
              <div>Gym in Juhu</div>
              <div>Gym in Mumbai</div>
              <div>Gym in Kochi</div>
            </div>
            {/***** section 1 *****/}
            <div>
              <div>Gym Near Me</div>
              <div>Yoga for Back Pain</div>
              <div>Chest Workouts for Men</div>
              <div>Weight Loss Workout</div>
              <div>Yoga Poses for Beginners</div>
              <div>Surya Namaskar for Beginners</div>
              <div>Gym in Chembur</div>
              <div>Gym in Vasant Kunj</div>
              <div>Gym in Juhu</div>
              <div>Gym in Mumbai</div>
              <div>Gym in Kochi</div>
            </div>
            {/***** section 2 *****/}
            <div>
              <div>Gym Near Me</div>
              <div>Yoga for Back Pain</div>
              <div>Chest Workouts for Men</div>
              <div>Weight Loss Workout</div>
              <div>Yoga Poses for Beginners</div>
              <div>Surya Namaskar for Beginners</div>
              <div>Gym in Chembur</div>
              <div>Gym in Vasant Kunj</div>
              <div>Gym in Juhu</div>
              <div>Gym in Mumbai</div>
              <div>Gym in Kochi</div>
            </div>
            {/***** section 3 *****/}
            <div>
              <div>Gym Near Me</div>
              <div>Yoga for Back Pain</div>
              <div>Chest Workouts for Men</div>
              <div>Weight Loss Workout</div>
              <div>Yoga Poses for Beginners</div>
              <div>Surya Namaskar for Beginners</div>
              <div>Gym in Chembur</div>
              <div>Gym in Vasant Kunj</div>
              <div>Gym in Juhu</div>
              <div>Gym in Mumbai</div>
              <div>Gym in Kochi</div>
            </div>
            {/***** section 4 *****/}
            <div>
              <div>Gym Near Me</div>
              <div>Yoga for Back Pain</div>
              <div>Chest Workouts for Men</div>
              <div>Weight Loss Workout</div>
              <div>Yoga Poses for Beginners</div>
              <div>Surya Namaskar for Beginners</div>
              <div>Gym in Chembur</div>
              <div>Gym in Vasant Kunj</div>
              <div>Gym in Juhu</div>
              <div>Gym in Mumbai</div>
              <div>Gym in Kochi</div>
            </div>
          </div>
        </div>

        {/* <div className="bottom">
          <div className="links">
            <div>Contact us</div>
            <div>FAQ</div>
            <div>{`Terms & conditions`}</div>
            <div>Privacy policy</div>
            <div>Refund policy</div>
          </div>
          <div className="social_icons">
            <div>
              <img src={"./FooterImages/facebook_icon_white.svg"} alt="" />
            </div>
            <div>
              <img src={"./FooterImages/instagram_icon_white.svg"} alt="" />
            </div>
            <div>
              <img src={"./FooterImages/twitter_icon_white.svg"} alt="" />
            </div>
            <div>
              <img src={"./FooterImages/youtube_icon_white_1.svg"} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </MainContainer>
  );
};

export default Footer2;
