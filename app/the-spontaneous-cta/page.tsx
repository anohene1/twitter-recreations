"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Navbar from "@/app/the-spontaneous-cta/components/Navbar/Navbar";
import PrimaryButton from "@/app/the-spontaneous-cta/components/PrimaryButton/PrimaryButton";
import Card from "@/app/the-spontaneous-cta/components/Card/Card";
import {
  Bookmark,
  Cloud,
  Copy,
  Fingerprint,
  MusicNote,
  Pen,
  ToiletPaper,
  Tree,
} from "@phosphor-icons/react";
import { gsap, Power3 } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  Icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: CardItem[] = [
  {
    Icon: <Pen size={40} color="yellow" />,
    title: "Draw",
    description:
      "It is possible to draw very easily in this great tool. You only need a pen and paper, which will allow you to draw.",
  },
  {
    Icon: <MusicNote size={40} color="purple" />,
    title: "Listen",
    description:
      "You'll only need to use your ears to enjoy your sound effects. All completely integrated and compatible with Bluetooth.",
  },
  {
    Icon: <Copy size={40} color="blue" />,
    title: "Create",
    description:
      "Who wouldn't like to be a creator? Just use our tool to create everything you'd ever want.",
  },
  {
    Icon: <Fingerprint size={40} color="green" />,
    title: "Search",
    description:
      "Wouldn't it be nice to have a super mom who always knows where it's located? We got your back",
  },
  {
    Icon: <Cloud size={40} color="pink" />,
    title: "Cloud",
    description:
      "Everything easily saved to the cloud. We call it BrainSync. The best way to save your stuff and retrieve it.",
  },
  {
    Icon: <ToiletPaper size={40} color="chartreuse" />,
    title: "Clean",
    description:
      "Since your brain controls your hands, you can wipe your butt very easily without thinking too much. It's a game changer!",
  },
  {
    Icon: <Bookmark size={40} color="violet" />,
    title: "Bookmark",
    description:
      "The easiest bookmark functionality you have ever seen. Just enter and remove items from your brain. It's that easy.",
  },
  {
    Icon: <Tree size={40} color="aquamarine" />,
    title: "Eco-friendly",
    description:
      "Because this is all happening in your head, it's as eco-friendly as possible. Zero carbon emissions.",
  },
];

function TheSpontaneousCTA() {
  let pageRef = useRef(null);
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "header button",
      start: "top top",
      toggleActions: "play none reverse none"
    },
  });

  useEffect(() => {
    gsap.to(pageRef.current, {
      duration: 0,
      visibility: "visible",
    });
    tl.from("#sign_in_button", {
      x: 120,
      duration: 0.4,
      ease: Power3.easeOut,
    }, 'start').from("nav button", {
      duration: 0.4,
      opacity: 0,
      x: 70,
      scale: 0.3,
      ease: Power3.easeOut,
    }, 'start');
  });

  return (
    <main className={styles.page} ref={pageRef}>
      <Navbar />
      <header>
        <h1>
          Unlock the <span>best minds</span> in the world, for your own.
        </h1>
        <h5>
          What if we would tell you, you have everything you&apos;d need to have a
          super mind.
        </h5>
        <PrimaryButton label="Get started for free" />
      </header>
      <div className={styles.content}>
        <h2>Everything in one tool</h2>
        <h6>Stop using everything and start using your head.</h6>

        <div className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.title}
              Icon={card.Icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default TheSpontaneousCTA;
