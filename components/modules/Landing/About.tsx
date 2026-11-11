"use client";
import { MapPin, School, Briefcase } from "tabler-icons-react";
import { Grid, Paper, Text } from "@mantine/core";

const cards = [
  { icon: MapPin, label: "Based in", value: "Texas, USA" },
  { icon: School, label: "Studying", value: "MS CS" },
  { icon: Briefcase, label: "Work", value: "NXIT" },
];

export const About = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .card-hover {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: var(--card-bg, #4d415e);
          border: 1px solid var(--card-border, transparent);
          color: var(--card-color, inherit);
          transition: all 300ms;
        }
        .card-hover:hover {
          --card-bg: black;
          --card-border: #7e64af;
          --card-color: #7e64af;
        }
      `}} />

      <section id="about" className="mt-lg scroll-mt-4xl">
        <div className="lg:text-7xl text-5xl font-bold text-[#7e64af] font-Ovo">
          About Me
        </div>
        <div className="flex lg:justify-between lg:flex-row-reverse flex-col w-full lg:gap-x-xl mt-lg">
          <div className="lg:w-2/4 flex mb-xl lg:mb-0">
            <Grid gutter="10" justify="center" align="center" className="w-full">
              {cards.map(({ icon: Icon, label, value }) => (
                <Grid.Col span={4} key={label}>
                  <Paper
                    shadow="lg"
                    radius="lg"
                    p="lg"
                    className="card-hover h-[160px] sm:h-[200px] lg:h-[280px]"
                  >
                    <Icon size={32} />
                    <Text className="text-lg sm:text-2xl">{label}</Text>
                    <Text className="text-lg sm:text-2xl">{value}</Text>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </div>
          <div className="lg:w-2/4 text-lg leading-relaxed">
            Hi! I&apos;m Dikshya, a full-stack developer from Nepal, currently
            pursuing an MS in Computer Science at Lamar University in Texas,
            where I also work as a Graduate Research Assistant on applied AI.
            <br />
            <br />
            At Next In Tech (NXIT), I grew from frontend intern to full-stack
            developer. I build
            production web apps with React, Next.js, NestJS, and TypeORM, from
            e-commerce platforms to booking and management systems.
            <br />
            <br />
            I hold a Bachelor&apos;s in Computer Engineering from Purbanchal
            University. Outside of code, I enjoy music, books, and time in
            nature.
          </div>
        </div>
      </section>
    </>
  );
};
