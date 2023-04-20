"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Navbar from "@/app/iphone-14-pro/components/Navbar/Navbar";
import Container from "@/app/iphone-14-pro/components/Container/Container";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlueButton from "@/app/iphone-14-pro/components/BlueButton/BlueButton";
gsap.registerPlugin(ScrollTrigger);

function Page() {
  let videoRef = useRef<HTMLVideoElement>(null) ;
  let heroImageRef = useRef<HTMLImageElement>(null);
  let cardsRef = useRef(null);
  let cinematicVideoRef = useRef<HTMLVideoElement>(null);
  let actionVideoRef = useRef<HTMLVideoElement>(null);
  let emergencyVideoRef = useRef<HTMLVideoElement>(null);

  useLayoutEffect(() => {
    // Header video and image transition animation
    videoRef.current?.play();
    let heroTimeline = gsap.timeline();
    heroTimeline
      .to(videoRef.current, {
        delay: 5,
        display: "none",
      })
      .to(heroImageRef.current, {
        display: "block",
        opacity: 1,
        duration: 1,
      });

    // Meet dynamic island animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.meet}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.meet}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.meet} h1`, {
        y: -50,
        opacity: 0,
      })
      .from(`.${styles.meet} img`, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

    // 48MP Main camera animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.mainCamera}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.mainCamera}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.mainCamera} img`, {
        scale: 1.5,
        duration: 1,
      })
      .from(`.${styles.mainCamera} h3`, {
        opacity: 0,
      });

    // Chip animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.chip}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.chip}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.chip} img`, {
        x: -30,
        y: -200,
        ease: Power3.easeOut,
        duration: 1.5,
      });

    // Battery animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.battery}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.battery}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.battery} h1`, {
        css: {
          'background-size': '0% 100%'
        }
      });

    // Cinematic video animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.film}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.film}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.film} h2`, {
        y: 20,
        opacity: 0,
        delay: 1,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.film}`,
          start: "top 60%",
          toggleActions: "play none reverse none",
          onEnter: () => {
            cinematicVideoRef.current?.play();
          },
        },
      })
      .to(`.${styles.film} img`, {
        opacity: 0,
        display: "none",
      })
      .from(`.${styles.film} h2`, {
        y: 20,
        opacity: 0,
        delay: 1,
      });

    // Action mode animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.action}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.action}`, {
        opacity: 0,
        duration: 1,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.action}`,
          start: "top 60%",
          toggleActions: "play none reverse none",
          onEnter: () => {
            actionVideoRef.current?.play();
          },
        },
      })
      .to(`.${styles.action} img`, {
        opacity: 0,
        display: "none",
      })
      .from(`.${styles.action} h2`, {
        y: -20,
        opacity: 0,
        delay: 1,
      })
      .from(`.${styles.action} h1`, {
        y: -20,
        opacity: 0,
        delay: 1,
      });

    // Always on display animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.aod}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.aod}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.aod} h1`, {
        y: -50,
        opacity: 0,
      })
      .from(`.${styles.aod} img`, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

    // Ceramic shield animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.ceramic}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.ceramic}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.ceramic} h1`, {
        y: -50,
        opacity: 0,
      })
      .from(`.${styles.ceramic} h2`, {
        y: -50,
        opacity: 0,
      })
      .from(`.${styles.ceramic} img`, {
        opacity: 0,
        y: 50,
        duration: 1,
      });

    // Water resistance animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.water}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.water}`, {
        opacity: 0,
        duration: 1,
      });

    // Emergency satellite SOS animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.emergency}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.emergency}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.emergency} h1`, {
        y: 20,
        opacity: 0,
        delay: 1,
      });
    ScrollTrigger.create({
      trigger: `.${styles.emergency}`,
      start: "top 60%",
      toggleActions: "play none reverse none",
      onEnter: () => {
        emergencyVideoRef.current?.play();
      },
    });

    // Selfie camera animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.camera}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.camera}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.camera} img`, {
        y: 50,
        opacity: 0,
      })
      .from(`.${styles.camera} h2`, {
        opacity: 0,
        y: 20,
      });

    // Crash detection animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.crash}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.crash}`, {
        opacity: 0,
        duration: 1,
      });

    // Phone sizes animations
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${styles.sizes}`,
          start: "top 90%",
          end: "top 95%",
          toggleActions: "play none reverse none",
        },
      })
      .from(`.${styles.sizes}`, {
        opacity: 0,
        duration: 1,
      })
      .from(`.${styles.sizes} h1`, {
        opacity: 0,
        y: -20,
      })
      .from(`.${styles.sizes} img`, {
        opacity: 0,
        y: 30,
      })
      .from(`.${styles.sizes} h2`, {
        opacity: 0,
        y: 20,
      });
  });

  return (
    <div className={styles.page}>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.banner}>
          <p>
            Get $200–$600 in credit toward iPhone 14 Pro when you trade in
            iPhone 11 or higher.
            <a href=""> Shop iPhone {">"} </a>
          </p>
        </div>
        <Container>
          <div className={styles.heading}>
            <h1>Pro. Beyond.</h1>
            <div className={styles.circles}>
              <span>Deep Purple</span>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </Container>
        <div style={{ height: "100px" }}></div>
        <video
          ref={videoRef}
          muted
          src="/assets/iphone-14-pro/hero-video.mp4"
        ></video>
        <img
          ref={heroImageRef}
          src="/assets/iphone-14-pro/hero_deep_purple__large.jpeg"
          alt="phone"
        />
      </header>
      <div className={styles.grayArea}>
        <Container>
          <div className={styles.intro}>
            <h2>iPhone 14 Pro and iPhone 14 Pro Max</h2>
            <p>From $999 or $41.62/mo. for 24 mo. before trade‑in*</p>
            <BlueButton title="Buy" />
          </div>
          <div ref={cardsRef} className={styles.cards}>
            <div className={styles.meet}>
              <h1>
                Meet <span>Dynamic Island.</span>
              </h1>
              <img
                src="/assets/iphone-14-pro/dynamic_island_deep_purple__large.jpeg"
                alt="dynamic island iphone"
              />
            </div>
            <div className={styles.mainCamera}>
              <img
                src="/assets/iphone-14-pro/camera_deep_purple__large.jpeg"
                alt=""
              />
              <div>
                <h3>48MP Main Camera.</h3>
                <h3>Mind-blowind Detail.</h3>
              </div>
            </div>
            <div className={styles.chip}>
              <h1>
                The <span>Mastermind</span> <span>behind it all.</span>
              </h1>
              <img
                src="/assets/iphone-14-pro/chip_deep_purple__large.jpeg"
                alt=""
              />
            </div>
            <div className={styles.battery}>
              <h2>A battery that&apos;s</h2>
              <h1>
                all in, <span>all day.</span>
              </h1>
            </div>
            <div className={styles.film}>
              <img
                src="/assets/iphone-14-pro/cinematic_mode_endframe__large.jpeg"
                alt=""
              />
              <video
                ref={cinematicVideoRef}
                muted
                src="/assets/iphone-14-pro/cinematic_video.mp4"
              ></video>
              <div>
                <h2>Pro video</h2>
                <h1>Film like a Pro.</h1>
              </div>
            </div>
            <div className={styles.action}>
              <img
                src="/assets/iphone-14-pro/action_mode_endframe__large.jpeg"
                alt=""
              />
              <video
                ref={actionVideoRef}
                muted
                src="/assets/iphone-14-pro/action_mode_video.mp4"
              ></video>
              <div>
                <h2>Action mode</h2>
                <h1>
                  Shaky shots, <span>Stable video.</span>
                </h1>
              </div>
            </div>
            <div className={styles.aod}>
              <h1>
                Always-On Display. <span>A subtle way to stay</span>
                <span>in the know.</span>
              </h1>
              <img
                src="/assets/iphone-14-pro/always_on_deep_purple__large.jpeg"
                alt="dynamic island iphone"
              />
            </div>
            <div className={styles.ceramic}>
              <h2>Ceramic Shield</h2>
              <h1>
                Tougher than any <span>smartphone glass.</span>
              </h1>
              <img
                src="/assets/iphone-14-pro/ceramic_deep_purple__large.jpeg"
                alt=""
              />
            </div>
            <div className={styles.water}>
              <img src="/assets/iphone-14-pro/water-resistance.jpeg" alt="" />
              <h2>(Phew.)</h2>
            </div>
            <div className={styles.emergency}>
              <video
                ref={emergencyVideoRef}
                muted
                src="/assets/iphone-14-pro/emergency-video.mp4"
              ></video>
              <h1>
                Emergency SOS <span>Via Satellite</span>
              </h1>
            </div>
            <div className={styles.camera}>
              <h2>A camera in a class by itselfie.</h2>
              <img
                src="/assets/iphone-14-pro/selfie_deep_purple__large.jpeg"
                alt=""
              />
            </div>
            <div className={styles.crash}>
              <img
                src="/assets/iphone-14-pro/crash_deep_purple__large.jpeg"
                alt=""
              />
            </div>
            <div className={styles.sizes}>
              <div>
                <h1>6.7&quot;</h1>
                <h2>iPhone 14 Pro Max</h2>
                <img
                  src="/assets/iphone-14-pro/size_promax_deep_purple__large.jpeg"
                  alt=""
                />
              </div>
              <div>
                <h1>6.1&quot;</h1>
                <h2>iPhone 14 Pro</h2>
                <img
                  src="/assets/iphone-14-pro/size_pro_deep_purple__large.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <h1 className={styles.title}>Ways to save on iPhone.</h1>
          <div className={styles.saveCards}>
            <div>
              <div>
                <img
                  src="/assets/iphone-14-pro/icon_trade_in__large.png"
                  alt=""
                />
                <h2>
                  Trade in your current phone for credit toward iPhone 14 Pro.
                </h2>
                <p>
                  Get $200–$600 in credit when you trade in iPhone 11 or higher.
                </p>
              </div>
              <a href="">See what your device is worth {">"}</a>
            </div>
            <div>
              <div>
                <img src="/assets/iphone-14-pro/icon_deals__large.png" alt="" />
                <h2>
                  Save up to $800 on iPhone 14 Pro with carrier deals at Apple.
                </h2>
                <p>Get the latest iPhone for less.</p>
              </div>
              <a href="">See iPhone deals {">"}</a>
            </div>
            <div>
              <div>
                <img
                  src="/assets/iphone-14-pro/icon_apple_card__large.png"
                  alt=""
                />
                <h2>Pay 0% APR over 24 months with Apple Card.</h2>
                <p>
                  Get $200–$600 in credit when you trade in iPhone 11 or
                  higher.1
                </p>
              </div>
              <a href="">Learn more {">"}</a>
            </div>
          </div>
          <h1 className={styles.title} style={{ width: "42rem" }}>
            Designed to make a difference.
          </h1>
          <div className={styles.differenceCards}>
            <div>
              <div>
                <img
                  src="/assets/iphone-14-pro/icon_environment__bd4auq0wf6z6_large.png"
                  alt=""
                />
                <h2>
                  Recycling,<span>reimagined.</span>
                </h2>
                <a href="">
                  See how iPhones uses materials to conserve resources {">"}
                </a>
              </div>
              <img
                style={{ paddingBottom: "5rem" }}
                src="/assets/iphone-14-pro/environment__un63qk02i0ye_large.jpg"
                alt=""
              />
            </div>
            <div>
              <div>
                <img
                  src="/assets/iphone-14-pro/icon_privacy__f15ln6k90uye_large.png"
                  alt=""
                />
                <h2>
                  Privacy.<span> That&apos;s iPhone</span>
                </h2>
                <a href="">
                  Checkout the latest privacy features for iPhone {">"}
                </a>
              </div>
              <img
                src="/assets/iphone-14-pro/privacy__cea1dfl61o3m_large.jpg"
                alt=""
              />
            </div>
            <div>
              <div>
                <img
                  src="/assets/iphone-14-pro/icon_accessibility__gmjazezkhey6_large.png"
                  alt=""
                />
                <h2>
                  iPhone<span>for all.</span>
                </h2>
                <a href="">
                  Discover helpful accessibility features like VoiceOver {">"}
                </a>
              </div>
              <img
                src="/assets/iphone-14-pro/accessibility__d12vm99ofjue_large.jpg"
                alt=""
              />
            </div>
          </div>
        </Container>
        <div style={{ height: "200px" }}></div>
      </div>
    </div>
  );
}

export default Page;
