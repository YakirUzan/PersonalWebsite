import SkillComponent from "./SkillComponent.jsx";

function TimelineItemComponent({
  year,
  title,
  companyOrInstitution,
  description,
  gpa,
  courses,
  skills,
  ides,
}) {
  return (
    <article className="group relative mb-7.5 flex pl-6.25 transition-transform md:pl-12.5">
      <div className="absolute top-12.5 left-0 h-1.25 w-6.25 -translate-y-1/2 bg-white transition-colors group-hover:bg-[#dbeafe] md:w-12.5" />
      <div className="absolute top-12.5 left-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-colors group-hover:bg-[#dbeafe]" />

      <div className="relative w-full rounded-[5px] bg-[rgba(249,249,249,0.9)] p-3 text-[#333333] shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)] md:p-7.5">
        <h4 className="my-2.5 text-[clamp(.8em,1.5vw,1em)]">{title}</h4>
        <p className="m-0 text-[clamp(.7em,1.2vw,1em)]">
          {companyOrInstitution} ({year})
        </p>
        <hr className="my-4 border-black/10" />
        <p className="m-0 text-[clamp(.6em,1.1vw,1em)]">{description}</p>

        {gpa ? (
          <div className="absolute top-0 right-0 m-2.5 rounded-[5px] bg-[#3b82f6] px-1.25 py-1.25 text-[clamp(.5em,1.1vw,1em)] text-white shadow md:m-3.75 md:rounded-[10px] md:px-2.5 md:py-2.5">
            <p className="m-0">GPA: {gpa}</p>
          </div>
        ) : null}

        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-125 group-hover:opacity-100">
          <hr className="my-4 border-black/10" />
          <div className="flex flex-wrap gap-2.5 md:gap-7.5">
            {courses ? (
              <div>
                <h5 className="my-1.25 text-[clamp(.7em,1.3vw,1em)]">Courses</h5>
                <div className="flex flex-wrap gap-1.25 md:gap-2.5">
                  {courses.map((extra) => (
                    <SkillComponent key={`${title}-${extra}`} extra={extra} />
                  ))}
                </div>
              </div>
            ) : null}
            {skills ? (
              <div>
                <h5 className="my-1.25 text-[clamp(.7em,1.3vw,1em)]">Skills</h5>
                <div className="flex flex-wrap gap-1.25 md:gap-2.5">
                  {skills.map((extra) => (
                    <SkillComponent key={`${title}-${extra}`} extra={extra} />
                  ))}
                </div>
              </div>
            ) : null}
            {ides ? (
              <div>
                <h5 className="my-1.25 text-[clamp(.7em,1.3vw,1em)]">IDEs</h5>
                <div className="flex flex-wrap gap-1.25 md:gap-2.5">
                  {ides.map((extra) => (
                    <SkillComponent key={`${title}-${extra}`} extra={extra} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export default TimelineItemComponent;
