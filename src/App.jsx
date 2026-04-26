import { useEffect, useMemo, useRef, useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import { data } from "./data.jsx";

const sections = [
  { key: "about", label: "About" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "projects", label: "Projects" },
];

function App() {
  const sectionRefs = useMemo(
    () =>
      sections.reduce((accumulator, section) => {
        accumulator[section.key] = { current: null };
        return accumulator;
      }, {}),
    [],
  );
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (sectionKey) => {
    const section = sectionRefs[sectionKey]?.current;

    if (!section) {
      return;
    }

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - 24,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 120;
      let nextActiveSection = "about";

      sections.forEach((section) => {
        const node = sectionRefs[section.key]?.current;
        const top = node ? node.getBoundingClientRect().top + window.scrollY : 0;

        if (node && offset >= top) {
          nextActiveSection = section.key;
        }
      });

      setActiveSection(nextActiveSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  return (
    <div className="min-h-screen bg-[#333333] text-white">
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/app_background.jpg')" }}
      />

      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col gap-6 px-4 py-6 md:flex-row md:gap-0 md:px-6">
        <aside className="md:sticky md:top-6 md:h-fit md:w-[38%] md:self-start md:pr-6 lg:w-[34%]">
          <Home
            activeSection={activeSection}
            onNavigate={scrollToSection}
            sections={sections}
          />
        </aside>

        <main className="md:w-[62%] md:px-2 lg:w-[66%]">
          <div className="space-y-10 md:space-y-14">
            <section
              ref={(node) => {
                sectionRefs.about.current = node;
              }}
              className="border-b border-white/12 pb-10 text-[#f6f1e8]"
            >
              <About />
            </section>

            <section
              ref={(node) => {
                sectionRefs.experience.current = node;
              }}
              className="border-b border-white/12 pb-10 text-[#f6f1e8]"
            >
              <Resume title="Experience" items={data.resume.experienceData} />
            </section>

            <section
              ref={(node) => {
                sectionRefs.education.current = node;
              }}
              className="border-b border-white/12 pb-10 text-[#f6f1e8]"
            >
              <Resume title="Education" items={data.resume.educationData} />
            </section>

            <section
              ref={(node) => {
                sectionRefs.projects.current = node;
              }}
              className="pb-6 text-[#f6f1e8]"
            >
              <Projects />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
