const iconTitles = {
  java: "Java",
  c: "C (Language)",
  cpp: "C++",
  python: "Python",
  angular: "Angular",
  typescript: "TypeScript",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  mysql: "MySql",
  firebase: "Firebase",
  gcp: "Google Cloud Platform",
  android: "Android",
  googlemaps: "Google Maps API",
  pandas: "Pandas",
  numpy: "NumPy",
  vxworks: "VxWorks",
  intellij: "IntelliJ",
  pycharm: "PyCharm",
  visualstudio: "Visual Studio",
  webstorm: "WebStorm",
};

function SkillComponent({ extra }) {
  const title = iconTitles[extra];

  return (
    <div className="flex items-center rounded-[5px] bg-[#f9f9f9] p-[5px] text-[#333333] shadow-[0_6px_12px_rgba(0,0,0,0.2)]">
      {title ? (
        <div className="group relative inline-block">
          <div className="flex h-4 w-4 items-center justify-center md:h-5 md:w-5">
            <img src={`/${extra}.png`} alt={title} className="h-full w-full" />
          </div>
          <div className="pointer-events-none absolute bottom-[150%] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-[5px] bg-black px-2 py-1 text-[clamp(.7em,1.1vw,1em)] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {title}
          </div>
        </div>
      ) : (
        <p className="m-0 text-[clamp(.5em,1.1vw,1em)]">{extra}</p>
      )}
    </div>
  );
}

export default SkillComponent;
