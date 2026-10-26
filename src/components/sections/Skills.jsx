import React from "react";
import { skills } from "../../data/skills";
import FadeIn from "../animations/FadeIn";
import * as Icons from "lucide-react";

const Skills = () => {
  const skillCategories = {
    "Frontend Development": [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Redux",
    ],
    "Backend & APIs": ["Node.js", "Python", "PHP", "REST APIs"],
    "Tools & Others": ["Git & GitHub", "Responsive Design", "Figma", "Vite"],
  };

  const proficiencyLevels = {
    Expert: 95,
    Advanced: 80,
    Intermediate: 65,
  };

  const levelColors = {
    Expert: "text-[#00D9FF] bg-[#00D9FF]/10 border-[#00D9FF]/30",
    Advanced: "text-[#A78BFA] bg-[#7C3AED]/10 border-[#7C3AED]/30",
    Intermediate: "text-[#F0ABFC] bg-[#D946EF]/10 border-[#D946EF]/30",
  };

  const getIcon = (iconName) => Icons[iconName] || Icons.Code2;

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#080B18] py-20 sm:py-24"
    >
      {/* Cyberpunk background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-[#00D9FF]/[0.08] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-[#7C3AED]/[0.12] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-[#D946EF]/[0.05] blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <FadeIn delay={100}>
          <div className="mb-16 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00D9FF]/20 bg-[#00D9FF]/[0.06] px-4 py-2">
              <Icons.Sparkles className="h-4 w-4 text-[#00D9FF]" />

              <span className="text-sm font-medium text-[#00D9FF]">
                My Expertise
              </span>
            </div>

            <h2 className="mb-4 bg-gradient-to-r from-white via-[#C4EFFF] to-[#BFA7FF] bg-clip-text text-4xl font-normal tracking-tight text-transparent sm:text-5xl lg:text-6xl">
              Skills &amp; Technologies
            </h2>

            <p className="mx-auto max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              A comprehensive overview of my technical skills and proficiency
              levels.
            </p>
          </div>
        </FadeIn>

        {/* Skills categories */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {Object.entries(skillCategories).map(
            ([category, skillNames], categoryIndex) => {
              const categorySkills = skillNames
                .map((name) => skills.find((skill) => skill.name === name))
                .filter(Boolean);

              return (
                <FadeIn key={category} delay={categoryIndex * 100}>
                  <div className="group relative isolate overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101321]/90 p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00D9FF]/30 hover:shadow-[0_0_35px_rgba(0,217,255,0.07)] sm:p-6">
                    {/* Card hover glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[#00D9FF]/[0.07] via-transparent to-[#7C3AED]/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    {/* Category heading */}
                    <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-5">
                      <div className="h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-[#00D9FF] to-[#7C3AED]" />

                      <h3 className="text-lg font-medium text-white sm:text-xl">
                        {category}
                      </h3>
                    </div>

                    {/* Skills list */}
                    <div className="space-y-6">
                      {categorySkills.map((skill) => {
                        const IconComponent = getIcon(skill.icon);

                        const proficiency =
                          proficiencyLevels[skill.level] ?? 50;

                        const badgeColor =
                          levelColors[skill.level] ??
                          "border-white/10 bg-white/5 text-gray-400";

                        return (
                          <div key={skill.id} className="space-y-2.5">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex min-w-0 items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] transition-colors duration-300 group-hover:bg-white/[0.06]">
                                  <IconComponent className="h-5 w-5 text-[#00D9FF]" />
                                </div>

                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-white">
                                    {skill.name}
                                  </p>

                                  <p className="mt-0.5 text-xs text-white/45">
                                    {skill.experience}
                                  </p>
                                </div>
                              </div>

                              <span
                                className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-medium sm:text-xs ${badgeColor}`}
                              >
                                {skill.level}
                              </span>
                            </div>

                            {/* Proficiency bar */}
                            <div
                              className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]"
                              role="progressbar"
                              aria-label={`${skill.name} proficiency`}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              aria-valuenow={proficiency}
                            >
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] via-[#287BFF] to-[#00D9FF] transition-[width] duration-700 ease-out"
                                style={{
                                  width: `${proficiency}%`,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeIn>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
