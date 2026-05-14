import Dock from "./Dock.jsx";
import { data } from "../data.jsx";

const socialItems = [
  {
    url: data.social.linkedin,
    icon: <i className="fa-brands fa-linkedin-in" />,
    label: "LinkedIn",
    color: "#0077b5",
  },
  {
    url: data.social.facebook,
    icon: <i className="fa-brands fa-facebook-f" />,
    label: "Facebook",
    color: "#3b5998",
  },
  {
    url: data.social.github,
    icon: <i className="fa-brands fa-github" />,
    label: "GitHub",
    color: "#181717",
  },
  {
    url: data.social.gmail,
    icon: <i className="fab fa-google" />,
    label: "Gmail",
    color: "#db4437",
  },
  {
    url: data.social.whatsapp,
    icon: <i className="fa-brands fa-whatsapp" />,
    label: "WhatsApp",
    color: "#25d366",
  },
];

function AppBottomComponent() {
  return (
    <footer className="flex items-center justify-between gap-3 bg-[#3b82f6] px-3 py-2 text-white md:px-5 md:py-4">
      <p className="m-0 text-[0.6em] md:text-base">{data.copyrights}</p>

      <Dock items={socialItems} />
    </footer>
  );
}

export default AppBottomComponent;
