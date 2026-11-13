import { Badge } from "@mantine/core";

export const Experience = () => {
  // const experiences = [
  //   {
  //     id: 1,
  //     role: "FullStack Developer",
  //     date: "July 2025 - Present",
  //     responsibilities: [
  //       "Developed full-stack applications using MERN stack",
  //       "Designed and implemented RESTful APIs with Node.js",
  //       "Managed database architecture with MongoDB"
  //     ]
  //   },
  //   {
  //     id: 2,
  //     role: "Frontend Developer",
  //     date: "January 2025 - June 2025",
  //     responsibilities: [
  //       "Developed and maintained production-ready web applications",
  //       "Implemented complex UI components and state management",
  //       "Enhanced application architecture and code quality"
  //     ]
  //   },
  //   {
  //     id: 3,
  //     role: "Frontend Intern",
  //     date: "October 2024 - December 2024",
  //     responsibilities: [
  //       "Built responsive web applications using React and Next.js",
  //       "Collaborated with design team for UI/UX implementation",
  //       "Optimized application performance and loading times"
  //     ]
  //   }
  // ];

  return (
    <section id="experience" className="mt-2xl lg:mt-4xl">
      <div className="lg:text-7xl text-4xl font-bold text-[#7e64af] font-Ovo">
        Experience
      </div>

      <div className="mt-2xl bg-black from-transparent to-transparent rounded-2xl p-lg shadow-lg border-purpleDark border-2 ">
        {/* Company Header */}
        <div className="flex items-center justify-between gap-sm ">
          <div className="py-xs px-sm flex items-center justify-center ">
            <img
              src="/images/logo-nxit.svg"
              alt="Next In Tech"
              className="w-full h-full object-contain"
            />
          </div>
          <Badge color="#9b7fd4" variant="outline" className="mr-xs">
            October 2024 - Present
          </Badge>
          {/* <div className="text-xl font-bold text-[#7364af] font-Ovo">
            Next In Tech
          </div> */}

        </div>

        {/* Timeline */}
        {/* <div className="relative">
          {/* Vertical line */}

        {/* Experience Items */}
        {/* <div className="space-y-sm">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-sm">
                {/* Dot */}
        {/* <div className="absolute left-0 top-0 mt-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#7e64af] to-[#9b7fd4] rounded-full border-4 border-[#0a0118] shadow-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div> */}

        {/* Content */}
        {/* <div className="bg-gradient-to-br from-[#1e1538]/50 to-[#2d1b4e]/30 rounded-2xl p-sm transition-transform duration-300 shadow-lg border border-[#7e64af]/10 hover:border-purpleDark hover:bg-black hover:from-transparent hover:to-transparent">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="text-2xl font-bold text-[#c4b5fd] font-Ovo">
                      {exp.role}
                    </div>
                    <Badge color="#9b7fd4" variant="outline" className="mr-xs">
                      {exp.date}
                    </Badge>
                  </div>

                  <ul className="s">
                    {exp.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-gray-300 text-sm lg:text-base flex items-start">
                        <span className="text-[#7e64af] mr-xs text-lg">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))} */}
        {/* </div> */}
        {/* </div> */}

        <div className=" rounded-2xl p-sm transition-transform duration-300 shadow-lg border border-[#7e64af]/10 hover:border-purpleDark hover:bg-black hover:from-transparent hover:to-transparent">
          <div className="text-lg">
            Next in Tech is an innovative software company creating solutions across various domains. I joined as an intern in October 2024 and gradually grew into a Frontend Developer in January 2025 and then into a Full-Stack Developer role after six months. I currently work with a wide range of technologies, including React.js, Next.js, Nest.js, and TypeORM, building user-facing features, developing server-side logic, and integrating databases. I am fortunate to be part of a highly supportive and skilled team that fosters curiosity, experimentation, and continuous learning. The environment exposed me to a wide range of challenges and projects, allowing me to explore new technologies, research effective approaches, and take responsibility for delivering features and solutions that add real value. This experience has strengthened my technical expertise, problem-solving skills, and collaboration, while continually inspiring me to push boundaries and grow.

          </div>
        </div>
      </div>
    </section >
  );
};