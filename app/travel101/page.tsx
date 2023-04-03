"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Navbar from "@/app/travel101/components/Navbar/Navbar";
import Card from "@/app/travel101/components/Card/Card";
import Footer from "@/app/travel101/components/Footer/Footer";
import SplitType from "split-type";
import gsap, { Power3, Power4 } from "gsap";

interface CardItem {
  price: string;
  city: string;
  description: string;
  videoUrl: string;
}

const cards: CardItem[] = [
  {
    price: "99",
    city: "Paris",
    description: "Explore the city of love",
    videoUrl: "/assets/videos/paris.mp4",
  },
  {
    price: "149",
    city: "Greece",
    description: "Relax on the islands",
    videoUrl: "/assets/videos/greece.mp4",
  },
  {
    price: "299",
    city: "Iceland",
    description: "Breathtaking views",
    videoUrl: "/assets/videos/iceland.mp4",
  },
  {
    price: "299",
    city: "Barcelona",
    description: "Nightlife and beaches",
    videoUrl: "/assets/videos/barcelona.mp4",
  },
];

function Travel101() {
  const tl = gsap.timeline();
  let cardsRef = useRef(null);
  let page = useRef(null);

  useEffect(() => {
    const title = SplitType.create("h1");

    tl.to(page.current, {
      duration: 0,
      css: {
        visibility: "visible",
      },
    })
      .from("header", { y: -20, opacity: 0, duration: 1, ease: Power3.easeIn })
      .from(title.words, {
        y: 100,
        stagger: 0.1,
        ease: Power3.easeOut,
        skewX: 5,
        duration: 1,
        delay: -0.3,
      })
        // @ts-ignore
        .from(cardsRef.current.children, {
        stagger: 0.3,
        ease: Power4.easeInOut,
        duration: 1,
        css: {
          "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
      });

    // .from('footer', {
    //     y: 20,
    //     opacity: 0,
    //     duration: 1,
    //     delay: -2,
    //     ease: Power3.easeIn,
    //
    // })
  });

  return (
    <div ref={page} className={styles.page}>
      <Navbar />
      <h1>
        <span>Discover the best</span>
        <span className={styles.blue}>Spring Destinations</span>
      </h1>
      <div ref={cardsRef} className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.city}
            price={card.price}
            city={card.city}
            description={card.description}
            videoUrl={card.videoUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Travel101;
