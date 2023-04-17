"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { gsap, Power3 } from "gsap";
import { Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/app/haptic/components/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/app/haptic/components/SecondaryButton/SecondaryButton";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  let phoneImageRef = useRef(null);
  let hapticPhoneRef = useRef(null);
  let hapticTextRef = useRef(null);
  let hapticContainertRef = useRef(null);
  let trackContainerRef = useRef(null);
  let trackPhoneRef = useRef(null);
  let trackTextRef = useRef(null);
  let trackCardsRef = useRef(null);

  useLayoutEffect(() => {
    // Zoom phone image on scroll
    // gsap.to(phoneImageRef.current, {
    //     width: '75%',
    //     scrollTrigger: {
    //         trigger: phoneImageRef.current,
    //         scrub: 1,
    //     }
    // })

    gsap.utils
      .toArray(`.${styles.textPhoneContainer} div.text`)
      .forEach((section) => {
          ScrollTrigger.create({
              // @ts-ignore
              trigger: section,
          start: "center center",
          end: "top top",
          toggleActions: "restart none none none",
          scrub: 1,
              // @ts-ignore
              pin: section,
          pinSpacing: false,
        });
      });

    gsap.utils.toArray(`.${styles.animatedP}`).forEach((paragraph) => {
      gsap
        .timeline()
          // @ts-ignore
          .to(paragraph, {
          color: "white",
          scrollTrigger: {
            trigger: paragraph,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        })
          // @ts-ignore
          .to(paragraph, {
          color: "rgba(255, 255, 255, 0.2)",
          scrollTrigger: {
            trigger: paragraph,
            start: "bottom center",
            scrub: 1,
          },
        });
    });

    let trackTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: trackContainerRef.current,
        start: "center center",
        end: "2000px top",
        pinSpacing: false,
        scrub: 1,
        pin: trackContainerRef.current,
        markers: false,
      },
    });

    trackTimeline
      .to(
        trackPhoneRef.current,
        {
          x: 350,
        },
        "start"
      )
      .to(
        trackTextRef.current,
        {
          x: 150,
          opacity: 0,
          display: "none",
        },
        "start"
      )
      .to(trackPhoneRef.current, {
        rotate: 0,
        width: "35rem",
      })
      .to(
        trackCardsRef.current,
        {
          display: "block",
        },
        "card"
      )
      .to(
        trackPhoneRef.current,
        {
          width: "37rem",
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[0],
        {
          x: -700,
          y: -500,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[1],
        {
          x: -600,
          y: -300,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[2],
        {
          x: -650,
          y: -170,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[3],
        {
          x: -620,
          y: 280,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[4],
        {
          x: -700,
          y: 400,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[5],
        {
          x: -150,
          y: 450,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[6],
        {
          x: 300,
          y: 370,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[7],
        {
          x: 350,
          y: 80,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[8],
        {
          x: 240,
          y: -130,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[9],
        {
          x: 340,
          y: -310,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[10],
        {
          x: 280,
          y: -420,
          width: 350,
        },
        "card"
      )
      .to(
          // @ts-ignore
          trackCardsRef.current.children[11],
        {
          x: -80,
          y: -550,
          width: 350,
        },
        "card"
      );

    // gsap.to(hapticTextRef.current, {
    //     scrollTrigger: {
    //         trigger: hapticTextRef.current,
    //         start: "center center",
    //         end: "top top",
    //         toggleActions: "restart none none none",
    //         scrub: true,
    //         pin: hapticTextRef.current,
    //         pinSpacing: false,
    //         markers: true
    //     },
    // });
  }, []);

  return (
    <div className={styles.page}>
      <nav>
        <h2>notHaptic</h2>
        <PrimaryButton />
      </nav>
      <div className={styles.container}>
        <p className={styles.bigText}>
          Life is defined by our actions. Everything counts. Books you&apos;ve read,
          kilometers you&apos;ve run, every cup of coffee, every takeoff and every
          landing, every workout, every headspace session, every movie, every
          night out, and every glass of water the next morning. Everything
          counts. And everything that counts — shapes us
        </p>
        <img
          ref={phoneImageRef}
          className={styles.phoneImage}
          src="/assets/haptic/phone-image.webp"
          alt="phone"
        />
      </div>
      <div
        ref={hapticContainertRef}
        className={`${styles.container} ${styles.textPhoneContainer}`}
      >
        <div ref={hapticTextRef} className="text">
          <p>
            Haptic is a simple and minimalistic action-based journal for iPhone.
          </p>
          <div className={styles.textPhoneButtons}>
            <SecondaryButton />
            <div className={styles.featuredContainer}>
              <img src="/assets/haptic/laurel-left.png" alt="" />
              <div>
                <span>Featured by Apple</span>
                <p>App Store</p>
              </div>
              <img src="/assets/haptic/laurel-right.png" alt="" />
            </div>
          </div>
        </div>
        <img
          ref={hapticPhoneRef}
          src="/assets/haptic/haptic-phone.webp"
          alt="phone"
        />
      </div>
      <div
        ref={trackContainerRef}
        className={`${styles.container} ${styles.track}`}
      >
        <img
          ref={trackPhoneRef}
          className={styles.trackPhone}
          src="/assets/haptic/track-phone.webp"
          alt="phone"
        />
        <div ref={trackTextRef}>
          <p>Track your habits and activities. All in one timeline.</p>
          <SecondaryButton />
        </div>
        <div className={styles.cards} ref={trackCardsRef}>
          <img src="/assets/haptic/idea-card.webp" alt="" />
          <img src="/assets/haptic/workout-card.webp" alt="" />
          <img src="/assets/haptic/november-card.webp" alt="" />
          <img src="/assets/haptic/slept-card.webp" alt="" />
          <img src="/assets/haptic/burger-card.webp" alt="" />
          <img src="/assets/haptic/coffee-card.webp" alt="" />
          <img src="/assets/haptic/night-card.webp" alt="" />
          <img src="/assets/haptic/listened-card.webp" alt="" />
          <img src="/assets/haptic/thinking-card.webp" alt="" />
          <img src="/assets/haptic/weight-card.webp" alt="" />
          <img src="/assets/haptic/death-stranding-card.webp" alt="" />
          <img src="/assets/haptic/engagement-card.webp" alt="" />
        </div>
      </div>
      <div style={{ height: "2100px" }}></div>
      <div
        ref={hapticContainertRef}
        className={`${styles.container} ${styles.textPhoneContainer}`}
      >
        <div ref={hapticTextRef} className="text">
          <p className={styles.smallerP}>
            Get insights based on your actions. See what your life looks like at
            a glance.
          </p>
          <div className={styles.textPhoneButtons}>
            <SecondaryButton />
          </div>
        </div>
        <img
          ref={hapticPhoneRef}
          src="/assets/haptic/get-insights-phone.webp"
          alt="phone"
        />
      </div>
      {/*<div style={{ height: "100px" }}></div>*/}
      <div
        ref={hapticContainertRef}
        className={`${styles.container} ${styles.textPhoneContainer} ${styles.textPhoneContainerLeft}`}
      >
        <img
          ref={hapticPhoneRef}
          src="/assets/haptic/custom-category-phone.webp"
          alt="phone"
        />
        <div ref={hapticTextRef} className="text">
          <p className={styles.smallerP}>
            Custom categories to track everything. The only limit is your
            imagination.{" "}
          </p>
          <div className={styles.textPhoneButtons}>
            <SecondaryButton />
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
      <div
        ref={hapticContainertRef}
        className={`${styles.container} ${styles.textPhoneContainer}`}
      >
        <div ref={hapticTextRef} className="text">
          <p className={styles.smallerP}>
            Designed to be private. All added information lives only on your
            device.
          </p>
          <div className={styles.textPhoneButtons}>
            <SecondaryButton />
          </div>
        </div>
        <img
          ref={hapticPhoneRef}
          src="/assets/haptic/private-phone.webp"
          alt="phone"
        />
      </div>
      <div style={{ height: "300px" }}></div>
      <div className={styles.container}>
        <p className={styles.veryBigP}>
          <span>Principles of creation.</span> Our core values and beliefs.
        </p>
        <p className={styles.animatedP}>
          We believe that life is defined by actions and memories, not by a
          collection of facetuned photos.
        </p>
        <p className={styles.animatedP}>
          We aim to build technology that inspires the next steps, instead of
          focusing on missed opportunities.{" "}
        </p>
        <p className={styles.animatedP}>
          Privacy is a fundamental right. Haptic doesn&apos;t collect any personal
          information and doesn't have access to the content that you share in
          the app.{" "}
        </p>
        <p className={styles.animatedP}>
          All your data belongs to you. Every piece of information in the app is
          encrypted, stored locally on your iPhone and never synced with
          external servers.{" "}
        </p>
        <p className={styles.animatedP}>
          Digital products are tools, not the center of one&apos;s life. The app is
          visible when you need it, and keeps silent when you don't.
        </p>
      </div>
      {/*<div style={{ height: "100px" }}></div>*/}
      <div
        ref={hapticContainertRef}
        className={`${styles.container} ${styles.textPhoneContainer}`}
      >
        <div ref={hapticTextRef} className="text">
          <p>Haptic is available for iOS on the AppStore </p>
          <div className={styles.textPhoneButtons}>
            <PrimaryButton />
            <div className={styles.featuredContainer}>
              <img src="/assets/haptic/laurel-left.png" alt="" />
              <div>
                <span>Featured by Apple</span>
                <p>App Store</p>
              </div>
              <img src="/assets/haptic/laurel-right.png" alt="" />
            </div>
          </div>
        </div>
        <img
          ref={hapticPhoneRef}
          src="/assets/haptic/phone-image.webp"
          alt="phone"
          style={{width: '35rem'}}
        />
      </div>
    </div>
  );
}

export default Page;
