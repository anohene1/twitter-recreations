"use client"

import React, {useEffect, useRef, useState} from 'react';
import styles from "./secondaryButton.module.scss";
import {gsap} from "gsap";
import {Power4} from "gsap/gsap-core";

function SecondaryButton() {
    const [isBeingHovered, setIsBeingHovered] = useState(false);
    let buttonItemsRef = useRef(null)

    useEffect(() => {
        if (isBeingHovered) {
            gsap.to(buttonItemsRef.current, {
                duration: 0.5,
                ease: Power4.easeOut,
                x: '-20%',
            });
        } else {
            gsap.to(buttonItemsRef.current, {
                duration: 0.5,
                ease: Power4.easeOut,
                x: '5%',
            });
        }
    })


    return (
        <button
            className={styles.button}
            onMouseEnter={() => setIsBeingHovered(true)}
            onMouseLeave={() => setIsBeingHovered(false)}
        >
            <div ref={buttonItemsRef}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.6875 2.09144V15.9078C1.68759 15.9378 1.69653 15.9671 1.7132 15.992C1.72987 16.0169 1.75352 16.0364 1.78119 16.0479C1.80886 16.0594 1.83932 16.0625 1.86875 16.0568C1.89817 16.0511 1.92526 16.0368 1.9466 16.0158L9.14062 9L1.9466 1.98351C1.92526 1.96247 1.89817 1.94819 1.86875 1.94248C1.83932 1.93676 1.80886 1.93986 1.78119 1.95139C1.75352 1.96292 1.72987 1.98236 1.7132 2.00727C1.69653 2.03219 1.68759 2.06147 1.6875 2.09144ZM12.157 6.11719L3.13664 1.1475L3.13102 1.14433C2.97562 1.05996 2.82797 1.27019 2.95523 1.39254L10.0262 8.15379L12.157 6.11719ZM2.95594 16.6075C2.82797 16.7298 2.97563 16.94 3.13172 16.8557L3.13734 16.8525L12.157 11.8828L10.0262 9.84551L2.95594 16.6075ZM15.7985 8.12109L13.2796 6.73383L10.9111 9L13.2796 11.2651L15.7985 9.8789C16.4837 9.50027 16.4837 8.49972 15.7985 8.12109Z" fill="white"/>
                </svg>
                Download for Android
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        fill="white"
                    ></path>
                </svg>
            </div>
        </button>
    );
}

export default SecondaryButton;