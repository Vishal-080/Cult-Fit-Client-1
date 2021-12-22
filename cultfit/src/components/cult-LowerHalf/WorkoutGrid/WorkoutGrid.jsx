import React from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";
import { SET_SESSIONTYPE } from "../../../Store/GeneralStore/actionTypes";
import { Actions } from "../../../Store/GeneralStore/actions";
import { useHistory } from "react-router-dom";

/******* Styled components ********/
const WorkoutHeading = styled.div`
  font-size: 20px;
  width: 1200px;
  line-height: 28px;
  font-weight: bold;
  margin: 75px auto;

  @media screen and (max-width: 400px) {
    width: 80%;
    font-style: normal;
    font-weight: 420;
    font-size: 14px;
    line-height: 20px;
    margin: 32px auto;
  }
`;

const Grid = styled.div`
  width: 1200px;
  margin: 93px auto;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 24px;

  @media screen and (max-width: 400px) {
    width: 80%;
    height: inherit;
    margin: 32px auto;
  }
`;

const GridItem = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;

  & p {
    position: absolute;
    z-index: 99;
    padding: 19px;
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

  @media screen and (max-width: 400px) {
    width: 40%;
    height: inherit;

    & p {
      position: absolute;
      width: 94px;
      height: 20px;
      font-style: normal;
      font-weight: 420;
      font-size: 14px;
      line-height: 20px;
    }

    & img {
      position: relative;
      border-radius: 5px;
      width: 80%;
      height: 100%;
    }
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
  const dispatch = useDispatch();
  const history = useHistory();

  const setSessionType = (el) => {
    dispatch(Actions(SET_SESSIONTYPE, el));
    history.push(`/sessiontype/${el}`);
  };

  return (
    <>
      <WorkoutHeading>WORKOUTS</WorkoutHeading>
      <Grid>
        {workouts.map((el, i) => (
          <GridItem key={i} onClick={() => setSessionType(el)}>
            <p>{el}</p>
            <img src={`/workoutgrid_img/grid${i + 1}.svg`} alt={el} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default WorkoutGrid;
