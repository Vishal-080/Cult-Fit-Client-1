import styles from "./Intro.module.css"
import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
// import { useEffect, useState } from "react";
// import { CSSTransition } from "react-transition-group";

// import { Link } from "react-router-dom";

export const Intro = () => {
    const [seconds, setSeconds] = useState(0);
    const firstRender = useRef(true);

    const SpanD = styled.span`
    display: inline-block;
    transform: translateY(-40px);
    animation: slidedown 3.2s infinite;
    color: #00abe9;

    
  @keyframes slidedown {
    0% {
      transform: translateY(-40px);
      opacity: 0;
    }
  
    30% {
      transform: translateY(0px);
      opacity: 0.5;
    }
  
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  `;

    useEffect(() => {

        const interval = setInterval(() => {
            setSeconds((seconds) => {
                if (seconds === 2) {
                    return 0;
                } else {
                    return seconds + 1;
                }
            });
        }, 3200);
        
        if (firstRender.current === true) {
            firstRender.current = false;
            return;
        }

        return () => clearInterval(interval);
    });

    //"hero_section container"
    //{styles.hero_section,styles.container} 

    return (
        <>
            <div className={`${styles.hero_section} ${styles.container}`}>
                <div className={styles.left_section}>
                    <h2>
                        For the{" "}
                        <SpanD>
                            {seconds === 0 ? "Love " : seconds === 1 ? "Ease " : "Fun "}
                        </SpanD>{" "}
                        of fit.
                    </h2>
                    <p>
                        {`At cult.fit, we strive to keep you fit & healthy through a range of
            holistic offerings that include fitness and yoga, healthy meals,
            mental wellbeing and primary care. Now anyone can now stay healthy
            from the safety of their homes with just a single app that helps you
            to #BeBetterEveryDay`}
                    </p>
                </div>
                <div className={styles.right_section}>
                    <video
                        autoPlay
                        muted
                        loop
                        src="https://cdn-images.cure.fit/www-curefit-com/video/upload/w_800,q_auto:eco/vc_auto/video/vm/32b91e40-0e2c-477b-a2ad-88d437d0f07f.mp4"
                    ></video>
                </div>
            </div>
        </>
    );
};