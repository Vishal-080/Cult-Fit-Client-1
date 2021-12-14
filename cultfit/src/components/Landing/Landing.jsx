
import axios from "axios";
import { useState, useEffect } from "react";
import { SliderCardHomePAge } from './Cards/Cards';
import { Intro } from "./Intro/Intro";
import { Navbar } from "./Navbar/Navbar";

export const LandingPage = () => {
    const [sliding, setSliding] = useState([]);

    useEffect(() => {
        axios.get("https://secure-plateau-49386.herokuapp.com/brand")
            .then((data) => {
                setSliding(data.data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <Intro />
            {sliding?.map((e) => (
                <SliderCardHomePAge key={e._id} {...e} />
            ))}

        </>
    );
};