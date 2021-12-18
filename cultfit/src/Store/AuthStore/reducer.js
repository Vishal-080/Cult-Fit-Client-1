/**
 * @params
 * @params
 * @returns
 */

import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

const user = loadData("user")

const initState = {
    isAuth: user ? true : false,
    user:user||""
}

export const authReducer = (state = initState, { type, payload }) => { //store 1st and action 2nd - order matters

    switch (type) {

        case LOGIN_SUCCESS: {

            saveData("user", payload)
            return {
                ...state,
                isAuth: true,
                user: payload
            };
        }

        case LOGIN_FAILURE: {
            return {
                ...state,
                isAuth: false,
                user: ""
            };
        }

        default:
            return state;
    }

}
