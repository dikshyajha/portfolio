"use client";
export const Work = () => {
  const experiences = [
    {
      id: 1,
      companyLogo: "/company1.png",
      role: "Frontend Intern",
      company: "Next In Tech",
      description: "loremepsum",
      date: "October 2024 - January 2025",
    },
    {
      id: 2,
      companyLogo: "/company2.png",
      role: "Frontend Intern",
      company: "Next In Tech",
      description: "loremepsum",
      date: "October 2024 - January 2025",
    },
  ];

  const skills = [
    { name: "HTML", image: "/images/html-logo.png" },
    { name: "CSS", image: "/images/css-logo.png" },
    { name: "JavaScript", image: "/images/javascript-logo.png" },
    { name: "React", image: "/images/react-logo.png" },
    { name: "Next.js", image: "/images/nextjs-logo.png" },
    { name: "TypeScript", image: "/images/typescript-logo.png" },
    { name: "Tailwind CSS", image: "/images/tailwind-logo.png" },
    { name: "GSAP", image: "/images/gsap-logo.png" },
    { name: "Framer Motion", image: "/images/framer-motion-logo.png" },
    { name: "Git", image: "/images/git-logo.png" },
  ];

  return (
    <>
      <section className="lg:mt-lg sm:mt-2xl">
        <div className="lg:text-7xl sm:text-5xl mb-xl font-bold text-[#7e64af] font-Ovo">
          Work{" "}
        </div>
        <div className="lg:text-6xl sm:text-4xl mb-sm font-bold text-[#7e64af] font-Ovo">
          Experience
        </div>
        <div className="relative border-l-4 border-white">
          {experiences.map((exp, index) => (
            <div key={exp.id} className=" flex items-start">
              <div className="w-md h-md bg-white rounded-full border-4 border-gray-300 flex items-center justify-center absolute -left-sm">
                <img
                  src={exp.companyLogo}
                  alt={exp.company}
                  className="w-md h-md rounded-full"
                />
              </div>

              <div className="ml-8">
                <div className="bg-white shadow-lg p-6 rounded-xl max-w-md">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-gray-500">{exp.company}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    {exp.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-4">{exp.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:text-6xl sm:text-4xl mb-sm font-bold text-[#7e64af] font-Ovo">
          Skills{" "}
        </div>{" "}
        <div className="flex justify-center">
          <div className="grid gap-5 grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative flex justify-center items-center w-[120px] h-[104px] bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-semibold text-center hexagon hover:scale-105 transition-transform duration-300"
              >
                {/* <span>{skill}</span> */}
              </div>
            ))}
          </div>
        </div>
        {/* Hexagon Styling */}
        <style jsx>{`
          .hexagon {
            clip-path: polygon(
              25% 0%,
              75% 0%,
              100% 50%,
              75% 100%,
              25% 100%,
              0% 50%
            );
          }
        `}</style>
        <div className="lg:text-6xl sm:text-4xl mb-sm font-bold text-[#7e64af] font-Ovo">
          Projects{" "}
        </div>
      </section>
    </>
  );
};
