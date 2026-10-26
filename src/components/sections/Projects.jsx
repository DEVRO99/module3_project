import React, { useState, useRef } from "react";
import { projects, categories } from "../../data/projects";
import {
  Briefcase,
  Target,
  Globe,
  Palette,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import FadeIn from "../animations/FadeIn";

const categoryIcons = {
  All: Target,
  "Web Apps": Globe,
  "UI Components": Palette,
  "Full Stack": Zap,
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);

    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const visibleCards = getVisibleCards();
    const cardWidth = container.offsetWidth / visibleCards;
    const maxIndex = Math.max(0, filteredProjects.length - visibleCards);
    const newIndex = Math.min(Math.max(index, 0), maxIndex);

    setCurrentIndex(newIndex);

    container.scrollTo({
      left: cardWidth * newIndex,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    scrollToIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    scrollToIndex(currentIndex - 1);
  };

  const visibleCards = getVisibleCards();
  const maxIndex = Math.max(0, filteredProjects.length - visibleCards);

  return (
    <section id="projects" className="relative overflow-hidden bg-black py-20">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-primary/20 opacity-30 blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-96 w-96 rounded-full bg-primary/20 opacity-30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">My Work</span>
            </div>

            <h2 className="mb-4 text-4xl font-medium tracking-tight text-white lg:text-5xl">
              Featured Projects
            </h2>

            <p className="mx-auto max-w-2xl text-base text-white/60 sm:text-lg">
              Showcasing my work, ongoing projects, and achievements.
            </p>
          </div>
        </FadeIn>

        {/* Category filters */}
        <FadeIn delay={100}>
          <div className="mb-16 flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Target;
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative flex items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-primary/40 bg-primary/15 text-primary shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                      : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      isActive
                        ? "text-primary"
                        : "text-white/60 group-hover:text-white"
                    }`}
                  />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Projects carousel */}
        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="no-scrollbar snap-x snap-mandatory overflow-x-auto scroll-smooth pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="-mx-3 flex">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 snap-start px-3 md:w-1/2 lg:w-1/3"
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            {filteredProjects.length > visibleCards && (
              <>
                <button
                  type="button"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="absolute -left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-20 sm:-left-6"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                  className="absolute -right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-white/10 hover:text-white disabled:pointer-events-none disabled:opacity-20 sm:-right-6"
                  aria-label="Next projects"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Carousel dots */}
            {filteredProjects.length > visibleCards && (
              <div className="mt-8 flex items-center justify-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => scrollToIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-primary"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Projects;
