
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../Store/AuthStore/action";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../../Store/AuthStore/actionTypes";
import Footer from "../Footer/Footer";
import { SliderCardHomePAge } from './Cards/Cards';
import { Intro } from "./Intro/Intro";
import { StaticData } from "./Static/Static";

export const LandingPage = () => {

    useEffect(()=>{
        window.scroll({top:0,behavior:'smooth'})
    })


    const [sliding, setSliding] = useState([]);
    const dispatch = useDispatch();


    const fetchUser = () => {
        axios
            .get(`${process.env.REACT_APP_BACKEND_URL}/profile`, { withCredentials: true })
            .then(res => {
                dispatch(Actions(LOGIN_SUCCESS, res.data.user))
            })
            .catch(err => {
                console.log("Not properly authenticated!");
                console.log("Error", err);
                dispatch(Actions(LOGIN_FAILURE, ""))
            })
    }

    useEffect(() => {
        axios.get("https://secure-plateau-49386.herokuapp.com/brand")
            .then((data) => {
                setSliding(data.data);
            });

        if (localStorage.getItem("loginMethod") === "Fastlogin") {
            fetchUser()
        }
    }, []);

    return (
        <>
            <Intro />
            {sliding?.map((e) => (
                e._id !== "6155946c79e9ef42d0369655" ? <SliderCardHomePAge key={e._id} {...e} /> : ""
            ))}
            <StaticData />
            <Footer/>
        </>
    );
};