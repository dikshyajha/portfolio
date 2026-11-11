"use client";
import { Button, Grid, Paper, Text, Textarea, TextInput } from "@mantine/core";
import { BrandGithub, BrandLinkedin, Mail } from "tabler-icons-react";

export const Contact = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--card-bg, #4d415e);
          border: 2px solid var(--card-border, transparent);
          color: var(--card-color, inherit);
          transition: all 300ms;
        }
        .contact-card:hover {
          --card-bg: black;
          --card-border: #7e64af;
          --card-color: #7e64af;
        }
        .custom-input input,
  .custom-input textarea {
    background-color: transparent !important;
  }



  .custom-input input::placeholder,
  .custom-input textarea::placeholder {
    color: #9ca3af !important;
    opacity: 1 !important;
  }
          .submit-button {
          background-color: #7e64af !important;
          color: white !important;
          border: 1px solid transparent !important;
          transition: all 300ms !important;
        }
        .submit-button:hover {
          background-color: black !important;
          color: #7e64af !important;
          border-color: #7e64af !important;
        }
      `}} />

      <section id="contact" className="mt-2xl scroll-mt-4xl">
        <div className="lg:text-7xl text-4xl font-bold text-[#7e64af] font-Ovo">
          Contact
        </div>
        <div className="flex flex-col md:flex-row items-stretch mt-2xl">
          <div className="w-full md:w-1/4">
            <Grid gutter="lg" justify="center" align="center">
              {[
                { icon: Mail, label: "Email", value: "dikshya.k.jha@gmail.com", href: "mailto:dikshya.k.jha@gmail.com" },
                { icon: BrandGithub, label: "GitHub", value: "dikshyajha", href: "https://github.com/dikshyajha" },
                { icon: BrandLinkedin, label: "LinkedIn", value: "Dikshya K. Jha", href: "https://www.linkedin.com/in/dikshya-k-jha" },
              ].map(({ icon: Icon, label, value, href }) => (
                <Grid.Col span={12} key={label}>
                  <Paper
                    component="a"
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    shadow="lg"
                    radius="lg"
                    p="sm"
                    className="contact-card w-full md:w-[300px] h-[140px] justify-center"
                  >
                    <Icon size={32} />
                    <Text className="text-lg lg:text-2xl">{label}</Text>
                    <Text className="text-sm lg:text-lg break-all text-center">{value}</Text>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>
          </div>
          <div className="w-full md:w-3/4 md:ml-xl mt-md md:mt-none">
            <form
              action="https://formspree.io/f/myzvoadz"
              method="POST"
              className="lg:px-4xl"
            >
              <div>
                <TextInput
                  name="name"
                  placeholder="Your Name"
                  required
                  minLength={3}
                  className="custom-input h-6xl mb-xl border-2 border-purpleDark rounded-xl"
                  styles={{
                    input: {
                      backgroundColor: 'transparent',
                      color: 'white'
                    }
                  }}
                />
              </div>
              <div>
                <TextInput
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  required
                  className="custom-input h-6xl mb-xl border-2 border-purpleDark rounded-xl"
                  styles={{
                    input: {
                      backgroundColor: 'transparent',
                      color: 'white'

                    }
                  }}
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  minLength={5}
                  className="custom-input h-[150px] mb-lg border-2 border-purpleDark rounded-xl"
                  styles={{
                    input: {
                      backgroundColor: 'transparent',
                      color: 'white'

                    }
                  }}
                />
              </div>

              <Button
                type="submit"
                variant="filled"
                color="#7e64af"
                size="lg"
                className="submit-button "
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};