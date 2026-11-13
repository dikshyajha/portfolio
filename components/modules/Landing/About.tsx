"use client";
import { Home, School, Briefcase } from "tabler-icons-react";
import { Grid, Paper, Text } from "@mantine/core";

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
            <Grid gutter="10" justify="center" align="center">
              <Grid.Col span={4}>
                <Paper
                  shadow="lg"
                  radius="lg"
                  p="lg"
                  className="card-hover sm:w-[220px] sm:h-[200px] lg:w-[180px] lg:h-[280px]"
                >
                  <Home size={32} />
                  <Text className="text-2xl">Home</Text>
                  <Text className="text-2xl">Nepal</Text>
                </Paper>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper
                  shadow="lg"
                  radius="lg"
                  p="lg"
                  className="card-hover sm:w-[220px] sm:h-[200px] lg:w-[180px] lg:h-[280px]"
                >
                  <School size={32} />
                  <Text className="text-2xl">Education</Text>
                  <Text className="text-2xl">BE</Text>
                </Paper>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper
                  shadow="lg"
                  radius="lg"
                  p="lg"
                  className="card-hover sm:w-[220px] sm:h-[200px] lg:w-[180px] lg:h-[280px]"
                >
                  <Briefcase size={32} />
                  <Text className="text-2xl">Work</Text>
                  <Text className="text-2xl">NXIT</Text>
                </Paper>
              </Grid.Col>
            </Grid>
          </div>
          <div className="lg:w-2/4 text-lg">
            Greetings! I am Dikshya K. Jha, hailing from the culturally rich and
            geographically diverse nation of Nepal. I hold a Bachelor&apos;s degree
            in Computer Engineering from Purbanchal University and am currently
            honing my expertise as a Software Developer at NXIT, where I immerse
            myself in the dynamic world of technology.
            <br />
            <br />
            Beyond the professional realm, my intellectual curiosity extends to
            the realms of music, reading books, and the exploration of nature&apos;s
            most serene and untamed vistas. My intrinsic drive for perpetual
            growth propels me to embrace novel challenges and cultivate an
            insatiable thirst for knowledge, all while striving for excellence
            and mastery in every facet of my life&apos;s endeavors.
          </div>
        </div>
      </section>
    </>
  );
};