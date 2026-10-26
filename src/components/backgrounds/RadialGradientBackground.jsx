import React from "react";

const RadialGradientBackground = ({ variant = "hero", gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-1 left-1 -translate-x-1/2 -translate-y-1/2",
        size: "w-[1440px] h-[1440px]",
        colors: [
          { color: "rgba(0,229,255,0.12)", stop: "0%" },
          { color: "rgba(8,124,251,0.30)", stop: "30%" },
          { color: "rgba(139,53,255,0.28)", stop: "45%" },
          { color: "rgba(255,53,211,0.16)", stop: "60%" },
          { color: "rgba(5,8,22,0)", stop: "75%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "bottom-1 right-1",
        size: "w-[1440px] h-[1440px]",
        colors: [
          { color: "rgba(0,229,255,0.12)", stop: "0%" },
          { color: "rgba(8,124,251,0.30)", stop: "30%" },
          { color: "rgba(139,53,255,0.28)", stop: "45%" },
          { color: "rgba(255,53,211,0.16)", stop: "60%" },
          { color: "rgba(5,8,22,0)", stop: "75%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],

    about: [
      {
        position: "bottom-0 left-[75%]",
        size: "w-[700px] h-[700px]",
        colors: [
          { color: "rgba(0,229,255,0.12)", stop: "0%" },
          { color: "rgba(8,124,251,0.30)", stop: "30%" },
          { color: "rgba(139,53,255,0.28)", stop: "45%" },
          { color: "rgba(255,53,211,0.16)", stop: "60%" },
          { color: "rgba(5,8,22,0)", stop: "75%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],
  };

  const activeGradients =
    variant === "custom" ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");

    return `radial-gradient(circle at center, ${colorStops}, transparent 100%)`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
