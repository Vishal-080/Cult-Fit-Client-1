/**
 * @params
 * @params
 * @returns
 */

import { loadData, saveData } from "../../utils/localStorage";
import { SET_CENTRE, SET_LOCATION, SET_SESSIONTYPE } from "./actionTypes";


const current_location = loadData("location")
const current_sessiontype = loadData("sessiontype")
const current_centre = loadData("current_centre")

const initState = {
    location: current_location || "Bangalore",
    sessiontype: current_sessiontype || "",
    centre: current_centre || ""
}

export const generalReducer = (state = initState, { type, payload }) => { //store 1st and action 2nd - order matters

    switch (type) {

        case SET_LOCATION:

            saveData("location", payload)

            return {
                ...state,
                location: payload
            }

        case SET_SESSIONTYPE:

            saveData("sessiontype", payload)

            return {
                ...state,
                sessiontype: payload
            }

        case SET_CENTRE:

            saveData("current_centre", payload)

            return {
                ...state,
                centre: payload
            }

        default:
            return state;
    }

}
