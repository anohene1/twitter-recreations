"use client"

import React, {useEffect, useRef, useState} from 'react';
import styles from './card.module.scss'
import { gsap } from "gsap";
import {Power4} from "gsap/gsap-core";


interface Props {
    price: string,
    city: string,
    description: string,
    videoUrl: string
}

function Card({price, city, description, videoUrl}: Props) {

    let video = useRef(null)
    let card = useRef(null)
    const [isBeingHovered, setIsBeingHovered] = useState(false)


    useEffect(() => {
        if (isBeingHovered) {
            video.current.play()
            gsap.to(card.current, {duration: 0.5, css: {width: '44rem'}, ease: Power4.easeInOut})
        } else {
            video.current.pause()
            gsap.to(card.current, {duration: 0.5, css: {width: '22rem'}, ease: Power4.easeInOut})
        }
    })

    return (
        <div ref={card} onMouseEnter={() => setIsBeingHovered(true)} onMouseLeave={() => setIsBeingHovered(false)} className={styles.card}>
            <div>
                <h4>${price}</h4>
                <h2>{city}</h2>
                <p>{description}</p>
            </div>
            <video ref={video} muted loop src={videoUrl}></video>
        </div>
    );
}

export default Card;