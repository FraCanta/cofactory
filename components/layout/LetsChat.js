"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";
import { Flip } from "gsap/dist/Flip";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

export default function LetsChat() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);

  //   useLayoutEffect(() => {
  //     if (!sectionRef.current) return;

  //     const ctx = gsap.context(() => {
  //       const words = wordsRef.current.filter(Boolean);

  //       // FLIP – posizione iniziale
  //       const state = Flip.getState(words);

  //       // Posizione finale
  //       gsap.set(words, { yPercent: 0, opacity: 1 });

  //       // Animazione FLIP per parole
  //       Flip.from(state, {
  //         duration: 1,
  //         ease: "power3.out",
  //         stagger: 0.15,
  //         absolute: true,
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 80%",
  //         },
  //       });

  //       // Animazione link
  //       gsap.from(".chat-connect-item", {
  //         opacity: 0,
  //         y: 25,
  //         duration: 0.8,
  //         ease: "power2.out",
  //         stagger: 0.2,
  //         scrollTrigger: {
  //           trigger: sectionRef.current,
  //           start: "top 85%",
  //         },
  //       });
  //     }, sectionRef.current);

  //     return () => ctx.revert();
  //   }, []);

  const words = ["Let's", "Have", "A", "Chat"];

  return (
    <section ref={sectionRef} className="chat-container">
      <div className="chat-heading">
        {words.map((w, i) => (
          <div key={i} className="chat-word-wrapper" data-flip-id={`word-${i}`}>
            <div className="chat-word" ref={(el) => (wordsRef.current[i] = el)}>
              {w}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-links">
        <div className="chat-connect-item">
          <p className="chat-title">Schedule a call</p>
          <a
            className="chat-link"
            href="https://calendly.com/wjystudios/intro-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            calendly.com
            <span></span>
            <span></span>
          </a>
        </div>

        <div className="chat-connect-item">
          <p className="chat-title">Leave a message</p>
          <a className="chat-link" href="tel:312-436-1845">
            312-436-1845
            <span></span>
            <span></span>
          </a>
        </div>

        <div className="chat-connect-item">
          <p className="chat-title">Email me</p>
          <a className="chat-link" href="mailto:won@wjystudios.com">
            won@wjystudios.com
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
