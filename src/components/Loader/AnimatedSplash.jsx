import React, { useEffect, useRef } from "react";
import birdVideo from "../../assets/videos/Bird-Animation.mp4";
import { gsap } from "gsap";

export default function AnimatedSplash({ onFinish }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

useEffect(() => {
  const v = videoRef.current;
  if (!v) return;

  const playWithAudio = async () => {
    try {
      // start muted so autoplay is allowed
      v.muted = true;
      await v.play();

      // after a short delay, unmute (some browsers keep muted if user hasn't interacted)
      setTimeout(() => {
        v.muted = false;
        // optional: ensure volume up
        v.volume = 1.0;
        console.log("Attempted to unmute video");
      }, 100); // 1 second after start
    } catch (err) {
      console.warn("Autoplay with audio blocked:", err);
    }
  };

  playWithAudio();
}, []);


const handleVideoEnded = () => {
  const v = videoRef.current;

  // wait a short delay after video truly ends before fade
  setTimeout(() => {
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        if (typeof onFinish === "function") onFinish();
      },
    });
  }, 20); // 300ms buffer after last frame
};

  return (
    <div
  ref={containerRef}
  style={{
    position: "fixed",
    inset: 0,
    overflow: "hidden",
    backgroundColor: "#3b0918",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  }}
>

     
      <video
        ref={videoRef}
        src={birdVideo}
        autoPlay
        playsInline
        onEnded={handleVideoEnded}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
    />
    </div>
  );
}
