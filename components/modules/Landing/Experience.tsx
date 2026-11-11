import { Badge } from "@mantine/core";

const education = [
  {
    degree: "MS in Computer Science",
    school: "Lamar University, Texas",
    date: "Aug 2026 - May 2028 (expected)",
    details: [
      "Graduate Research Assistant under Dr. Sujing Wang (applied AI)",
      "Coursework: Computer Networks, Artificial Intelligence",
      "1st among Lamar participants, Texas State University System CTF 2026 (EC-Council)",
    ],
  },
  {
    degree: "BE in Computer Engineering",
    school: "Purbanchal University, Nepal",
    date: "",
    details: [],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="mt-2xl lg:mt-4xl scroll-mt-4xl">
      <div className="lg:text-7xl text-4xl font-bold text-[#7e64af] font-Ovo">
        Experience
      </div>

      <div className="mt-2xl bg-black rounded-2xl p-lg shadow-lg border-purpleDark border-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-sm">
          <div className="py-xs px-sm flex items-center">
            <img
              src="/images/logo-nxit.svg"
              alt="Next In Tech"
              className="h-[48px] object-contain"
            />
          </div>
          <Badge color="#9b7fd4" variant="outline" className="mr-xs">
            October 2024 - Present
          </Badge>
        </div>

        <div className="rounded-2xl p-sm mt-sm border border-[#7e64af]/10 hover:border-purpleDark transition-colors duration-300">
          <div className="text-2xl text-[#c4b5fd] font-Ovo">
            Full-Stack Developer
          </div>
          <div className="text-sm text-gray-400 mb-sm">
            Intern (Oct 2024) → Frontend Developer (Jan 2025) → Full-Stack Developer (Jul 2025)
          </div>
          <ul className="space-y-xs">
            {[
              "Build user-facing features and server-side logic with React, Next.js, NestJS, and TypeORM",
              "Work on a Next.js/TypeScript monorepo e-commerce platform for customizable garments",
              "Shipped client products including ConnectTalent, CliniCross, and Biruwa Pasa",
            ].map((item) => (
              <li key={item} className="text-gray-300 flex items-start">
                <span className="text-[#7e64af] mr-xs">▹</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-2xl lg:text-5xl text-3xl font-bold text-[#7e64af] font-Ovo">
        Education
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md mt-lg">
        {education.map((ed) => (
          <div
            key={ed.degree}
            className="bg-black rounded-2xl p-lg shadow-lg border-purpleDark border-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-xs">
              <div>
                <div className="text-2xl text-[#c4b5fd] font-Ovo">{ed.degree}</div>
                <div className="text-gray-400">{ed.school}</div>
              </div>
              {ed.date && (
                <Badge color="#9b7fd4" variant="outline">
                  {ed.date}
                </Badge>
              )}
            </div>
            {ed.details.length > 0 && (
              <ul className="space-y-xs mt-sm">
                {ed.details.map((d) => (
                  <li key={d} className="text-gray-300 flex items-start">
                    <span className="text-[#7e64af] mr-xs">▹</span>
                    <span className="leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
