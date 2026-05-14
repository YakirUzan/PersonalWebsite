import Carousel from "../components/Carousel.jsx";
import SkillComponent from "../components/SkillComponent.jsx";
import { data } from "../data.jsx";

const getCarouselItems = (project) =>
  project.images.map((image, index) => ({
    id: `${project.name}-${index}`,
    image,
    alt: `${project.name} preview ${index + 1}`,
  }));

function Projects() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#93c5fd]">
          Work
        </p>
        <h2 className="m-0 text-3xl text-[#eff6ff]">Projects</h2>
      </div>

      <div className="space-y-8">
        {data.projects.map((project) => (
          <article
            key={project.name}
            className="rounded-[24px] border border-white/12 bg-black/28 px-5 pt-8 pb-5 shadow-[0_18px_36px_rgba(0,0,0,0.24)] md:px-6 md:pt-9 md:pb-6"
          >
            <div className="grid h-full gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div>
                <div className="flex items-center justify-start gap-2.5">
                  <img
                    src={project.icon}
                    alt={project.name}
                    className="h-13 w-13 rounded-[14px] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                  />
                  <div>
                    <h3 className="m-0 text-2xl text-[#eff6ff]">
                      {project.name}
                    </h3>
                    <p className="mt-1 mb-0 text-sm font-semibold uppercase tracking-[0.16em] text-[#93c5fd]">
                      {project.location}
                    </p>
                  </div>
                </div>

                <p className="mt-5 mb-0 leading-7 text-[#dbeafe]">
                  {project.description}
                </p>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-[#eff6ff]">
                    Skills
                  </p>
                  <div className="flex flex-wrap justify-start gap-2">
                    {project.skills.map((extra) => (
                      <SkillComponent
                        key={`${project.name}-${extra}`}
                        extra={extra}
                      />
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

              <Carousel
                items={getCarouselItems(project)}
                baseWidth={360}
                loop
                pauseOnHover
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
