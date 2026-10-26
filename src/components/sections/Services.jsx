import React from "react";
import {
  Wrench,
  Layout,
  Smartphone,
  Palette,
  Code2,
  Zap,
  GitPullRequest,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Building responsive and performant web applications using React, Next.js, and modern JavaScript frameworks with pixel-perfect designs.",
    featured: true, // Top wide card
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Creating mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes with exceptional user experience.",
    featured: true, // Top wide card
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing user interfaces with a focus on usability, accessibility, and modern design principles.",
    featured: false,
  },
  {
    icon: Code2,
    title: "Custom Components",
    description:
      "Developing reusable, scalable component libraries and design systems that maintain consistency across your applications.",
    featured: false,
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Optimizing web applications for speed and efficiency through code splitting, lazy loading, and best practices implementation.",
    featured: false,
  },
  {
    icon: GitPullRequest,
    title: "Code Review & Consulting",
    description:
      "Providing expert code reviews, architecture consulting, and technical guidance to improve your development workflow.",
    featured: false,
  },
];

const Services = () => {
  const featuredServices = services.filter((s) => s.featured);
  const regularServices = services.filter((s) => !s.featured);

  return (
    <section id="services" className="relative py-24 bg-black overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Wrench className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs uppercase tracking-wider text-primary font-medium">
                What I Offer
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h2 className="text-4xl sm:text-5xl font-medium text-white mb-6 tracking-tight">
              Built for innovation. Designed for
              <br className="hidden sm:inline" /> results.
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions to transform your ideas into exceptional
              digital experiences.
            </p>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6">
          {/* Top Row: 2 Large Cards */}
          <FadeIn delay={300}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {featuredServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-[#0c0e12]/70 hover:bg-[#0f1218]/80 border border-white/10 hover:border-primary/40 rounded-3xl p-8 sm:p-10 transition-all duration-300"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-start">
                      {/* Icon */}
                      <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary mb-8 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-8 h-8" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/60 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>

          {/* Bottom Row: 4 Compact Cards */}
          <FadeIn delay={400}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {regularServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-[#0c0e12]/70 hover:bg-[#0f1218]/80 border border-white/10 hover:border-primary/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300 mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Services;
