import Dock from "../components/Dock.jsx";
import { data } from "../data.jsx";

const socialButtons = [
  {
    key: "linkedin",
    url: data.social.linkedin,
    icon: <i className="fab fa-linkedin" />,
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    key: "facebook",
    url: data.social.facebook,
    icon: <i className="fa-brands fa-facebook" />,
    label: "Facebook",
    color: "#3b5998",
  },
  {
    key: "github",
    url: data.social.github,
    icon: <i className="fa-brands fa-github" />,
    label: "GitHub",
    color: "#181717",
  },
  {
    key: "gmail",
    url: data.social.gmail,
    icon: <i className="fab fa-google" />,
    label: "Gmail",
    color: "#db4437",
  },
  {
    key: "whatsapp",
    url: data.social.whatsapp,
    icon: <i className="fa-brands fa-whatsapp" />,
    label: "WhatsApp",
    color: "#25d366",
  },
];

function Home({ activeSection, onNavigate, sections }) {
  return (
    <div className="flex h-full flex-col p-2 md:min-h-[calc(100vh-3rem)] md:p-4">
      <div className="flex flex-col items-start gap-5 text-left">
        <div className="flex items-center gap-4 md:gap-5">
          <div
            className="aspect-square w-20 shrink-0 rounded-full border-4 border-[#3b82f6] bg-cover bg-center bg-no-repeat shadow-[0_12px_28px_rgba(0,0,0,0.3)] md:w-24"
            style={{ backgroundImage: "url('/yakir_uzan_1.jpg')" }}
          />

          <div>
            <h1
              className="m-0 text-2xl font-medium md:text-3xl"
              style={{
                fontFamily: '"Sour Gummy", sans-serif',
                fontVariationSettings: '"wdth" 100',
              }}
            >
              {data.home.title}
            </h1>
            <h2
              className="m-0 mt-2 text-xl font-medium text-[#3b82f6] md:text-2xl"
              style={{
                fontFamily: '"Sour Gummy", sans-serif',
                fontVariationSettings: '"wdth" 100',
              }}
            >
              {data.home.subtitle}
            </h2>
          </div>
        </div>

        <p className="m-0 max-w-[42ch] text-sm leading-7 text-white/85 md:text-base">
          {data.home.description}
        </p>

        <nav className="flex w-full flex-col gap-1 pt-2">
          {sections.map((section) => (
            <button
              key={section.key}
              type="button"
              onClick={() => onNavigate(section.key)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-all md:text-base ${
                activeSection === section.key
                  ? "bg-white/10 text-[#3b82f6]"
                  : "text-white/80 hover:bg-white/5 hover:text-[#3b82f6]"
              }`}
            >
              <span>{section.label}</span>
              <i className="fa-solid fa-arrow-right text-xs" />
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8 pt-6 md:mt-auto">
        <Dock
          items={socialButtons}
          baseItemSize={34}
          magnification={54}
          panelHeight={46}
          dockHeight={86}
        />
      </div>
    </div>
  );
}

export default Home;
