import SkillComponent from "../components/SkillComponent.jsx";

function Resume({ title, items }) {
  return (
    <div className="w-full">
      <div className="mb-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#93c5fd]">
          Resume
        </p>
        <h2 className="m-0 text-3xl text-[#eff6ff]">{title}</h2>
      </div>

      <div className="space-y-5">
        {items.map((item) => (
          <article
            key={`${title}-${item.title}-${item.year}`}
            className="border-b border-white/12 pb-5 last:border-b-0"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="m-0 text-xl text-[#eff6ff]">{item.title}</h3>
                <p className="mt-2 mb-0 text-sm font-semibold uppercase tracking-[0.16em] text-[#93c5fd]">
                  {item.companyOrInstitution}
                </p>
              </div>

              <span className="inline-flex rounded-full bg-[#3b82f6]/85 px-4 py-2 text-sm font-semibold text-white">
                {item.year}
              </span>
            </div>

            <p className="mt-4 mb-0 leading-7 text-[#dbeafe]">{item.description}</p>

            {item.gpa ? (
              <p className="mt-4 mb-0 text-sm font-semibold text-[#eff6ff]">GPA: {item.gpa}</p>
            ) : null}

            {item.courses ? (
              <div className="mt-5">
                <p className="mb-3 text-sm font-semibold text-[#eff6ff]">Courses</p>
                <div className="flex flex-wrap gap-2">
                  {item.courses.map((extra) => (
                    <SkillComponent key={`${item.title}-${extra}`} extra={extra} />
                  ))}
                </div>
              </div>
            ) : null}

            {item.skills || item.ides ? (
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {item.skills ? (
                  <div>
                    <p className="mb-3 text-sm font-semibold text-[#eff6ff]">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((extra) => (
                        <SkillComponent key={`${item.title}-${extra}`} extra={extra} />
                      ))}
                    </div>
                  </div>
                ) : null}

                {item.ides ? (
                  <div>
                    <p className="mb-3 text-sm font-semibold text-[#eff6ff]">IDEs</p>
                    <div className="flex flex-wrap gap-2">
                      {item.ides.map((extra) => (
                        <SkillComponent key={`${item.title}-${extra}`} extra={extra} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Resume;
