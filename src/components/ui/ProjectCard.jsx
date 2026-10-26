import React from "react";
import { ExternalLink, TrendingUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project = {} }) => {
  const {
    title,
    description,
    image,
    technologies = [],
    metrics,
    category,
  } = project;

  // Support both camelCase and lowercase property names
  const demoLink = project.demoUrl || project.demourl;
  const githubLink = project.githubUrl || project.githuburl;

  return (
    <div className="group flex flex-col h-full bg-[#0d0f12]/80 hover:bg-[#12151a] border border-white/10 hover:border-primary/40 rounded-3xl overflow-hidden p-5 transition-all duration-300">
      {/* Image Preview & Floating Badges */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 mb-6 shrink-0">
        <img
          src={image}
          alt={title || "Project preview"}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Category Badge */}
        {category && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="px-3.5 py-1 text-xs font-medium text-white/90 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
              {category}
            </span>
          </div>
        )}

        {/* GitHub Link */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 z-10">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-black/60 hover:bg-black/90 border border-white/15 text-white/70 hover:text-white transition-all backdrop-blur-md"
              title="View Code"
              aria-label="View project source code on GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-black/60 hover:bg-black/90 border border-white/15 text-white/70 hover:text-white transition-all backdrop-blur-md"
              title="View Live Demo"
              aria-label="View live project demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* Title & Full Description */}
        <div className="mb-5">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

          <p className="text-sm text-white/60 leading-relaxed whitespace-normal break-words">
            {description}
          </p>
        </div>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/25 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Metrics Footer */}
        {metrics && (
          <div className="mt-auto pt-4 border-t border-white/5 flex items-start gap-2 text-primary">
            <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-xs font-medium text-primary tracking-wide break-words">
              {metrics}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
