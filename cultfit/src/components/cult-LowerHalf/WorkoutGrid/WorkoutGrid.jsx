import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

/******* Styled components ********/

const Grid = styled.div`
  width: 1200px;
  margin: auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 24px;
`;

const GridItem = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;

  & p {
    position: absolute;
    z-index: 99;
    padding: 19px;
    width: 15%;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    margin: 0;
  }

  & img {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    border-radius: 5px;
    min-width: 288px;
    min-height: 188px;
  }
`;

/******** Code starts from here  ********/

const workouts = [
  "Yoga",
  "Badminton",
  "Dance Fitness",
  "S&C",
  "HRX Workout",
  "Boxing",
];

export const WorkoutGrid = () => {
  const history = useHistory();
  return (
    <Grid>
      {workouts.map((el, i) => (
        <GridItem key={i}>
          <p>{el}</p>
          {/* <img src="/workoutgrid_img/grid1.svg" alt={el} /> */}
          <img
            onClick={() => {
              history.push("/");
            }}
            src={`/workoutgrid_img/grid${i + 1}.svg`}
            alt={el}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default WorkoutGrid;
