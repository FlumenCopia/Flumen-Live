"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    const updateScroll = (time: number) => {
      // GSAP ticker time is in seconds; Lenis expects milliseconds.
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(updateScroll);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateScroll);
      lenis.destroy();
    };
  }, []);
  return null;
};

export default SmoothScroll;
