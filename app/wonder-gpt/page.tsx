"use client";

import React, {useEffect, useRef, useState} from "react";
import styles from "./styles.module.scss";
import { gsap, Power3 } from "gsap";
import { Power4 } from "gsap/gsap-core";

function WonderGPT() {
  const [isBeingHovered, setIsBeingHovered] = useState(false);
  let cardRef = useRef(null)
  let blobRef = useRef(null)


  useEffect(() => {

    // @ts-ignore
    cardRef.current.onpointermove = (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      // @ts-ignore
      blobRef.current.animate({
        left: `${x}px`,
        top: `${y}px`
      }, { duration: 1000, fill: "forwards" });
    }


    function transformElement(x: number, y: number) {
      // @ts-ignore
      let box = cardRef.current.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / 10;
      let calcY = (x - box.x - (box.width / 2)) / 10;

      // @ts-ignore
      cardRef.current.style.transform  = "rotateX("+ calcX +"deg) "
          + " rotateY("+ calcY +"deg)";
    }

    // @ts-ignore
    cardRef.current.addEventListener('mousemove', (e: MouseEvent) => {
      window.requestAnimationFrame(function(){
        transformElement(e.clientX, e.clientY);
      });
    });

    // @ts-ignore
    cardRef.current.addEventListener('mouseleave', (e: MouseEvent) => {
      window.requestAnimationFrame(function(){
        // @ts-ignore
        cardRef.current.style.transform = "rotateX(0) rotateY(0)";
      });
    });



    if (isBeingHovered) {
      gsap.to("button div", {
        duration: 0.5,
        ease: Power4.easeInOut,
        x: -30
      });
    } else {
      gsap.to("button div", {
        duration: 0.5,
        ease: Power4.easeInOut,
        x: 31
      });
    }
  });

  return (
    <div className={styles.page}>
      <div className={styles.gradientText}>
        <h3>wonder</h3>
        <div className={styles.borderedText}>
          <div className="subcontainer">
            <span className="text">GPT</span>
          </div>
        </div>
      </div>
      <h1>Simple and beautiful ChatGPT client for macOS</h1>

      <div className={styles.card} ref={cardRef}>
        <h4>Good Morning, Stardust</h4>
        <p>How can I help you?</p>
        <div className={styles.textfield}>
          <input type="text" placeholder="Ask me anything" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div id="blob" className={styles.blob} ref={blobRef}></div>
        <div id="blur" className={styles.blur}></div>
      </div>
      <button
        className={styles.button}
        onMouseEnter={() => setIsBeingHovered(true)}
        onMouseLeave={() => setIsBeingHovered(false)}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-apple"
            viewBox="0 0 16 16"
          >
            <path
              d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"
              fill="white"
            ></path>
            <path
              d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"
              fill="white"
            ></path>
          </svg>
          Download for Mac
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
    </div>
  );
}

export default WonderGPT;
