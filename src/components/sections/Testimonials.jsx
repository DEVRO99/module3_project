import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { testimonials } from "../../data/testimoials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const current = testimonials[currentIndex];

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-primary/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Quote className="w-3.5 h-3.5 text-primary rotate-180" />
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                Testimonials
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-4xl sm:text-5xl font-normal text-white mb-4 tracking-tight leading-tight">
              Trusted by forward-
              <br />
              thinking teams
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Empowering clients with design-driven, high-quality solutions
              built for success.
            </p>
          </FadeIn>
        </div>

        {/* Carousel / Card Area */}
        <FadeIn delay={300}>
          <div className="relative flex items-center justify-center">
            {/* Left arrow */}
            <button
              onClick={prevSlide}
              className="absolute -left-2 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all z-20 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonial Card Content */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Image with floating badge */}
              <div className="md:col-span-5 relative flex justify-center">
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover grayscale contrast-110"
                  />

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Metric / Speed Box */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl p-4">
                    <div className="text-2xl font-bold text-primary flex items-center gap-1">
                      3x
                    </div>
                    <p className="text-xs text-white/70 tracking-wide font-medium">
                      Faster Delivery
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Quote, Author info, Stars */}
              <div className="md:col-span-7 flex flex-col justify-between py-2 text-left">
                {/* Large Green Quote Icon */}
                <div className="text-primary mb-6">
                  <Quote className="w-10 h-10 rotate-180" />
                </div>

                {/* Quote Text */}
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-normal mb-8">
                  "{current.quote}"
                </p>

                {/* Author Info + Star Ratings */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-white/10">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-0.5">
                      {current.name}
                    </h3>
                    <p className="text-sm text-white/50">
                      {current.role}
                      {current.company ? `, ${current.company}` : ""}
                    </p>
                  </div>

                  {/* 5 Green Stars */}
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: current.rating || 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={nextSlide}
              className="absolute -right-2 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all z-20 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-6"
                    : "bg-white/20 w-2 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
