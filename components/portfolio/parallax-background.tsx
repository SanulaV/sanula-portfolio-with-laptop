"use client";

import { type FC } from "react";

export const ParallaxBackground: FC = () => {

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        <div className="absolute inset-0 -z-50">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/assets/sanula-hero-background.jpg"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/assets/sanula-hero-background.mp4" type="video/mp4" />
          </video>
        </div>
        <div aria-hidden className="absolute inset-0 -z-40 bg-gradient-to-b from-black/5 via-primary/15 to-primary/80" />
      </div>
    </section>
  );
};
