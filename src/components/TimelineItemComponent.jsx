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
    <article className="group relative mb-[30px] flex pl-[25px] transition-transform md:pl-[50px]">
      <div className="absolute top-[50px] left-0 h-[5px] w-[25px] -translate-y-1/2 bg-white transition-colors group-hover:bg-[#ffefd4] md:w-[50px]" />
      <div className="absolute top-[50px] left-0 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-colors group-hover:bg-[#ffefd4]" />

      <div className="relative w-full rounded-[5px] bg-[rgba(249,249,249,0.9)] p-3 text-[#333333] shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.4)] md:p-[30px]">
        <h4 className="my-[10px] text-[clamp(.8em,1.5vw,1em)]">{title}</h4>
        <p className="m-0 text-[clamp(.7em,1.2vw,1em)]">
          {companyOrInstitution} ({year})
        </p>
        <hr className="my-4 border-black/10" />
        <p className="m-0 text-[clamp(.6em,1.1vw,1em)]">{description}</p>

        {gpa ? (
          <div className="absolute top-0 right-0 m-[10px] rounded-[5px] bg-[#ffbd3f] px-[5px] py-[5px] text-[clamp(.5em,1.1vw,1em)] text-[#333333] shadow md:m-[15px] md:rounded-[10px] md:px-[10px] md:py-[10px]">
            <p className="m-0">GPA: {gpa}</p>
          </div>
        ) : null}

        <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-[500px] group-hover:opacity-100">
          <hr className="my-4 border-black/10" />
          <div className="flex flex-wrap gap-[10px] md:gap-[30px]">
            {courses ? (
              <div>
                <h5 className="my-[5px] text-[clamp(.7em,1.3vw,1em)]">Courses</h5>
                <div className="flex flex-wrap gap-[5px] md:gap-[10px]">
                  {courses.map((extra) => (
                    <SkillComponent key={`${title}-${extra}`} extra={extra} />
                  ))}
                </div>
              </div>
            ) : null}
            {skills ? (
              <div>
                <h5 className="my-[5px] text-[clamp(.7em,1.3vw,1em)]">Skills</h5>
                <div className="flex flex-wrap gap-[5px] md:gap-[10px]">
                  {skills.map((extra) => (
                    <SkillComponent key={`${title}-${extra}`} extra={extra} />
                  ))}
                </div>
              </div>
            ) : null}
            {ides ? (
              <div>
                <h5 className="my-[5px] text-[clamp(.7em,1.3vw,1em)]">IDEs</h5>
                <div className="flex flex-wrap gap-[5px] md:gap-[10px]">
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
