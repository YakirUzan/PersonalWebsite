import SocialComponent from "./SocialComponent.jsx";
import { data } from "../data.jsx";

const bottomButtonClasses =
  "flex h-5 w-5 items-center justify-center rounded-full bg-white/80 text-[70%] text-[#333333] shadow-md transition-colors hover:bg-[#333333] hover:text-white md:h-7 md:w-7 md:text-[90%]";

function AppBottomComponent() {
  return (
    <footer className="flex items-center justify-between bg-[#ffbd3f] px-3 py-2 text-[#333333] md:px-5 md:py-4">
      <p className="m-0 text-[0.6em] md:text-base">{data.copyrights}</p>

      <div className="flex gap-1 md:gap-2.5">
        <SocialComponent
          className={bottomButtonClasses}
          url={data.social.linkedin}
          icon="fa-brands fa-linkedin-in"
          label="LinkedIn"
        />
        <SocialComponent
          className={bottomButtonClasses}
          url={data.social.facebook}
          icon="fa-brands fa-facebook-f"
          label="Facebook"
        />
        <SocialComponent
          className={bottomButtonClasses}
          url={data.social.github}
          icon="fa-brands fa-github"
          label="GitHub"
        />
        <SocialComponent
          className={bottomButtonClasses}
          url={data.social.gmail}
          icon="fab fa-google"
          label="Gmail"
        />
        <SocialComponent
          className={bottomButtonClasses}
          url={data.social.whatsapp}
          icon="fa-brands fa-whatsapp"
          label="WhatsApp"
        />
      </div>
    </footer>
  );
}

export default AppBottomComponent;
