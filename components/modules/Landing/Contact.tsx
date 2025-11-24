"use client";
import { Button, Grid, Paper, Text, Textarea, TextInput } from "@mantine/core";
import { BrandGithub, BrandLinkedin, Mail } from "tabler-icons-react";

export const Contact = () => {


  return (
    <section id="contact" className="mt-2xl scroll-mt-4xl" >
      <div className="lg:text-7xl text-4xl font-bold text-[#7e64af] font-Ovo">
        Contact
      </div>
      <div className="flex flex-col md:flex-row items-stretch mt-2xl ">
        <div className="w-full md:w-1/4">
          <Grid gutter="lg" justify="center" align="center">
            <Grid.Col span={12} className="">
              <Paper
                shadow="lg"
                radius="lg"
                p="sm"
                className="bg-purpleDark hover:bg-black hover:border-purpleDark hover:text-[#7e64af] border-2 border-transparent flex flex-col items-center  transition-all duration-300 md:w-[300px] h-[170px]"
              >
                <Mail size={32} className="mt-sm" />
                <Text className="lg:text-xl sm:text-md ">Email</Text>
                <Text className="lg:text-xl sm:text-md">
                  dikshya.k.jha@gmail.com
                </Text>
                {/* <Text className="mt-sm lg:text-lg cursor-pointer">
                  Send a message
                </Text> */}
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper
                shadow="lg"
                radius="lg"
                p="sm"
                className="hidden md:flex bg-purpleDark hover:bg-black hover:border-purpleDark hover:text-[#7e64af] border-2 border-transparent flex flex-col items-center transition-all duration-300 md:w-[300px] h-[170px]"
              >
                <BrandGithub size={32} className="mt-sm" />
                <Text className="lg:text-xl sm:text-md ">GitHub</Text>
                <Text className="lg:text-xl sm:text-md">dikshyajha</Text>
                {/* <Text className="mt-sm lg:text-lg cursor-pointer">
                  View my work
                </Text> */}
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper
                shadow="lg"
                radius="lg"
                p="sm"
                className="hidden md:flex bg-purpleDark hover:bg-black hover:border-purpleDark hover:text-[#7e64af] border-2 border-transparent flex flex-col items-center transition-all duration-300 md:w-[300px] h-[170px]"
              >
                <BrandLinkedin size={32} className="mt-sm" />
                <Text className="lg:text-xl sm:text-md ">LinkedIn</Text>
                <Text className="lg:text-xl sm:text-md">Dikshya K. Jha</Text>
                {/* <Text className="mt-sm lg:text-lg cursor-pointer">
                  Send a message
                </Text> */}
              </Paper>
            </Grid.Col>
          </Grid>
        </div>
        <div className="w-full md:w-3/4 md:ml-xl">
          <form
            action="https://formspree.io/f/myzvoadz"
            method="POST"
            className="lg:px-4xl "
          >
            <div>
              <TextInput
                name="name"
                placeholder="Your Name"
                required
                minLength={3}
                // {...form.getInputProps("name")}
                className="h-6xl mb-xl border-2 border-purpleDark rounded-xl"
              />
            </div>
            <div>
              <TextInput
                name="email"
                placeholder="Your Email"
                type="email"
                required
                // {...form.getInputProps("email")}
                className="h-6xl mb-xl border-2 border-purpleDark rounded-xl custom-placeholder"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                minLength={5}
                // {...form.getInputProps("message")}
                className=" h-[150px] mb-lg border-2 border-purpleDark rounded-xl"
              />
            </div>

            <Button
              type="submit"
              variant="filled"
              color="#7e64af"
              size="lg"
              className=" hover:text-[#7e64af] hover:bg-black hover:border-[#7e64af] border-1 border-transparent transition-all duration-300"
            >
              Send Message
            </Button>
          </form>
        </div>{" "}
      </div>
    </section>
  );
};
