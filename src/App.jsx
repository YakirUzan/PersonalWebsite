import { useEffect, useMemo, useRef, useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import ColorBends from "./components/ColorBends.jsx";
import { data } from "./data.jsx";

const sections = [
  { key: "about", label: "About" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "projects", label: "Projects" },
];

function App() {
  const mainRef = useRef(null);
  const touchStartYRef = useRef(null);
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
    const scroller = mainRef.current;
    const section = sectionRefs[sectionKey]?.current;

    if (!scroller || !section) {
      return;
    }

    const scrollerTop = scroller.getBoundingClientRect().top;
    const sectionTop =
      section.getBoundingClientRect().top - scrollerTop + scroller.scrollTop;

    scroller.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scroller = mainRef.current;

    if (!scroller) {
      return undefined;
    }

    const handleScroll = () => {
      const offset = scroller.scrollTop + 120;
      const scrollerTop = scroller.getBoundingClientRect().top;
      let nextActiveSection = "about";

      sections.forEach((section) => {
        const node = sectionRefs[section.key]?.current;
        const top = node
          ? node.getBoundingClientRect().top - scrollerTop + scroller.scrollTop
          : 0;

        if (node && offset >= top) {
          nextActiveSection = section.key;
        }
      });

      setActiveSection(nextActiveSection);
    };

    handleScroll();
    scroller.addEventListener("scroll", handleScroll);
    return () => {
      scroller.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRefs]);

  const scrollMainBy = (deltaY) => {
    const scroller = mainRef.current;

    if (!scroller || deltaY === 0) {
      return;
    }

    scroller.scrollBy({
      top: deltaY,
      behavior: "auto",
    });
  };

  const handleAppWheel = (event) => {
    const scroller = mainRef.current;

    if (!scroller || scroller.contains(event.target)) {
      return;
    }

    event.preventDefault();
    scrollMainBy(event.deltaY);
  };

  const handleAppTouchStart = (event) => {
    const scroller = mainRef.current;

    if (!scroller || scroller.contains(event.target)) {
      touchStartYRef.current = null;
      return;
    }

    touchStartYRef.current = event.touches[0]?.clientY ?? null;
  };

  const handleAppTouchMove = (event) => {
    if (touchStartYRef.current === null) {
      return;
    }

    const nextY = event.touches[0]?.clientY;

    if (nextY === undefined) {
      return;
    }

    event.preventDefault();
    scrollMainBy(touchStartYRef.current - nextY);
    touchStartYRef.current = nextY;
  };

  return (
    <div
      className="relative h-screen overflow-hidden bg-black text-white"
      onWheel={handleAppWheel}
      onTouchStart={handleAppTouchStart}
      onTouchMove={handleAppTouchMove}
    >
      <div className="pointer-events-none fixed inset-0 z-0">
        <ColorBends
          rotation={90}
          speed={0.5}
          colors={["#2f80ed"]}
          transparent={false}
          autoRotate={0}
          scale={1.2}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1.5}
          parallax={0.75}
          noise={0}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 bg-black/45" />

      <div className="relative z-10 flex h-full w-full flex-col overflow-hidden md:flex-row">
        <aside className="shrink-0 overflow-hidden p-4 md:h-full md:w-19/50 md:self-start md:p-6 lg:w-17/50">
          <Home
            activeSection={activeSection}
            onNavigate={scrollToSection}
            sections={sections}
          />
        </aside>

        <main
          ref={mainRef}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain md:h-full md:w-31/50 lg:w-33/50"
        >
          <div className="min-h-full space-y-10 px-4 py-6 md:space-y-14 md:px-8">
            <section
              ref={(node) => {
                sectionRefs.about.current = node;
              }}
              className="border-b border-white/12 pb-10 text-[#eaf2ff]"
            >
              <About />
            </section>

            <section
              ref={(node) => {
                sectionRefs.experience.current = node;
              }}
              className="border-b border-white/12 pb-10 text-[#eaf2ff]"
            >
              <Resume title="Experience" items={data.resume.experienceData} />
            </section>

            <section
              ref={(node) => {
                sectionRefs.education.current = node;
              }}
              className="border-b border-white/12 pb-10 text-[#eaf2ff]"
            >
              <Resume title="Education" items={data.resume.educationData} />
            </section>

            <section
              ref={(node) => {
                sectionRefs.projects.current = node;
              }}
              className="pb-6 text-[#eaf2ff]"
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
