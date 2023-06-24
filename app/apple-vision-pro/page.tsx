"use client";

import React, { useLayoutEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Navbar from "@/app/apple-vision-pro/components/Navbar/Navbar";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/apple-vision-pro/components/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
gsap.registerPlugin(ScrollTrigger);

function Page() {
  let spatialComputingVideoRef = useRef<HTMLVideoElement>(null);
  let physicalSpaceVideoRef = useRef<HTMLVideoElement>(null);
  let navigateSimplyVideoRef = useRef<HTMLVideoElement>(null);
  let foundationEntertainmentVideoRef = useRef<HTMLVideoElement>(null);
  let spinVideoRef = useRef<HTMLVideoElement>(null);
  let experienceAppsVideoRef = useRef<HTMLVideoElement>(null);
  let experienceEntertainmentVideoRef = useRef<HTMLVideoElement>(null);
  let experiencePhotosVideoRef = useRef<HTMLVideoElement>(null);
  let experienceConnectionsVideoRef = useRef<HTMLVideoElement>(null);
  let experienceVisionOSVideoRef = useRef<HTMLVideoElement>(null);
  let spatialAudioVideoRef = useRef<HTMLVideoElement>(null);
  let glassVideoRef = useRef<HTMLVideoElement>(null);
  let designSpinCanvasRef = useRef<HTMLCanvasElement>(null);
  let technologySpinCanvasRef = useRef<HTMLCanvasElement>(null);

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

    // Take a closer look section
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
      );

    gsap.from(`.${styles.watch}`, {
      opacity: 0,
      y: 60,
      scrollTrigger: {
        trigger: `.${styles.watch}`,
        scrub: 1,
        start: "top 100%",
        end: "top 80%",
      },
    });

    gsap.from(`.${styles.availableText}`, {
      opacity: 0,
      y: 40,
      scrollTrigger: {
        trigger: `.${styles.availableText}`,
        scrub: 1,
        start: "top 100%",
        end: "top 80%",
      },
    });

    gsap.to(spinVideoRef.current, {
      scrollTrigger: {
        trigger: spinVideoRef.current,
        start: "top 80%",
        end: "top 70%",
        onEnter: () => {
          // @ts-ignore
          spinVideoRef.current.playbackRate = 1;
          spinVideoRef.current?.play();
        },
        onEnterBack: () => {
          // @ts-ignore
          spinVideoRef.current.playbackRate = -1;
          spinVideoRef.current?.play();
        },
      },
    });

    gsap.to(spatialAudioVideoRef.current, {
      scrollTrigger: {
        trigger: spatialAudioVideoRef.current,
        start: "top 50%",
        end: "top 40%",
        onEnter: () => {
          // @ts-ignore
          spatialAudioVideoRef.current?.play();
        },
        onEnterBack: () => {
          // @ts-ignore
          spatialAudioVideoRef.current?.play();
        },
      },
    });

    //Experience Area
    experienceAnimations(`.${styles.experienceApps}`, experienceAppsVideoRef);
    experienceAnimations(
      `.${styles.experienceEntertainment}`,
      experienceEntertainmentVideoRef
    );
    experienceAnimations(
      `.${styles.experiencePhotos}`,
      experiencePhotosVideoRef
    );
    experienceAnimations(
      `.${styles.experienceConnection}`,
      experienceConnectionsVideoRef
    );
    // experienceVisionOS(`.${styles.experienceVisionOS}`, experienceVisionOSVideoRef);

    //Designed by Apple Spin
    const canvasContext = designSpinCanvasRef.current?.getContext("2d");
    designSpinCanvasRef.current!.width = 1220;
    designSpinCanvasRef.current!.height = 1172;
    const frameCount = 199;
    const currentFrame = (index: number) =>
      `https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.jpg`;
    const images: HTMLImageElement[] = [];
    const imageInfo = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(imageInfo, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        trigger: `.${styles.designSection} canvas`,
        start: "top top",
        end: "bottom top",
      },
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
      canvasContext?.clearRect(
        0,
        0,
        designSpinCanvasRef.current!.width,
        designSpinCanvasRef.current!.height
      );
      canvasContext?.drawImage(images[imageInfo.frame], 0, 0);
    }

    gsap.from(`.${styles.designSection} canvas`, {
      scale: 1.5,
      marginTop: "30rem",
      scrollTrigger: {
        trigger: `.${styles.designSection} canvas`,
        scrub: 1,
        start: "top 80%",
        end: "top 30%",
      },
    });

    gsap.to(`.${styles.designSection} canvas`, {
      scrollTrigger: {
        trigger: `.${styles.designSection} canvas`,
        pin: `.${styles.designSection} canvas`,
        scrub: 1,
        start: "center 60%",
        end: "bottom top",
      },
    });

    gsap.utils.toArray(`.${styles.designSpinText} p`).forEach((text) => {
      // @ts-ignore
      gsap.from(text, {
        opacity: 0,
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
          end: "top 55%",
          scrub: 0.5,
        },
      });

      // @ts-ignore
      gsap.to(text, {
        opacity: 0,
        scrollTrigger: {
          trigger: text,
          start: "top 40%",
          end: "top 30%",
          scrub: 0.5,
        },
      });
    });

    // Experience visionOS Section
    gsap.to(`.${styles.visionOSSection}`, {
      scale: 0.95,
      scrollTrigger: {
        trigger: `.${styles.visionOSSection}`,
        scrub: true,
        start: "bottom center",
        end: "bottom top",
        // markers: true
      },
    });

    gsap.to(`.${styles.textDiv}`, {
      yPercent: -100,
      scrollTrigger: {
        trigger: `.${styles.visionOSSection}`,
        scrub: true,
        start: "top top",
        end: "bottom 60%",
        pin: `.${styles.visionOSSection}`,
      },
    });

    gsap.to(`.${styles.visionOSSection} video`, {
      opacity: 1,
      scrollTrigger: {
        trigger: `.${styles.textDiv}`,
        scrub: true,
        start: "bottom 80%",
        end: "bottom 60%",
      },
    });

    gsap.to(experienceVisionOSVideoRef.current, {
      scrollTrigger: {
        trigger: experienceVisionOSVideoRef.current,
        start: "top 70%",
        end: "top 75%",
        onEnter: () => {
          experienceVisionOSVideoRef.current?.play();
        },
        onEnterBack: () => {
          experienceVisionOSVideoRef.current?.pause();
        },
      },
    });

    gsap.to(glassVideoRef.current, {
      scrollTrigger: {
        trigger: glassVideoRef.current,
        start: "top 70%",
        end: "top 75%",
        onEnter: () => {
          glassVideoRef.current?.play();
        },
        onEnterBack: () => {
          glassVideoRef.current?.pause();
        },
      },
    });

    //Technology Spin
    const technologyCanvasContext =
      technologySpinCanvasRef.current?.getContext("2d");
    technologySpinCanvasRef.current!.width = 960;
    technologySpinCanvasRef.current!.height = 608;
    const technologyFrameCount = 150;
    const technologyCurrentFrame = (index: number) =>
      `/assets/vision-pro/innovation/innovation-${(index + 1)
        .toString()
        .padStart(5, "0")}.webp`;
    const technologyImages: HTMLImageElement[] = [];
    const technologyImageInfo = {
      frame: 0,
    };

    for (let i = 0; i < technologyFrameCount; i++) {
      const img = new Image();
      img.src = technologyCurrentFrame(i);
      technologyImages.push(img);
    }

    gsap.to(technologyImageInfo, {
      frame: technologyFrameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.5,
        trigger: `.${styles.technologyArea} canvas`,
        start: "top 60%",
        end: "top 30%",
      },
      onUpdate: renderTechnology,
    });

    technologyImages[0].onload = renderTechnology;

    function renderTechnology() {
      technologyCanvasContext?.clearRect(
        0,
        0,
        technologySpinCanvasRef.current!.width,
        technologySpinCanvasRef.current!.height
      );
      technologyCanvasContext?.drawImage(
        technologyImages[technologyImageInfo.frame],
        0,
        0
      );
    }

    // gsap.from(`.${styles.technologyArea} canvas`, {
    //   scale: 1.5,
    //   marginTop: "30rem",
    //   scrollTrigger: {
    //     trigger: `.${styles.technologyArea} canvas`,
    //     scrub: 1,
    //     start: "top 80%",
    //     end: "top 30%",
    //   },
    // });

    // gsap.to(`.${styles.technologyArea} canvas`, {
    //   scrollTrigger: {
    //     trigger: `.${styles.technologyArea} canvas`,
    //     pin: `.${styles.technologyArea} canvas`,
    //     scrub: 1,
    //     start: "bottom 60%",
    //     end: "bottom top",
    //   },
    // });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.technologyArea}`,
          start: "top 50",
          end: "top top",
          scrub: 1,
        },
      })
      .to(
        `.navigationBar`,
        {
          backgroundColor: "black",
        },
        "start"
      )
      .to(
        `.deviceTitle`,
        {
          color: "white",
        },
        "start"
      )
      .to(
        `.blueBtn`,
        {
          color: "black",
          backgroundColor: "white",
        },
        "start"
      );

    // gsap.utils.toArray(`.${styles.parts} img`).reverse().forEach((image, index) => {
    //   gsap.to(image, {
    //     yPercent: -60 * (index + 1),
    //     scrollTrigger: {
    //       trigger: technologySpinCanvasRef.current,
    //       start: 'top 60%',
    //       end: 'top 40%',
    //       markers: true,
    //       scrub: 1
    //     }
    //   })
    // })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: technologySpinCanvasRef.current,
          start: "top 60%",
          end: "top 40%",
          scrub: 1,
        },
      })
      .to(
        `.${styles.technologyArea} .${styles.textContainer}`,
        {
          yPercent: -120,
        },
        "begin"
      )
      .to(
        `.${styles.part1}`,
        {
          yPercent: -250,
        },
        "begin"
      )
      .to(
        `.${styles.part2}`,
        {
          yPercent: -200,
        },
        "begin"
      )
      .to(
        `.${styles.part3}`,
        {
          yPercent: -150,
        },
        "begin"
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: technologySpinCanvasRef.current,
          start: "top 65%",
          end: "top 60%",
          scrub: 1,
        },
      })
      .to(
        technologySpinCanvasRef.current,
        {
          opacity: 1,
        },
        "go"
      )
      .to(
        `.${styles.part4}`,
        {
          display: "none",
        },
        "go"
      );

    gsap.from(`.${styles.eyeTrackingSection}`, {
      opacity: 0.6,
      scrollTrigger: {
        trigger: `.${styles.eyeTrackingSection}`,
        start: "top bottom",
        end: "top 80%",
        scrub: true,
      },
    });

    gsap.to(`.${styles.eyeTrackingOff}`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.eyeTrackingSection}`,
        start: "center 60%",
        end: "center 50%",
        scrub: true,
      },
    });

    gsap.from(`.${styles.sensorsSection}`, {
      opacity: 0.6,
      scrollTrigger: {
        trigger: `.${styles.sensorsSection}`,
        start: "top bottom",
        end: "top 80%",
        scrub: true,
      },
    });

    gsap.from(`.${styles.sensorsSome}`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.sensorsSection}`,
        start: "center 75%",
        end: "center 60%",
        scrub: true,
      },
    });


    gsap.from(`.${styles.sensorsAll}`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.sensorsSection}`,
        start: "center 55%",
        end: "center center",
        scrub: true,
      },
    });

    gsap.from(`.${styles.chipSection} img`, {
      opacity: 0.2,
      scale: 0.8,
      scrollTrigger: {
        trigger: `.${styles.chipSection}`,
        start: 'top 80%',
        end: 'top 50%',
        scrub: true
      }
    })

    gsap.to('.icon-security', {
      scrollTrigger: {
        start: 'top 30%',
        end: 'top 10%',
        trigger: '.icon-security',
        toggleClass: 'animate'
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
          You&apos;ve never seen anything like this before.
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
          <video
            ref={spinVideoRef}
            src="/assets/vision-pro/spin-video.mp4"
            muted
          ></video>
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
        <section className={styles.experienceApps}>
          <div className={styles.experienceVideoArea}>
            <video
              ref={experienceAppsVideoRef}
              src="/assets/vision-pro/experience-apps.mp4"
              muted
            ></video>
            <div>
              <h3>Apps</h3>
              <h1>
                Free your desktop.
                <br />
                And your apps will follow.
              </h1>
            </div>
          </div>
          <Container>
            <div className={styles.experienceTextArea}>
              <h2>
                Your apps live in
                <br />
                your space.
              </h2>
              <div>
                <p>
                  With Vision Pro, you have an infinite canvas that transforms
                  how you use the apps you love. Arrange apps anywhere and scale
                  them to the perfect size, making the workspace of your dreams
                  a reality — all while staying present in the world around you.
                  Browse the web in Safari, create a to-do list in Notes, chat
                  in Messages, and seamlessly move between them with a glance.
                </p>
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
                  </svg>
                  Learn more about apps
                </button>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.experienceEntertainment}>
          <div className={styles.experienceVideoArea}>
            <video
              ref={experienceEntertainmentVideoRef}
              src="/assets/vision-pro/experience-entertainment.mp4"
              muted
            ></video>
            <div>
              <h3>Entertainment</h3>
              <h1>
                The ultimate theater.
                <br />
                Wherever you are.
              </h1>
            </div>
          </div>
          <Container>
            <div className={styles.experienceTextArea}>
              <h2>
                An immersive way to
                <br />
                experience
                <br />
                entertainment.
              </h2>
              <div>
                <p>
                  Vision Pro can transform any room into your own personal
                  theater. Expand your movies, shows, and games up to the
                  perfect size while feeling like you’re part of the action with
                  Spatial Audio. And with more pixels than a 4K TV for each eye,
                  you can enjoy stunning content wherever you are — whether
                  that’s a long flight or the couch at home.
                </p>
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
                  </svg>
                  Learn more about entertainment
                </button>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.experiencePhotos}>
          <div className={styles.experienceVideoArea}>
            <video
              ref={experiencePhotosVideoRef}
              src="/assets/vision-pro/experience-photos-videos.mp4"
              muted
            ></video>
            <div>
              <h3>Photos and Videos</h3>
              <h1>
                Be in the moment.
                <br />
                All over again.
              </h1>
            </div>
          </div>
          <Container>
            <div className={styles.experienceTextArea}>
              <h2>
                Your memories
                <br />
                come alive.
              </h2>
              <div>
                <p>
                  Vision Pro is Apple’s first 3D camera. You can capture magical
                  spatial photos and spatial videos in 3D, then relive those
                  cherished moments like never before with immersive Spatial
                  Audio. Your existing library of photos and videos looks
                  incredible at remarkable scale. And panoramas wrap around you
                  — making you feel like you’re standing right where you took
                  them.
                </p>
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
                  </svg>
                  Learn more about photos and videos
                </button>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.experienceConnection}>
          <div className={styles.experienceVideoArea}>
            <video
              ref={experiencePhotosVideoRef}
              src="/assets/vision-pro/experience-connection.mp4"
              muted
            ></video>
            <div>
              <h3>Connection</h3>
              <h1>
                Get on the same page.
                <br />
                In the same space.
              </h1>
            </div>
          </div>
          <Container>
            <div className={styles.experienceTextArea}>
              <h2>
                Make meetings more
                <br />
                meaningful.
              </h2>
              <div>
                <p>
                  Vision Pro makes it easy to collaborate and connect wherever
                  you are. FaceTime video tiles are life-size, and as new people
                  join, the call simply expands in your room. Within FaceTime,
                  you can also use apps to collaborate with colleagues on the
                  same documents simultaneously.
                </p>
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
                  </svg>
                  Learn more about connection
                </button>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.designSection}>
          <div className={styles.textContainer}>
            <h3>Design</h3>
            <h1>Designed by Apple.</h1>
            <p>
              Apple Vision Pro is the result of decades of experience designing
              high‑performance, mobile, and wearable devices — culminating in
              the most ambitious product Apple has ever created. Vision Pro
              integrates incredibly advanced technology into an elegant, compact
              form, resulting in an amazing experience every time you put it on.
            </p>
          </div>
          <canvas ref={designSpinCanvasRef}></canvas>
          <div className={styles.designSpinText}>
            <p className={styles.enclosure}>
              <span>Enclosure.</span> A singular piece of three-dimensionally
              formed laminated glass flows into an aluminum alloy frame that
              curves to wrap around your face.
            </p>
            <p className={`${styles.right} ${styles.lightSeal}`}>
              <span>Light Seal.</span> The Light Seal gently flexes to conform
              to your face, delivering a precise fit while blocking out stray
              light.
            </p>
            <p className={styles.headBand}>
              <span>Head Band.</span> The Head Band provides cushioning,
              breathability, and stretch. The Fit Dial lets you adjust Vision
              Pro precisely to your head.
            </p>
            <p>
              <span>Power.</span> The external battery supports up to 2 hours of
              use, and all‑day use when plugged in.
            </p>
            <p className={`${styles.right} ${styles.sound}`}>
              <span>Sound.</span> Speakers positioned close to your ears deliver
              rich Spatial Audio while keeping you aware of your surroundings.
            </p>
            <p className={styles.eyeSight}>
              <span>EyeSight.</span> An outward display reveals your eyes while
              wearing Vision Pro, letting others know when you are using apps or
              fully immersed.
            </p>
          </div>
        </section>
      </div>
      <div className={styles.afterSpin}>
        <div className={styles.mediaGrid}>
          <img src="/assets/vision-pro/glass_top.jpg" alt="" />
          <img src="/assets/vision-pro/glass_side.jpg" alt="" />
          <video
            ref={glassVideoRef}
            src="/assets/vision-pro/glass.mp4"
            muted
          ></video>
        </div>
        <p className={styles.someParagraph}>
          A singular piece of{" "}
          <span>three-dimensionally formed laminated glass</span> acts as an
          optical surface for the cameras and sensors that view the world. It
          flows seamlessly into a <span>custom aluminum alloy frame</span> that
          gently curves to wrap around your face while serving as an attachment
          point for the <span>Light Seal</span>.
        </p>
        <img
          style={{ margin: "0 auto", display: "block" }}
          src="/assets/vision-pro/light_seal.jpeg"
          alt=""
        />
        <button className={styles.someButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          Learn more about connection
        </button>
        <div className={`${styles.visionOSSection}`}>
          <video
            ref={experienceVisionOSVideoRef}
            src="/assets/vision-pro/experience-visionos.mp4"
            muted
          ></video>
          <div className={styles.textDiv}>
            <h3>visionOS</h3>
            <h1>
              Apple’s first spatial
              <br />
              operating system.
            </h1>
          </div>
        </div>
        <Container>
          <div className={styles.experienceTextArea}>
            <h2>
              Interaction designed
              <br />
              for spatial computing.
            </h2>
            <div>
              <p>
                Built on the foundation of macOS, iOS, and iPadOS, visionOS
                enables powerful spatial experiences. Control Vision Pro with
                your eyes, hands, and voice — interactions feel intuitive and
                magical. Simply look at an element, tap your fingers together to
                select, and use the virtual keyboard or dictation to type.
              </p>
            </div>
          </div>
        </Container>
        <div className={styles.mediaGrid}>
          <img src="/assets/vision-pro/scaling_ui.jpg" alt="" />
          <img src="/assets/vision-pro/spatial_interaction.jpeg" alt="" />
        </div>
        <Container>
          <div className={styles.experienceTextArea}>
            <h2>Apps leap into life.</h2>
            <div>
              <p>
                In visionOS, apps can fill the space around you, beyond the
                boundaries of a display. They can be moved anywhere, scaled to
                the perfect size, react to the lighting in your room, and even
                cast shadows.{" "}
              </p>
            </div>
          </div>
        </Container>
        <Swiper
          slidesPerView={1.3}
          centeredSlides={true}
          spaceBetween={30}
          // loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <img
                style={{ width: "100%", opacity: isActive ? 1 : 0.5 }}
                src="/assets/vision-pro/environment_moon.jpg"
                alt=""
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <img
                style={{ width: "100%", opacity: isActive ? 1 : 0.5 }}
                src="/assets/vision-pro/environment_moon.jpg"
                alt=""
              />
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <img
                style={{ width: "100%", opacity: isActive ? 1 : 0.5 }}
                src="/assets/vision-pro/environment_moon.jpg"
                alt=""
              />
            )}
          </SwiperSlide>
        </Swiper>
        <Container>
          <div className={styles.experienceTextArea}>
            <h2>
              Expand your
              <br />
              surroundings.
            </h2>
            <div>
              <p>
                Environments let you transform the space around you, so apps can
                extend beyond the dimensions of your room. Choose from a
                selection of beautiful landscapes, or magically replace your
                ceiling with a clear, open sky. The Digital Crown gives you full
                control over how immersed you are.
              </p>
            </div>
          </div>
        </Container>
        <img
          style={{
            width: "144rem",
            display: "block",
            margin: "0 auto",
            marginTop: "10rem",
          }}
          src="/assets/vision-pro/around_you.jpg"
          alt=""
        />
        <Container>
          <div className={styles.experienceTextArea}>
            <h2>
              Stay connected to
              <br />
              people around you.
            </h2>
            <div>
              <p>
                Vision Pro helps you remain connected to those around you.
                EyeSight reveals your eyes and lets those nearby know when
                you’re using apps or fully immersed in an experience. When
                someone approaches, Vision Pro simultaneously lets you see the
                person and reveals your eyes to them.{" "}
              </p>
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
                </svg>
                Learn more about visionOS
              </button>
            </div>
          </div>
        </Container>
        <div className={styles.technologyArea}>
          <div className={styles.textContainer}>
            <h3>Technology</h3>
            <h1>
              Innovation you can
              <br />
              see, hear, and feel.
            </h1>
            <p>
              <span>Pushing boundaries from the inside out.</span> Spatial
              experiences on Vision Pro are only possible through groundbreaking
              Apple technology. Displays the size of a postage stamp that
              deliver more pixels than a 4K TV to each eye. Incredible advances
              in Spatial Audio. A revolutionary dual‑chip design featuring
              custom Apple silicon. A sophisticated array of cameras and
              sensors. All the elements work together to create an unprecedented
              experience you have to see to believe.
            </p>
          </div>
          <div className={styles.parts}>
            <canvas ref={technologySpinCanvasRef}></canvas>
            <img
              className={styles.part2}
              src="/assets/vision-pro/parts_0002.png"
              alt=""
            />
            <img
              className={styles.part3}
              src="/assets/vision-pro/parts_0003.png"
              alt=""
            />
            <img
              className={styles.part1}
              src="/assets/vision-pro/parts_0001.png"
              alt=""
            />
            <img
              className={styles.part4}
              src="/assets/vision-pro/parts_0007.png"
              alt=""
            />
          </div>

          <div
            style={{
              maxWidth: "77rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
          >
            <h2 className={styles.specsHeading}>
              More pixels than a 4K TV. For each eye.
            </h2>
            <p className={styles.specsBody}>
              The <span>custom micro‑OLED display system</span> features 23
              million pixels, delivering stunning resolution and colors. And a
              specially designed three‑element lens creates the feeling of a
              display that’s everywhere you look.
            </p>
          </div>

          <div className={styles.spatialAudioContainer}>
            <video
              ref={spatialAudioVideoRef}
              src="/assets/vision-pro/spatial-audio.mp4"
              muted
            ></video>
            <div className={styles.spatialAudioText}>
              <Container>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                  }}
                >
                  <h2
                    style={{ textAlign: "left", width: "46.5rem" }}
                    className={styles.specsHeading}
                  >
                    Our most advanced <br />
                    Spatial Audio system ever.
                  </h2>
                  <p
                    style={{ textAlign: "left", maxWidth: "46.5rem" }}
                    className={styles.specsBody}
                  >
                    Dual-driver audio pods positioned next to each ear deliver
                    personalized sound while letting you hear what’s around you.
                    Ambient <span>Spatial Audio</span> makes sounds feel like
                    they’re coming from your surroundings. And with audio
                    raytracing, Vision Pro analyzes your room’s acoustic
                    properties — including the physical materials — to adapt and
                    match sound to your space.
                  </p>
                </div>
              </Container>
            </div>
          </div>
          <div className={styles.eyeTrackingSection}>
            <img
              className={styles.eyeTrackingOff}
              src="/assets/vision-pro/eye_tracking.jpg"
              alt=""
            />
            <img
              className={styles.eyeTrackingOn}
              src="/assets/vision-pro/eye_tracking_on.jpeg"
              alt=""
            />
          </div>
          <div
            style={{
              maxWidth: "74rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "10rem auto",
            }}
          >
            <h2 className={styles.specsHeading}>
              Responsive, precision eye tracking.{" "}
            </h2>
            <p className={styles.specsBody}>
              A high-performance eye tracking system of <span>LEDs</span> and{" "}
              <span>infrared cameras</span> projects invisible light patterns
              onto each eye. This advanced system provides ultraprecise input
              without your needing to hold any controllers, so you can
              accurately select elements just by looking at them.
            </p>
          </div>
          <div className={styles.sensorsSection}>
            <img
              className={styles.sensorsAll}
              src="/assets/vision-pro/sensors_all.jpeg"
              alt=""
            />
            <img
              className={styles.sensorsSome}
              src="/assets/vision-pro/sensors_mapping.jpeg"
              alt=""
            />
            <img
              className={styles.sensorsOff}
              src="/assets/vision-pro/sensors_off.jpg"
              alt=""
            />
          </div>
          <div
            style={{
              maxWidth: "74rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "10rem auto",
            }}
          >
            <h2 className={styles.specsHeading}>
              A sophisticated sensor array.
            </h2>
            <p className={styles.specsBody}>
              A pair of <span>high-resolution cameras</span> transmit over one
              billion pixels per second to the displays so you can see the world
              around you clearly. The system also helps deliver{" "}
              <span>precise head and hand tracking</span> and{" "}
              <span>real‑time 3D mapping</span>, all while understanding your
              hand gestures from a wide range of positions.
            </p>
          </div>
          <div className={styles.chipSection}>
            <img src="/assets/vision-pro/sensors_chips.jpg" alt="" />
            <div
                style={{
                  maxWidth: "72.7rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 auto",
                }}
            >
              <h2 className={styles.specsHeading}>
                Revolutionary dual‑chip
                <br />
                performance.
              </h2>
              <p className={styles.specsBody}>
                A unique dual‑chip design enables the spatial experiences on
                Vision Pro. The powerful <span>M2</span> chip simultaneously runs visionOS,
                executes advanced computer vision algorithms, and delivers
                stunning graphics, all with incredible efficiency. And the
                brand-new <span>R1</span> chip is specifically dedicated to process input from
                the cameras, sensors, and microphones, streaming images to the
                displays within 12 milliseconds — for a virtually lag-free,
                real-time view of the world.
              </p>
            </div>
            <button style={{backgroundColor: 'white', borderColor: 'white', color: 'black', marginLeft: 'auto', marginRight: 'auto', marginTop: '7rem'}} className={styles.someButton}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus"
                  viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              Learn more about technology
            </button>
          </div>
        </div>
        <div
            className={styles.privacySection}
        >
          <figure className="icon-security" role="img" aria-hidden="true"
                  data-anim-keyframe="{&quot;start&quot;:&quot;t - 50vh&quot;,&quot;cssClass&quot;:&quot;animate&quot;}"
                  data-anim-lazy-image-download-complete=""></figure>
          <h3>Privacy and Security</h3>
          <h1>When it comes to privacy,<br/>we don&apos;t blink.</h1>
          <p><span>Privacy and security built in.</span> Like every Apple product and service, Vision Pro was designed to help protect your privacy and keep you in control of your data. It builds on the foundation of existing Apple privacy and security features with new technologies like Optic ID, a secure authentication system that uses the uniqueness of your iris.</p>
          <button style={{marginTop: '7rem'}} className={styles.someButton}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            Learn more about privacy and security
          </button>
        </div>
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

function experienceAnimations(
  section: string,
  sectionVideoRef: React.RefObject<HTMLVideoElement>
) {
  gsap.to(`${section} .${styles.experienceVideoArea} div`, {
    yPercent: -60,
    scrollTrigger: {
      trigger: `${section} .${styles.experienceVideoArea}`,
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: `${section} .${styles.experienceVideoArea}`,
    },
  });

  gsap.to(`${section} .${styles.experienceVideoArea} video`, {
    opacity: 1,
    scrollTrigger: {
      trigger: `${section} .${styles.experienceVideoArea}`,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(`${section} .${styles.experienceVideoArea}`, {
    scrollTrigger: {
      trigger: `${section} .${styles.experienceVideoArea}`,
      start: "top 70%",
      end: "top 75%",
      onEnter: () => {
        sectionVideoRef.current?.play();
      },
      onEnterBack: () => {
        sectionVideoRef.current?.pause();
      },
    },
  });

  gsap.to(`${section} .${styles.experienceVideoArea}`, {
    scale: 0.95,
    scrollTrigger: {
      trigger: `${section} .${styles.experienceVideoArea}`,
      start: "bottom 95%",
      end: "bottom top",
      scrub: true,
    },
  });
}
function experienceVisionOS(
  section: string,
  sectionVideoRef: React.RefObject<HTMLVideoElement>
) {
  gsap.to(`${section} .${styles.experienceVideoArea} div`, {
    yPercent: -60,
    scrollTrigger: {
      trigger: `${section} .${styles.experienceVideoArea} video`,
      start: "bottom+=50% top",
      end: "bottom+=120% top",
      scrub: true,
      pin: `${section} .${styles.experienceVideoArea}`,
      markers: true,
    },
  });

  gsap.to(`${section} .${styles.experienceVideoArea} video`, {
    opacity: 1,
    scrollTrigger: {
      trigger: `${section} .${styles.experienceVideoArea}`,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to(`${section} .${styles.experienceVideoArea}`, {
    scrollTrigger: {
      trigger: `${section} .${styles.experienceVideoArea}`,
      start: "top 70%",
      end: "top 75%",
      onEnter: () => {
        sectionVideoRef.current?.play();
      },
      onEnterBack: () => {
        sectionVideoRef.current?.pause();
      },
    },
  });

  gsap.to(`${section} .${styles.experienceVideoArea}`, {
    scale: 0.95,
    scrollTrigger: {
      trigger: `${section} .${styles.experienceVideoArea}`,
      start: "bottom 95%",
      end: "bottom top",
      scrub: true,
    },
  });
}

export default Page;
