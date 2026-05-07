import { useState } from "react";
import SkillComponent from "../components/SkillComponent.jsx";
import { data } from "../data.jsx";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = data.projects[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.projects.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.projects.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#93c5fd]">
          Work
        </p>
        <h2 className="m-0 text-3xl text-[#eff6ff]">Projects</h2>
      </div>

      <div className="relative">
        <div className="absolute top-5 right-0 flex gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            className="flex h-11 w-11 items-center justify-center rounded-full border-none bg-[#333333] text-white transition-colors hover:bg-black"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border-none bg-[#333333] text-white transition-colors hover:bg-black"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>

        <div className="pt-14 md:pt-0">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <div className="flex items-center justify-start gap-2.5">
                <img
                  src={project.icon}
                  alt={project.name}
                  className="h-13 w-13 rounded-[14px] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                />
                <div>
                  <h3 className="m-0 text-2xl text-[#eff6ff]">{project.name}</h3>
                  <p className="mt-1 mb-0 text-sm font-semibold uppercase tracking-[0.16em] text-[#93c5fd]">
                    {project.location}
                  </p>
                </div>
              </div>

              <p className="mt-5 mb-0 leading-7 text-[#dbeafe]">{project.description}</p>
              <hr className="border-white/12" />

              <div>
                <p className="mb-3 text-sm font-semibold text-[#eff6ff]">Skills</p>
                <div className="flex flex-wrap justify-start gap-2">
                  {project.skills.map((extra) => (
                    <SkillComponent key={`${project.name}-${extra}`} extra={extra} />
                  ))}
                </div>
              </div>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center rounded-full bg-[#333333] px-4 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-black"
                >
                  <i className="fa-brands fa-google-play mr-2" />
                  Open in Google Play
                </a>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
              {project.images.slice(0, 3).map((image, index) => (
                <div
                  key={`${project.name}-${image}`}
                  className={`${index === 0 ? "col-span-2 md:col-span-1" : ""} overflow-hidden rounded-[22px] bg-white/80 shadow-[0_10px_24px_rgba(0,0,0,0.08)]`}
                >
                  <img src={image} alt={`${project.name} preview ${index + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
