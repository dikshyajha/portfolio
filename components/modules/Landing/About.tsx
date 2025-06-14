"use client";
import { Home, School, Briefcase } from "tabler-icons-react";
import { Grid, Paper, Text } from "@mantine/core";

export const About = () => {
  return (
    <>
      <section className="lg:mt-lg sm:mt-2xl">
        <div className="lg:text-7xl sm:text-5xl font-bold text-[#7e64af] font-Ovo mb-xl">
          About Me
        </div>
        <div className="flex lg:justify-between lg:flex-row sm:flex-col-reverse w-full lg:gap-x-xl sm:gap-y-xl mt-lg">
          <div className="lg:w-2/4 lg:text-xl sm:text-lg">
            Greetings! I am Dikshya K. Jha, hailing from the culturally rich and
            geographically diverse nation of Nepal. I hold a Bachelor's degree
            in Computer Engineering from Purbanchal University and am currently
            honing my expertise as a Frontend Developer at NXIT, where I immerse
            myself in the dynamic world of technology.
            <br />
            <br />
            Beyond the professional realm, my intellectual curiosity extends to
            the realms of music, reading books, and the exploration of nature’s
            most serene and untamed vistas. My intrinsic drive for perpetual
            growth propels me to embrace novel challenges and cultivate an
            insatiable thirst for knowledge, all while striving for excellence
            and mastery in every facet of my life’s endeavors.
          </div>

          <div className="lg:w-2/4 flex justify-center lg:mt-lg">
            <Grid gutter="lg" justify="center" align="center">
              <Grid.Col span={4} className="">
                <Paper
                  shadow="lg"
                  radius="lg"
                  p="lg"
                  className="bg-purpleDark hover:bg-black hover:border-purpleDark hover:text-[#7e64af] border-2 border-transparent flex flex-col items-center justify-center transition-all duration-300 sm:w-[150px] sm:h-[200px] lg:w-[200px] lg:h-[280px]"
                >
                  <Home size={32} />
                  <Text className="text-xl">Home</Text>
                  <Text className="text-xl">Nepal</Text>
                </Paper>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper
                  shadow="lg"
                  radius="lg"
                  p="lg"
                  className="bg-purpleDark hover:bg-black hover:border-purpleDark hover:text-[#7e64af] border-2 border-transparent flex flex-col items-center justify-center transition-all duration-300 sm:w-[150px] sm:h-[200px] lg:w-[200px] lg:h-[280px]"
                >
                  <School size={32} />
                  <Text className="text-xl">Education</Text>
                  <Text className="text-xl">BE</Text>
                </Paper>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper
                  shadow="lg"
                  radius="lg"
                  p="lg"
                  className="bg-purpleDark hover:bg-black hover:border-purpleDark hover:text-[#7e64af] border-2 border-transparent flex flex-col items-center justify-center transition-all duration-300 sm:w-[150px] sm:h-[200px] lg:w-[200px] lg:h-[280px]"
                >
                  <Briefcase size={32} />
                  <Text className="text-xl">Work</Text>
                  <Text className="text-xl">NXIT</Text>
                </Paper>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </section>
    </>
  );
};
