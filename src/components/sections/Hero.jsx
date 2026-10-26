import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPython,
} from "react-icons/si";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/* content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* left column - content */}
          <div className="flex flex-col items-start">
            {/* badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white shrink-0" />
                <span className="text-xs md:text-sm text-white/90 font-medium tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            {/* title */}
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white  mb-6 leading-tight">
                Fullstack Developer Portfolio
              </h1>
            </FadeIn>

            {/* description */}
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550] mb-8">
                Building modern, scalable web applications with React,
                JavaScript, and cutting-edge technologies. Transforming ideas
                into exceptional digital experiences.
              </p>
            </FadeIn>

            {/* CTA button */}
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className=" inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            {/* stats */}
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-10 last:border-r-0"
                  >
                    <div className=" text-2xl font-normal text-primary md-[8px] font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* right column (developer image) */}

          <FadeIn delay={200}>
            <div className="relative max-w-[500px] ml-auto flex flex-col items-center gap-6">
              {/* Spinning border image card */}
              <div className="relative w-full aspect-square overflow-hidden rounded-2xl group p-[2px]">
                {/* Spinning border */}
                <div className="absolute -inset-[50%] animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0_300deg,var(--color-primary,#00D2FF)_360deg)] opacity-70" />

                {/* Mascot Image */}
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-black z-10">
                  <img
                    src="/image.png"
                    alt="developer's mascot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Technology logos outside and underneath the card */}
              <FadeIn delay={500}>
                <div className="flex items-center gap-5 bg-[#0a0a12]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg shadow-cyan-500/5">
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    {/* Hidden SVG defining the brand gradient */}
                    <svg width="0" height="0" className="absolute">
                      <linearGradient
                        id="python-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="50%" stopColor="#3776AB" />{" "}
                        {/* Python Blue */}
                        <stop offset="50%" stopColor="#FFD43B" />{" "}
                        {/* Python Yellow */}
                      </linearGradient>
                    </svg>

                    <SiPython
                      className="w-full h-full"
                      style={{ fill: "url(#python-gradient)" }}
                    />
                  </div>

                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiReact className="w-full h-full text-[#00D2FF]" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiNodedotjs className="w-full h-full text-green-400" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiNextdotjs className="w-full h-full text-black-400" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiTailwindcss className="w-full h-full text-[#00D2FF]" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiMongodb className="w-full h-full text-green-400" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </div>
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
