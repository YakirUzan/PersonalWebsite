import { data } from "../data.jsx";

function About() {
  return (
    <div className="w-full">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#93c5fd]">
        About
      </p>
      <h2 className="m-0 text-3xl text-[#eff6ff]">About Me</h2>
      <p className="mt-4 whitespace-pre-line text-base leading-8 text-[#dbeafe]">
        {data.about.description}
      </p>
    </div>
  );
}

export default About;
