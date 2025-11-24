"use client";
export const Skills = () => {


    const skills = [
        { name: "JavaScript", image: "/images/JavaScript.webp" },
        { name: "TypeScript", image: "/images/Typescript.webp" },
        { name: "React", image: "/images/React.png" },
        { name: "Next.js", image: "/images/NextJs.png" },
        { name: "Node.js", image: "/images/nodejs.webp" },
        { name: "Express.js", image: "/images/ExpressJs.png" },
        { name: "NestJS", image: "/images/NestJs.png" },
        // { name: "MongoDB", image: "/images/MongoDB.png" },
        { name: "SQL", image: "/images/SQL.png" },
        { name: "TypeORM", image: "/images/typeorm.png" },
        // { name: "PHP", image: "/images/PHP.png" },
        { name: "Python", image: "/images/Python.png" },
        // { name: "C", image: "/images/C.png" },
        // { name: "C++", image: "/images/C++.png" },
        // { name: "Tailwind CSS", image: "/images/Tailwind_CSS.png" },
        // { name: "Mantine", image: "/images/mantine.png" },
        // { name: "Git", image: "/images/Git.png" },
    ];

    return (
        <>
            <section id="skills" className="mt-2xl lg:mt-4xl scroll-mt-4xl">
                <div className="lg:text-7xl text-4xl font-bold text-[#7e64af] font-Ovo">
                    Skills{" "}
                </div>{" "}
                <div className="flex flex-col mt-2xl">
                    <div className="grid gap-lg grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))]">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="relative w-36 h-36 rounded-2xl bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] hover:bg-black hover:from-transparent hover:to-transparent
 flex flex-col  items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg hover:bg-black hover:border-purpleDark border-2 border-transparent"
                            >

                                <img
                                    src={skill.image}
                                    alt={skill.name}
                                    className="w-[100px] h-[120px] object-contain"
                                />
                                <p className="mt-2 text-center font-semibold text-[#7e64af] font-Ovo text-lg">
                                    {skill.name}
                                </p>


                            </div>


                        ))}
                    </div>
                </div>


            </section>
        </>
    );
};
