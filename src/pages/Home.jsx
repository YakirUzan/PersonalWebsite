import { data } from "../data.jsx";

const socialButtons = [
  {
    key: "linkedin",
    url: data.social.linkedin,
    icon: "fab fa-linkedin",
    label: "LinkedIn",
    color: "text-[#0077b5] hover:bg-[#005f8c]",
  },
  {
    key: "facebook",
    url: data.social.facebook,
    icon: "fa-brands fa-facebook",
    label: "Facebook",
    color: "text-[#3b5998] hover:bg-[#2d4373]",
  },
  {
    key: "github",
    url: data.social.github,
    icon: "fa-brands fa-github",
    label: "GitHub",
    color: "text-black hover:bg-black",
  },
  {
    key: "gmail",
    url: data.social.gmail,
    icon: "fab fa-google",
    label: "Gmail",
    color: "text-[#db4437] hover:bg-[#c1351d]",
  },
  {
    key: "whatsapp",
    url: data.social.whatsapp,
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
    color: "text-[#25d366] hover:bg-[#1ebe57]",
  },
];

function Home({ activeSection, onNavigate, sections }) {
  return (
    <div className="flex h-full flex-col p-2 md:min-h-[calc(100vh-3rem)] md:p-4">
      <div className="flex flex-col items-start gap-5 text-left">
        <div className="flex items-center gap-4 md:gap-5">
          <div
            className="aspect-square w-20 shrink-0 rounded-full border-4 border-[#ffbd3f] bg-cover bg-center bg-no-repeat shadow-[0_12px_28px_rgba(0,0,0,0.3)] md:w-24"
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
              className="m-0 mt-2 text-xl font-medium text-[#ffbd3f] md:text-2xl"
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
                  ? "bg-white/10 text-[#ffbd3f]"
                  : "text-white/80 hover:bg-white/5 hover:text-[#ffbd3f]"
              }`}
            >
              <span>{section.label}</span>
              <i className="fa-solid fa-arrow-right text-xs" />
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-8 pt-6 md:mt-auto">
        <div className="flex flex-wrap gap-3">
          {socialButtons.map((button) => (
            <a
              key={button.key}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={button.label}
              className="flex items-center justify-center rounded-2xl px-1 py-1 text-white transition-all hover:bg-white/5"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm shadow-[0_4px_10px_rgba(0,0,0,0.25)] ${button.color}`}
              >
                <i className={button.icon} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
