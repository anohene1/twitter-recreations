"use client";

import React, { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Navbar from "@/app/apple-vision-pro/components/Navbar/Navbar";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Page() {
  let spatialComputingVideoRef = useRef<HTMLVideoElement>(null);
  let physicalSpaceVideoRef = useRef<HTMLVideoElement>(null);
  let navigateSimplyVideoRef = useRef<HTMLVideoElement>(null);
  let foundationEntertainmentVideoRef = useRef<HTMLVideoElement>(null);
  let spinVideoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.mediaContainer}`,
          start: "center 45%",
          pin: true,
        },
      })
      .to(`.${styles.startFrame}`, {
        display: "none",
      })
      .to(`.${styles.headerVideo}`, {
        display: "block",
      })
      .to(`.${styles.introducing}`, {
        opacity: 0,
        duration: 0.3,
      })
      .to(`.${styles.headerVideo}`, {
        // display: 'none',
        delay: 4,
        width: "75%",
        marginTop: "-20rem",
        scrollTrigger: {
          scrub: 1,
        },
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.spatialComputingSection}`,
          start: "top 100%",
          end: "top 70%",
          scrub: 1,
        },
      })
      .to("header", {
        opacity: 0,
      })
      .to(`.${styles.spatialComputingSection} video`, {
        opacity: 0.8,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.spatialComputingSection} h1`,
          start: "top 30%",
          end: "top 20%",
          scrub: 1,
        },
      })
      .to(`.${styles.spatialComputingSection} h1`, {
        opacity: 0,
      })
      .to(`.${styles.spatialComputingSection}`, {
        opacity: 0,
      });

    gsap.from(`.${styles.spatialComputingSection} h1`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.spatialComputingSection} h1`,
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
        onEnter: () => {
          spatialComputingVideoRef.current?.play();
        },
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.spatialComputingSection}`,
          start: "top 100%",
          end: "top 70%",
          scrub: 1,
        },
      })
      .to("header", {
        opacity: 0,
      })
      .to(`.${styles.spatialComputingSection} video`, {
        opacity: 0.8,
      });

    // Physical Space
    firstVideoSectionsAnimation(
      `.${styles.spatialComputingSection}`,
      `.${styles.physicalSpaceSection}`,
      physicalSpaceVideoRef
    );
    // Navigate Simply
    firstVideoSectionsAnimation(
      `.${styles.physicalSpaceSection}`,
      `.${styles.navigateSimplySection}`,
      navigateSimplyVideoRef
    );
    // Foundation Entertainment
    firstVideoSectionsAnimation(
      `.${styles.navigateSimplySection}`,
      `.${styles.foundationEntertainmentSection}`,
      foundationEntertainmentVideoRef
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.closerLookSection}`,
          start: "top 150%",
          end: "top 120%",
          scrub: 1,
        },
      })
      .to(
        `.${styles.page}`,
        {
          backgroundColor: "white",
        },
        "start"
      )
      .to(
        `.navigationBar`,
        {
          backgroundColor: "white",
        },
        "start"
      )
      .to(
        `.deviceTitle`,
        {
          color: "black",
        },
        "start"
      )
      .to(
        `.blueBtn`,
        {
          color: "white",
          backgroundColor: "black",
        },
        "start"
      )


    gsap.from(`.${styles.watch}`, {
      opacity: 0,
      y: 60,
      scrollTrigger: {
        trigger: `.${styles.watch}`,
        scrub: 1,
        start: 'top 100%',
        end: 'top 80%'
      }
    })

    gsap.from(`.${styles.availableText}`, {
      opacity: 0,
      y: 40,
      scrollTrigger: {
        trigger: `.${styles.availableText}`,
        scrub: 1,
        start: 'top 100%',
        end: 'top 80%'
      }
    })

    gsap.to(spinVideoRef.current, {
      scrollTrigger: {
        trigger: spinVideoRef.current,
        start: 'top 80%',
        end: 'top 70%',
        markers: true,
        onEnter: () => {
          // @ts-ignore
          spinVideoRef.current.playbackRate = 1;
          spinVideoRef.current?.play();
        },
        onEnterBack: () => {
          // @ts-ignore
          spinVideoRef.current.playbackRate = -1;
          spinVideoRef.current?.play();
    }
      }
    })

  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.mediaContainer}>
          <img
            className={styles.endFrame}
            src="/assets/vision-pro/hero_endframe.jpeg"
            alt=""
          />
          <img
            className={styles.startFrame}
            src="/assets/vision-pro/hero_startframe.jpg"
            alt=""
          />
          <video
            className={styles.headerVideo}
            src="/assets/vision-pro/hero.mp4"
            muted
            autoPlay
          ></video>
          <div className={styles.introducing}>
            <h3>Introducing</h3>
            <img
              className={styles.logo}
              src="/assets/vision-pro/apple_vision_pro_logo.png"
              alt=""
            />
          </div>
        </div>
      </header>
      <section
        className={`${styles.spatialComputingSection} ${styles.firstVideoSections}`}
      >
        <video
          ref={spatialComputingVideoRef}
          muted
          src="/assets/vision-pro/spatial-computing.mp4"
        ></video>
        <h1>Welcome to the era of spatial computing.</h1>
      </section>
      <section
        className={`${styles.physicalSpaceSection} ${styles.firstVideoSections}`}
      >
        <video
          ref={physicalSpaceVideoRef}
          muted
          src="/assets/vision-pro/physical-space.mp4"
        ></video>
        <h1>
          Apple Vision Pro seamlessly blends
          <br />
          digital content with your physical space.
        </h1>
      </section>
      <section
        className={`${styles.navigateSimplySection} ${styles.firstVideoSections}`}
      >
        <video
          ref={navigateSimplyVideoRef}
          muted
          src="/assets/vision-pro/navigate-simply.mp4"
        ></video>
        <h1>
          You navigate simply by using your
          <br />
          eyes, hands, and voice.
        </h1>
      </section>
      <section
        className={`${styles.foundationEntertainmentSection} ${styles.firstVideoSections}`}
      >
        <video
          ref={foundationEntertainmentVideoRef}
          muted
          src="/assets/vision-pro/foundation-entertainment.mp4"
        ></video>
        <h1>
          So you can do the things you love
          <br />
          in ways never before possible.
          <div style={{ height: "50rem" }}></div>
          You've never seen anything like this before.
        </h1>
      </section>
      <div style={{ marginTop: "-140rem" }}>
        <section className={styles.closerLookSection}>
          <img src="/assets/vision-pro/vision-pro-logo-black.png" alt="" />
          <div className={styles.watch}>
            <h2>Watch the film</h2>
            <h2>Watch the event</h2>
          </div>
          <p className={styles.availableText}>
            Available early next year in the U.S.
          </p>
          <video ref={spinVideoRef} src="/assets/vision-pro/spin-video.mp4" muted></video>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>{" "}
            Take a closer look at Vision Pro
          </button>
        </section>
      </div>
    </div>
  );
}

function firstVideoSectionsAnimation(
  previousSection: string,
  currentSection: string,
  currentSectionVideoRef: React.RefObject<HTMLVideoElement>
) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: `${previousSection} h1`,
        start: "top 20%",
        end: "top 10%",
        scrub: 1,
      },
    })
    .to(`${currentSection} video`, {
      opacity: 0.8,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: `${currentSection} h1`,
        start: "top 30%",
        end: "top 20%",
        scrub: 1,
      },
    })
    .to(`${currentSection} h1`, {
      opacity: 0,
    })
    .to(`${currentSection}`, {
      opacity: 0,
    });

  gsap.from(`${currentSection} h1`, {
    opacity: 0,
    scrollTrigger: {
      trigger: `${previousSection} h1`,
      start: "top 20%",
      end: "bottom top",
      scrub: 1,
      onEnter: () => {
        currentSectionVideoRef.current?.play();
      },
    },
  });
}

export default Page;
