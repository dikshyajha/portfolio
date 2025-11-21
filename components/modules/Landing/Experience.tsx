"use client";
export const Experience = () => {
  const experiences = [
    {
      id: 1,
      companyLogo: "/images/logo-nxit.svg",
      role: "Frontend Intern",
      company: "Next In Tech",
      date: "September 2024 - December 2025",
      responsibilities: [
        "Built responsive web applications using React and Next.js",
        "Collaborated with design team for UI/UX implementation",
        "Optimized application performance and loading times"
      ]
    },
    {
      id: 2,
      companyLogo: "/images/logo-nxit.svg",
      role: "FullStack Developer",
      company: "Next In Tech",
      date: "February 2025 - Present ",
      responsibilities: [
        "Developed full-stack applications using MERN stack",
        "Designed and implemented RESTful APIs with Node.js",
        "Managed database architecture with MongoDB"
      ]
    },
    {
      id: 3,
      companyLogo: "/images/udeshya-logo.svg",
      role: "Tech Content Creator & Program Coordinator (Volunteer)",
      company: "Udeshya - Girls In STEM",
      date: "October 2025 - Present", // or specific dates
      responsibilities: [
        "Created engaging tech content to promote STEM education for girls",
        "Organized and ran programs to increase girls' involvement in technology",
        "Collaborated with team to raise awareness about women in STEM fields"
      ]
    },
    {
      id: 4,
      companyLogo: "/images/healthcore-logo.svg",
      role: "Event Volunteer",
      company: "Health Core Foundation",
      date: "March 2025 - Present",
      responsibilities: [
        "Participated in social welfare events and community outreach programs",
        "Assisted in organizing awareness campaigns",
        "Collaborated with team members to support community initiatives"
      ]
    }
  ];

  return (
    <section id="experience" className="mt-2xl lg:mt-4xl">
      <div className="lg:text-7xl text-4xl font-bold text-[#7e64af] font-Ovo">
        Experience
      </div>

      <div className="relative mt-2xl max-w-6xl mx-auto">
        {/* Timeline vertical line for desktop */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative mb-2xl last:mb-0"
          >
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-center">
              {index % 2 === 0 ? (
                <>
                  {/* Left side - Content */}
                  <div className="w-1/2 ">
                    <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] shadow-xl p-md rounded-2xl hover:shadow-[#a78bfa]/20 transition-all duration-300">
                      <div className="text-2xl font-bold text-[#c4b5fd] font-Ovo ">
                        {exp.role}
                      </div>
                      <p className="text-[#9b7fd4] font-semibold ">{exp.company}</p>

                      <ul className="">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-[#7e64af]">•</span>
                            <span className="">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center - Logo and date */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                    <span className="text-gray-400 text-sm font-semibold mb-xs whitespace-nowrap">
                      {exp.date}
                    </span>
                    <div className="w-12 h-12 px-md py-xs bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] rounded-full border-2 border-white flex items-center justify-center shadow-xl">
                      <img
                        src={exp.companyLogo}
                        alt={exp.company}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>

                  {/* Right side - Empty */}
                  <div className="w-1/2"></div>
                </>
              ) : (
                <>
                  {/* Left side - Empty */}
                  <div className="w-1/2"></div>

                  {/* Center - Logo and date */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
                    <span className="text-gray-400 text-sm font-semibold mb-xs whitespace-nowrap">
                      {exp.date}
                    </span>
                    <div className="w-12 h-12 px-md py-xs bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] rounded-full border-2 border-white flex items-center justify-center shadow-xl">
                      <img
                        src={exp.companyLogo}
                        alt={exp.company}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>

                  {/* Right side - Content */}
                  <div className="w-1/2 ">
                    <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] shadow-xl p-md rounded-2xl hover:shadow-[#a78bfa]/20 transition-all duration-300 pl-6xl">
                      <div className="text-2xl font-bold text-[#c4b5fd] font-Ovo ">
                        {exp.role}
                      </div>
                      <p className="text-[#9b7fd4] font-semibold ">{exp.company}</p>

                      <ul className="">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-[#7e64af]">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden relative  mb-3xl last:mb-0">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white"></div>

              <div className="absolute left-0 transform -translate-x-1/2 top-0">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] rounded-full border-2 border-white flex items-center justify-center shadow-xl px-sm py-xs">
                  <img
                    src={exp.companyLogo}
                    alt={exp.company}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] shadow-xl px-4xl py-sm rounded-2xl">
                <span className="text-gray-400 text-sm font-semibold block">
                  {exp.date}
                </span>
                <h3 className="text-xl font-bold text-[#c4b5fd] font-Ovo">
                  {exp.role}
                </h3>
                <p className="text-[#9b7fd4] font-semibold ">{exp.company}</p>

                <ul className="">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-[#7e64af] ">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};