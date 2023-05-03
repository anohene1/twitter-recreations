"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Navbar from "@/app/ipad-mini/components/Navbar/Navbar";
import ipadMiniLottieAnimation from "@/public/assets/ipad-mini/lotties/hero_animation_lottie.json";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/app/ipad-mini/components/Container/Container";
import BrightnessSVG from "@/public/assets/ipad-mini/brightness.svg";
import TrueToneSVG from "@/public/assets/ipad-mini/truetone.svg";
import ColorGamutSVG from "@/public/assets/ipad-mini/color-gamut.svg";
import A15SVG from "@/public/assets/ipad-mini/a15.svg";
import GPUSVG from "@/public/assets/ipad-mini/gpu.svg";
import FiveGSVG from "@/public/assets/ipad-mini/5g.svg";
import WifiSVG from "@/public/assets/ipad-mini/wifi.svg";
import CenterStageSVG from "@/public/assets/ipad-mini/center-stage.svg";
import CameraSVG from "@/public/assets/ipad-mini/camera.svg";
import RearCameraSVG from "@/public/assets/ipad-mini/rear-camera.svg";
import TrueToneFlashSVG from "@/public/assets/ipad-mini/true-tone-flash.svg";
import LandscapeiPad from "@/app/ipad-mini/components/LandscapeiPad/LandscapeiPad";
import PortraitiPad from "@/app/ipad-mini/components/PortraitiPad/PortraitiPad";
import Marquee from "react-fast-marquee";
gsap.registerPlugin(ScrollTrigger);

function Page() {
  let heroVideoRef = useRef<HTMLVideoElement>(null);
  let ipadLMiniLottieAnimationRef = useRef<LottieRefCurrentProps | null>(null);
  let spinCanvasRef = useRef<HTMLCanvasElement>(null);

  const playHeroVideo = () => {
    heroVideoRef.current?.play();
    // @ts-ignore
    gsap.to(ipadLMiniLottieAnimationRef.current.animationContainerRef.current, {
      opacity: 0,
      display: "none",
    });

    gsap.to(`.${styles.introHeading}`, {
      opacity: 1,
      y: 0,
      delay: 2.8,
      duration: 1,
    });
  };

  useEffect(() => {
    ipadLMiniLottieAnimationRef.current?.play();

    // Make header smaller and increase border radius
    gsap.to(`.${styles.header}`, {
      clipPath: "inset(5% 3% round 50px)",
      scrollTrigger: {
        trigger: "header",
        pin: true,
        scrub: true,
        start: "top",
        end: "bottom-=88",
      },
    });

    // Pin spin section and scroll through images
    gsap.to(`.${styles.spinSection}`, {
      scrollTrigger: {
        trigger: `.${styles.spinSection}`,
        pin: true,
        scrub: true,
        start: "top 52",
        end: "bottom 20%",
      },
    });

    gsap.utils.toArray(`.${styles.spinText}`).forEach((section) => {
      // @ts-ignore
      gsap.to(section, {
        y: "-250%",
        scrollTrigger: {
          scrub: true,
          trigger: `.${styles.spinSection}`,
          start: "top 52",
          end: "bottom top",
        },
      });
    });

    const canvasContext = spinCanvasRef.current?.getContext("2d");
    spinCanvasRef.current!.width = 1600;
    spinCanvasRef.current!.height = 1176;
    const frameCount = 225;
    const currentFrame = (index: number) =>
      `/assets/ipad-mini/hero-spin/ipad-mini-spin-${(index + 1)
        .toString()
        .padStart(5, "0")}.webp`;
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
        trigger: `.${styles.spinSection}`,
        start: "top 50%",
      },
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
      canvasContext?.clearRect(
        0,
        0,
        spinCanvasRef.current!.width,
        spinCanvasRef.current!.height
      );
      canvasContext?.drawImage(images[imageInfo.frame], 0, 0);
    }

    // Features Section
    gsap.from(`.${styles.featuresSection}`, {
      clipPath: "inset(1% 3% round 50px)",
      scrollTrigger: {
        trigger: `.${styles.featuresSection}`,
        start: "top 20%",
        end: "top 52px",
        scrub: 2,
      },
    });
    gsap.utils
      .toArray(`.${styles.featureHighlights} h1, .${styles.links} a`)
      .forEach((highlight) => {
        // @ts-ignore
        gsap.from(highlight, {
          opacity: 0,
          scrollTrigger: {
            trigger: highlight,
            scrub: true,
            start: "top 80%",
            end: "top 65%",
          },
        });
      });

    // Play videos when they react 80% of the viewport from the top
    gsap.utils.toArray("section video").forEach((video) => {
      // @ts-ignore
      gsap.to(video, {
        scrollTrigger: {
          trigger: video,
          scrub: true,
          start: "top 80%",
          onEnter: () => {
            // @ts-ignore
            video.play();
          },
        },
      });
    });

    gsap.utils
      .toArray(
        `.${styles.designTextGradient}, .${styles.cameraGradientText}, .${styles.designPointText} h3, .${styles.cameraPointText} h3`
      )
      .forEach((text) => {
        // @ts-ignore
        gsap.from(text, {
          backgroundImage:
            "linear-gradient(90deg, rgb(237, 24, 106) -300%, rgb(255, 103, 0) -200%, rgb(255, 203, 57) -100%, rgb(29, 29, 31) 0%)",
          duration: 1.5,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          },
        });
      });

    gsap.utils
      .toArray(
        `.${styles.powerfulTextGradient}, .${styles.powerfulPointText} h3`
      )
      .forEach((text) => {
        // @ts-ignore
        gsap.from(text, {
          backgroundImage:
            "linear-gradient(90deg, rgb(30, 0, 255) -400%, rgb(112, 43, 252) -300%, rgb(242, 59, 255) -200%, rgb(255, 112, 118) -100%, rgb(29, 29, 31) 0%)",
          duration: 1.5,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          },
        });
      });

    gsap.utils
      .toArray(
        `.${styles.downloadGradientText}, .${styles.downloadPointText} h3`
      )
      .forEach((text) => {
        // @ts-ignore
        gsap.from(text, {
          backgroundImage:
            "linear-gradient(90deg, rgb(0, 153, 192) -500%, rgb(0, 192, 112) -400%, rgb(105, 220, 195) -300%, rgb(245, 219, 93) -200%, rgb(255, 136, 39) -100%, rgb(29, 29, 31) 0%)",
          duration: 1.5,
          scrollTrigger: {
            trigger: text,
            start: "top 80%",
          },
        });
      });

    gsap.utils.toArray(`.${styles.appsGradientText}`).forEach((text) => {
      // @ts-ignore
      gsap.from(text, {
        backgroundImage:
          "linear-gradient(90deg, rgb(114, 60, 238) -500%, rgb(8, 79, 186) -400%, rgb(61, 152, 248) -300%, rgb(97, 219, 184) -200%, rgb(0, 207, 156) -100%, rgb(29, 29, 31) 0%)",
        duration: 1.5,
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
          toggleActions: "play none reverse none",
        },
      });
    });
  });

  return (
    <div className={styles.page}>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.lottieContainer}>
          <Lottie
            animationData={ipadMiniLottieAnimation}
            loop={false}
            autoPlay={false}
            style={{ height: "60px" }}
            lottieRef={ipadLMiniLottieAnimationRef}
            onComplete={playHeroVideo}
          />
        </div>
        <video
          ref={heroVideoRef}
          muted
          src="/assets/ipad-mini/hero-video.mp4"
        ></video>
        <h1 className={styles.introHeading}>
          Mega power. <br /> Mini sized.
        </h1>
      </header>
      <section className={styles.spinSection}>
        <div className={styles.spinTextArea}>
          <div className={styles.spinText}>
            <h1>
              <span className={styles.spinGradient1}>The magic of iPad.</span>
              <br />
              In the palm
              <br />
              of your hand
            </h1>
          </div>
          <div className={styles.spinText}>
            <h1>
              Where <span className={styles.spinGradient2}>big ideas</span>
              <br />
              come to life.
            </h1>
          </div>
          <div className={styles.spinText}>
            <h1>
              With <span className={styles.spinGradient3}>power</span>
              <br />
              that packs a<br />
              punch.
            </h1>
          </div>
        </div>
        <canvas ref={spinCanvasRef}></canvas>
      </section>
      <section className={styles.featuresSection}>
        <Container>
          <div className={`${styles.featureHighlights} ${styles.ml83}`}>
            <h1>New all‑screen design.</h1>
            <h1>Powerful A15 Bionic chip.</h1>
            <h1>Superfast 5G.</h1>
            <h1>Support for Apple Pencil.</h1>
            <h1>
              Now in four
              <br />
              gorgeous colors.
            </h1>
            <h1>A device unlike any other.</h1>
          </div>
          <div className={`${styles.links} ${styles.ml83}`}>
            <a href="">Watch the film</a>
            <a href="">Watch the event</a>
          </div>
          <div className={`${styles.design} ${styles.ml83}`}>
            <h1 className={styles.sectionHeading}>
              All-screen{" "}
              <img
                src="/assets/ipad-mini/design_headline__f48vod07cn22_large.png"
                alt="design"
              />
              <br />
              Stunning all round.
            </h1>
            <p className={styles.sectionDescription}>
              iPad mini is meticulously designed to be absolutely beautiful. An
              all-new enclosure features a new, larger{" "}
              <span className={styles.designTextGradient}>
                edge-to-edge screen
              </span>
              , along with narrow borders and elegant rounded corners.
            </p>
            <video muted src="/assets/ipad-mini/all-screen-design.mp4"></video>
          </div>
          <div className={styles.designGrid}>
            <p className={`${styles.sectionDescription}  ${styles.ml83}`}>
              The{" "}
              <span className={styles.designTextGradient}>
                8.3-inch Liquid Retina display
              </span>{" "}
              features True Tone, P3 wide color, and ultralow reflectivity,
              making text sharp and colors vivid, wherever you are.
            </p>
            <div></div>
            <img
              className={styles.liquidImage1}
              src="/assets/ipad-mini/liquid_retina_1__e0zmhecfvc66_large.jpg"
              alt=""
            />
            <img
              className={styles.liquidImage2}
              src="/assets/ipad-mini/liquid_retina_2__57cnueeqv2a6_large.png"
              alt=""
            />
            <div></div>
            <div className={styles.designPoints}>
              <div className={styles.designPoint}>
                <BrightnessSVG />
                <div className={styles.designPointText}>
                  <h3>500 nits</h3>
                  <p>peak brightness</p>
                </div>
              </div>
              <div className={styles.designPoint}>
                <TrueToneSVG />
                <div className={styles.designPointText}>
                  <h3>True Tone</h3>
                  <p>for comfortable viewing</p>
                </div>
              </div>
              <div className={styles.designPoint}>
                <ColorGamutSVG />
                <div className={styles.designPointText}>
                  <h3>P3</h3>
                  <p>wide color gamut</p>
                </div>
              </div>
            </div>
            <p
              className={`${styles.sectionDescription}  ${styles.ml83} ${styles.pencilDescription}`}
            >
              Apple Pencil{" "}
              <span className={styles.designTextGradient}>
                attaches magnetically
              </span>{" "}
              to the side of iPad mini, so it’s always with you and ready for a
              spur-of-the-moment sketch or spontaneous brainstorming session.
            </p>
            <div className={styles.applePencilVideoContainer}>
              <video muted src="/assets/ipad-mini/apple-pencil.mp4"></video>
            </div>
            <div className={styles.colorsContainer}>
              <img
                src="/assets/ipad-mini/new_design__227ki0c376am_large.png"
                alt=""
              />
            </div>
            <p
              className={`${styles.sectionDescription} ${styles.colorsDescription}`}
            >
              iPad mini comes in{" "}
              <span className={styles.designTextGradient}>
                four gorgeous colors
              </span>
              . And the new{" "}
              <span className={styles.designTextGradient}>
                landscape stereo speakers
              </span>{" "}
              are great when you’re watching a show by the pool or listening to
              your favorite playlist at the park.
            </p>
            <p className={`${styles.sectionDescription} ${styles.ml83}`}>
              <span className={styles.designTextGradient}>Touch ID</span> is
              integrated into the top button for fast, easy, and secure
              authentication. Use your fingerprint to unlock your iPad or
              quickly and securely make a payment.
            </p>
            <div></div>
            <video
              muted
              className={styles.touchIDVideo}
              src="/assets/ipad-mini/touch-id.mp4"
            ></video>
          </div>
        </Container>
      </section>
      <div
        style={{
          height: "25rem",
          backgroundImage: "linear-gradient(0deg,#f5f5f7,white)",
        }}
      ></div>
      <section className={styles.powerfulSection}>
        <Container>
          <h1 className={`${styles.ml83} ${styles.sectionHeading}`}>
            Small is the
            <br />
            new
            <img
              src="/assets/ipad-mini/powerful_headline__eihwam1ozt6q_large.png"
              alt="design"
            />
          </h1>
          <p
            className={`${styles.sectionDescription} ${styles.ml83}`}
            style={{ maxWidth: "63rem" }}
          >
            The new{" "}
            <span className={styles.powerfulTextGradient}>A15 Bionic chip</span>{" "}
            makes iPad mini just as powerful as it is portable. Whether you’re
            tearing through your inbox or editing photos with Photoshop, it has
            the power to do it all. Use advanced apps, capture brilliant
            content, and bring your creative projects to life, anywhere.
          </p>
          <div className={styles.powerfulImageContainer}>
            <img
              src="/assets/ipad-mini/powerful__d1ovm97x21aq_large.jpg"
              alt=""
            />
          </div>
        </Container>
        <div
          style={{
            height: "15rem",
            backgroundImage: "linear-gradient(0deg,#f5f5f7,white)",
          }}
        ></div>
        <Container>
          <div className={styles.powerfulGrid}>
            <div className={styles.ml83} style={{ marginTop: "2rem" }}>
              <p className={`${styles.sectionDescription}`}>
                Delivering up to <br />
                <span className={styles.powerfulTextGradient}>
                  40 percent faster CPU
                </span>{" "}
                <br />
                performance and, with the <br />
                Apple Neural Engine, up to <br />
                <span className={styles.powerfulTextGradient}>
                  2x faster machine <br />
                  learning
                </span>
                . So you can blaze <br />
                through your workday, <br />
                studio session, and more.
              </p>
              <div className={styles.powerfulPoint}>
                <A15SVG />
                <div className={styles.powerfulPointText}>
                  <h3>6-core CPU</h3>
                  <p>Up to 40% faster performance</p>
                </div>
              </div>
            </div>
            <div className={styles.fasterImageContainer}>
              <img
                src="/assets/ipad-mini/faster__co0ou77s8m4i_large.png"
                alt=""
              />
            </div>
            <div className={styles.graphicsImageContainer}>
              <img
                src="/assets/ipad-mini/graphics__cl1a46xc3piu_large.jpg"
                alt=""
              />
            </div>
            <div className={styles.ml83} style={{ marginTop: "11rem" }}>
              <p
                className={styles.sectionDescription}
                style={{ maxWidth: "32.7rem" }}
              >
                And with up to{" "}
                <span className={styles.powerfulTextGradient}>
                  80 percent faster graphics
                </span>
                , iPad mini lets you immerse yourself in whatever you do. Use
                realistic brushes to create a watercolor, experience unreal AR,
                and play graphics-intensive games.
              </p>
              <div className={styles.powerfulPoint}>
                <GPUSVG />
                <div className={styles.powerfulPointText}>
                  <h3>5-core GPU</h3>
                  <p>Up to 80% faster graphics</p>
                </div>
              </div>
            </div>
            <div className={styles.ml83} style={{ marginTop: "13rem" }}>
              <p
                className={`${styles.sectionDescription}`}
                style={{ maxWidth: "28.6rem" }}
              >
                iPad mini has{" "}
                <span className={styles.powerfulTextGradient}>
                  all-day battery life
                </span>
                , so it’s always ready for any task or project.3 Keep working,
                creating, and playing — without missing a beat.
              </p>
            </div>
            <div className={styles.batteryImageContainer}>
              <img
                src="/assets/ipad-mini/battery__bj20nc81hmhe_large.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.downloadSection}>
        <Container>
          <h1 className={`${styles.ml83} ${styles.sectionHeading}`}>
            Upload.{" "}
            <img
              src="/assets/ipad-mini/download_headline__bylr6a8vfv42_large.png"
              alt="design"
              style={{ marginBottom: 0 }}
            />
            <br />
            On the road.
          </h1>
          <div className={styles.downloadGrid}>
            <div className={styles.cellularImageContainer}>
              <img
                src="/assets/ipad-mini/cellular__d9d3owuqgbo2_large.jpg"
                alt=""
              />
            </div>
            <div
              style={{
                position: "relative",
                maxWidth: "36.3rem",
                justifySelf: "center",
                paddingTop: "13rem",
              }}
            >
              <p className={styles.sectionDescription}>
                Join superfast{" "}
                <span className={styles.downloadGradientText}>5G</span> wireless
                networks when you’re on the go. Download files, play multiplayer
                games, stream movies, check in with friends, and more.
              </p>
              <div className={`${styles.links}`} style={{ marginTop: "3rem" }}>
                <a href="">Learn more about cellular</a>
              </div>
              <div className={styles.downloadPoints}>
                <div className={styles.downloadPoint}>
                  <FiveGSVG />
                  <div className={styles.downloadPointText}>
                    <h3>5G connectivity</h3>
                    <p>Superfast downloads and high-quality streaming</p>
                  </div>
                </div>
                <div className={styles.downloadPoint}>
                  <WifiSVG />
                  <div className={styles.downloadPointText}>
                    <h3>Wi-Fi 6</h3>
                    <p>Fastest Wi-Fi available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div
          style={{
            height: "15rem",
            backgroundImage: "linear-gradient(0deg,#f5f5f7,white)",
          }}
        ></div>
        <Container>
          <div className={styles.downloadGrid}>
            <p
              className={`${styles.sectionDescription} ${styles.ml83}`}
              style={{ maxWidth: "29.7rem", paddingTop: "10rem" }}
            >
              Fast wireless connections are critical to getting things done.
              With <span className={styles.downloadGradientText}>Wi‑Fi 6</span>{" "}
              now on iPad mini, rest assured that you have the fastest Wi‑Fi
              available.
            </p>
            <div className={styles.wifiImageContainer}>
              <img
                src="/assets/ipad-mini/wifi__dar40e7xl7ee_large.png"
                alt=""
              />
            </div>
            <div className={styles.usbCImageContainer}>
              <img
                src="/assets/ipad-mini/usb_c__b3lm085u02mq_large.jpg"
                alt=""
              />
            </div>
            <p
              className={`${styles.sectionDescription}`}
              style={{
                maxWidth: "29.7rem",
                position: "relative",
                marginLeft: "17rem",
                marginTop: "5rem",
              }}
            >
              Connect and charge with the versatile{" "}
              <span className={styles.downloadGradientText}>USB-C</span> port.
              Plug in accessories to make music, run your business, and more.
            </p>
          </div>
        </Container>
      </section>
      <section className={styles.cameraSection}>
        <Container>
          <h1 className={`${styles.ml83} ${styles.sectionHeading}`}>
            Ultra Wide.{" "}
            <img
              src="/assets/ipad-mini/camera_headline__bb3xid8k50fm_large_2x.png"
              alt="design"
              style={{ marginBottom: 0, height: 49 }}
            />
            <br />
            Ultrafun Possibilities.
          </h1>
          <div className={styles.cameraSectionGrid}>
            <div className={styles.centerStageImageContainer}>
              <img
                src="/assets/ipad-mini/camera_hardware__ba12z2wka1lu_large.png"
                alt=""
              />
              <video muted src="/assets/ipad-mini/center-stage.mp4"></video>
            </div>
            <div
              style={{
                position: "relative",
                maxWidth: "34rem",
                justifySelf: "end",
                paddingTop: "6rem",
              }}
            >
              <p className={styles.sectionDescription}>
                <span className={styles.cameraGradientText}>Center Stage</span>{" "}
                makes video calls even more engaging. As you move around, the
                camera automatically pans to{" "}
                <span className={styles.cameraGradientText}>
                  keep you centered in the frame
                </span>
                . When others join or leave the call, the view expands or zooms
                in.
              </p>

              <div className={styles.cameraPoints}>
                <div className={styles.cameraPoint}>
                  <CameraSVG />
                  <div className={styles.cameraPointText}>
                    <h3>12MP</h3>
                    <p>Ultra Wide front camera</p>
                  </div>
                </div>
                <div className={styles.cameraPoint}>
                  <CenterStageSVG />
                  <div className={styles.cameraPointText}>
                    <h3>Center Stage</h3>
                    <p>For more natural calls</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                maxWidth: "34rem",
                paddingTop: "5rem",
              }}
              className={styles.ml83}
            >
              <p className={styles.sectionDescription}>
                The{" "}
                <span className={styles.cameraGradientText}>Wide camera</span>{" "}
                on the back of iPad mini features a 12MP sensor with Focus
                Pixels and a large aperture to capture sharp, vivid photos. And
                the new ISP in the A15 Bionic chip enables Smart HDR 3, for
                capturing even higher-quality images.
              </p>

              <div className={styles.cameraPoints}>
                <div className={styles.cameraPoint}>
                  <RearCameraSVG />
                  <div className={styles.cameraPointText}>
                    <h3>12MP</h3>
                    <p>Wide back camera</p>
                  </div>
                </div>
                <div className={styles.cameraPoint}>
                  <TrueToneFlashSVG />
                  <div className={styles.cameraPointText}>
                    <h3>True Tone flash</h3>
                    <p>Improves photos in low life</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.rearCameraImageContainer}>
              <img
                src="/assets/ipad-mini/rear_camera__fz8iheny7kia_large.png"
                alt=""
              />
            </div>
            <div className={`${styles.scanImageContainer} ${styles.ml83}`}>
              <img
                src="/assets/ipad-mini/scan_documents__fhznf63b2zu6_large.png"
                alt=""
              />
            </div>
            <p
              className={styles.sectionDescription}
              style={{
                maxWidth: "34rem",
                justifySelf: "center",
                paddingTop: "3rem",
              }}
            >
              The back camera also has a True Tone flash, so you can take great
              photos in any light, or{" "}
              <span className={styles.cameraGradientText}>scan documents</span>{" "}
              and then mark them up. And iPad mini can now{" "}
              <span className={styles.cameraGradientText}>record in 4k</span>,
              making it your mobile movie studio.{" "}
            </p>
          </div>
        </Container>
      </section>
      <section className={styles.essentialsSection}>
        <Container>
          <h1
            className={`${styles.ml83} ${styles.sectionHeading}`}
            style={{ position: "relative", zIndex: 5 }}
          >
            Apple Pencil. Smart Folio.
            <br />
            Everyday{" "}
            <img
              src="/assets/ipad-mini/essentials_headline__ffb3a20mqy6a_large.png"
              alt="design"
              style={{ marginBottom: 0 }}
            />
          </h1>
          <p
            className={`${styles.sectionDescription} ${styles.ml83}`}
            style={{ maxWidth: "49rem", position: "relative", zIndex: 5 }}
          >
            iPad mini now supports the{" "}
            <span className={styles.powerfulTextGradient}>
              second-generation Apple Pencil
            </span>
            . It attaches magnetically and charges wirelessly, so it’s always
            with you when inspiration strikes. And you can double-tap the barrel
            to quickly switch between tools like a highlighter and an eraser.
          </p>
          <div
            className={`${styles.links} ${styles.ml83}`}
            style={{ marginTop: "3rem", position: "relative", zIndex: 5 }}
          >
            <a href="">Learn more about Apple Pencil</a>
          </div>
          <div className={styles.essentialsGrid}>
            <div className={styles.drawImageContainer}>
              <img
                src="/assets/ipad-mini/draw__cp2fx1scx6xe_large.png"
                alt=""
              />
            </div>
            <div className={styles.pencilImageContainer}>
              <img
                src="/assets/ipad-mini/pencil__gh8bk7u65gi2_large.jpg"
                alt=""
              />
            </div>
            <p
              className={`${styles.sectionDescription} ${styles.ml83}`}
              style={{
                maxWidth: "30.7rem",
                position: "relative",
                zIndex: 5,
                marginTop: "-5rem",
              }}
            >
              With Apple Pencil, iPad mini transforms into your mobile
              sketchbook and the world’s best note‑taking device. You can{" "}
              <span className={styles.powerfulTextGradient}>
                write, draw, and mark up
              </span>{" "}
              with ease.
            </p>
            <div className={styles.notesImageContainer}>
              <img
                src="/assets/ipad-mini/notes__eehfxqr9nemq_large.png"
                alt=""
              />
            </div>
            <p
              className={`${styles.sectionDescription} ${styles.ml83}`}
              style={{
                maxWidth: "30.7rem",
                position: "relative",
                zIndex: 5,
                marginTop: "-5rem",
              }}
            >
              A new set of slim{" "}
              <span className={styles.powerfulTextGradient}>Smart Folio</span>{" "}
              covers in beautiful colors complement the new iPad mini finishes.
              You can{" "}
              <span className={styles.powerfulTextGradient}>
                protect iPad mini
              </span>{" "}
              and easily prop it up.
            </p>
            <div className={styles.folioVideoContainer}>
              <video muted playsInline>
                <source src="/assets/ipad-mini/folio-safari.mov" type='video/mp4;codecs=hvc1' />
                <source src="/assets/ipad-mini/folio_video.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </Container>
      </section>
      <div
        style={{
          height: "15rem",
          backgroundImage: "linear-gradient(0deg,#f5f5f7,white)",
        }}
      ></div>
      <section className={styles.ipadOSsection}>
        <Container>
          <h1
            className={`${styles.ml83} ${styles.sectionHeading}`}
            style={{ position: "relative", zIndex: 5 }}
          >
            <img
              src="/assets/ipad-mini/ipados_headline__byb06z7ixcty_large.png"
              alt="design"
              style={{ marginBottom: 0 }}
            />{" "}
            Work wonders
            <br />
            with ease.
          </h1>
          <div className={styles.iPadOSgrid}>
            <div className={styles.multitaskingImageContainer}>
              <img
                src="/assets/ipad-mini/multitasking__b2pwck1cm4mu_large.png"
                alt=""
              />
            </div>
            <p
              className={`${styles.sectionDescription}`}
              style={{
                maxWidth: "34rem",
                justifySelf: "center",
                marginLeft: "5rem",
                marginTop: "5rem",
              }}
            >
              iPad mini is powered by{" "}
              <span className={styles.downloadGradientText}>iPadOS</span>,
              enabling you to do so much, so easily. Get things done with the
              simplicity of Multi-Touch gestures, use multiple apps at once, and
              handwrite in any text field with Scribble.
            </p>
            <div className={styles.quickNoteImageContainer}>
              <img
                src="/assets/ipad-mini/quick_note__evggjtty6dkm_large.jpg"
                alt=""
              />
            </div>
            <div className={styles.widgetsImageContainer}>
              <img
                src="/assets/ipad-mini/widgets__bad5nqotyg8y_large.png"
                alt=""
              />
            </div>
            <div></div>
            <div
              style={{
                justifySelf: "center",
                marginLeft: "5rem",
                marginTop: "-66rem",
              }}
            >
              <p
                className={`${styles.sectionDescription}`}
                style={{ maxWidth: "34rem" }}
              >
                And with new features in iPadOS 15, iPad mini is even more
                versatile. You can{" "}
                <span className={styles.downloadGradientText}>
                  jot down your thoughts
                </span>{" "}
                with Quick Note,{" "}
                <span className={styles.downloadGradientText}>
                  translate a conversation
                </span>{" "}
                with Translate, and{" "}
                <span className={styles.downloadGradientText}>
                  connect with friends and family
                </span>{" "}
                using SharePlay.
              </p>
              <div className={`${styles.links}`} style={{ marginTop: "2rem" }}>
                <a href="">See what&apos;s new in iPadOS 15</a>
              </div>
            </div>
            <h1
              className={`${styles.ml83} ${styles.sectionHeading}`}
              style={{ position: "relative", zIndex: 5, marginTop: "-18rem" }}
            >
              Many{" "}
              <img
                src="/assets/ipad-mini/apps_headline__dzkk8pcrqvwy_large.png"
                alt="design"
                style={{ marginBottom: -23 }}
              />
              <br />
              Mini magic.
            </h1>
            <div
              style={{
                justifySelf: "center",
                marginLeft: "5rem",
                marginTop: "-18rem",
              }}
            >
              <p
                className={`${styles.sectionDescription}`}
                style={{ maxWidth: "34rem" }}
              >
                The size and power of iPad mini make it indispensable for a wide
                range of uses, like conducting aircraft safety checks and
                streaming a workout. There are tons of{" "}
                <span className={styles.appsGradientText}>
                  apps designed just for iPad
                </span>{" "}
                to make unique experiences possible.
              </p>
              <div className={`${styles.links}`} style={{ marginTop: "2rem" }}>
                <a href="">Discover apps for iPad</a>
              </div>
            </div>
          </div>
        </Container>
        <Marquee speed={30} direction="right" style={{ marginTop: 50 }}>
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_01__ep3b8l61b6gm_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_02__b4esfbagutle_large.jpg" />
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_03__db7eit936as2_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_04__f8w790exd2ie_large.jpg" />
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_05__fyumttpnj36u_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_06__c4scwiv20be6_large.jpg" />
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_07__e7apj7o36x6q_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_08__cjbedxgdhxea_large.jpg" />
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_09__nznx97u9tpei_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_10__c09j5yt0vquu_large.jpg" />
          </div>
        </Marquee>
        <Marquee speed={30} direction="left">
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_11__fh0ykpd0om62_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_12__frtl837ksmuu_large.jpg" />
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_13__dc9hamy9oree_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_14__fdk68khya4qe_large.jpg" />
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_15__keoenonfu92e_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_16__f0zkjj7y35m6_large.jpg" />
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_17__fmgekomomtm6_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_18__nxk3thf9gqq2_large.jpg" />
            <LandscapeiPad imageUrl="/assets/ipad-mini/screen_19__epit54px7pkm_large.jpg" />
            <PortraitiPad imageUrl="/assets/ipad-mini/screen_20__gva3uv93wzm2_large.jpg" />
          </div>
        </Marquee>
      </section>
    </div>
  );
}

export default Page;
