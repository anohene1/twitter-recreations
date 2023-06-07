"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { gsap, Power3 } from "gsap";
import { Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/app/attend/components/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/app/attend/components/SecondaryButton/SecondaryButton";

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
        <h2>tekAuth</h2>
        <PrimaryButton />
      </nav>
      <div
        ref={hapticContainertRef}
        className={`${styles.container} ${styles.textPhoneContainer}`}
      >
        <div ref={hapticTextRef} className="text">
          <p>
            Attendance and Authentication.
              <br/>
              <span style={{color: '#B83A37'}}>Reimagined.</span>
          </p>
          <div className={styles.textPhoneButtons}>
            <PrimaryButton />
          </div>
        </div>
        <img
          ref={hapticPhoneRef}
          src="/assets/attend/Courses.png"
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
          src="/assets/attend/Meetings.png"
          alt="phone"
        />
        <div ref={trackTextRef}>
          <p>Introducing <span style={{color: '#B83A37'}}>tekAuth.</span> A Revolutional Way to Take Attendance.</p>
          <SecondaryButton />
        </div>
        <div className={styles.cards} ref={trackCardsRef}>
          <img src="/assets/attend/CourseCard2.png" alt="" />
          <img src="/assets/attend/CourseCard.png" alt="" />
          <img src="/assets/attend/Dialog.png" alt="" />
          <img src="/assets/attend/MeetingCard.png" alt="" />
          <img src="/assets/attend/Table.png" alt="" />
          <img src="/assets/attend/CourseCard.png" alt="" />
          <img src="/assets/attend/MeetingCard.png" alt="" />
          <img src="/assets/attend/Table.png" alt="" />
          <img src="/assets/attend/CourseCard2.png" alt="" />
          <img src="/assets/attend/Dialog.png" alt="" />
          <img src="/assets/attend/CourseCard.png" alt="" />
          <img src="/assets/attend/MeetingCard.png" alt="" />
        </div>
      </div>
      <div style={{ height: "2100px" }}></div>
      <div
        ref={hapticContainertRef}
        className={`${styles.container} ${styles.textPhoneContainer}`}
      >
        <div ref={hapticTextRef} className="text">
          <p className={styles.smallerP}>
           Say <span style={{color: '#B83A37'}}>Bye</span> to Passing Around Sheets of Paper.
          </p>
          <div className={styles.textPhoneButtons}>
            <SecondaryButton />
          </div>
        </div>
        <img
          ref={hapticPhoneRef}
          src="/assets/attend/CreateMeeting.png"
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
          src="/assets/attend/EmptyMeeting.png"
          alt="phone"
        />
        <div ref={hapticTextRef} className="text">
          <p className={styles.smallerP}>
            Oh So <span style={{color: '#B83A37'}}>Easy</span>. <br/>Ever So <span style={{color: '#B83A37'}}>Seamless</span>. <br/>It <span style={{color: '#B83A37'}}>Just Works</span>.
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
            All Your Class Attendees. <br/>At a <span style={{color: '#B83A37'}}>Glance</span>.
          </p>
          <div className={styles.textPhoneButtons}>
            <SecondaryButton />
          </div>
        </div>
        <img
          ref={hapticPhoneRef}
          src="/assets/attend/Attendees.png"
          alt="phone"
        />
      </div>
      <div style={{ height: "300px" }}></div>
      {/*<div style={{ height: "100px" }}></div>*/}
      <div
        ref={hapticContainertRef}
        className={`${styles.container} ${styles.textPhoneContainer}`}
      >
        <div ref={hapticTextRef} className="text">
          <p><span style={{color: '#B83A37'}}>tekAuth</span> is Available on the App Store and Play Store</p>
          <div className={styles.textPhoneButtons}>
            <PrimaryButton />
            <SecondaryButton />
          </div>
        </div>
        <img
          ref={hapticPhoneRef}
          src="/assets/attend/Courses.png"
          alt="phone"
          style={{width: '35rem'}}
        />
      </div>
    </div>
  );
}

export default Page;
