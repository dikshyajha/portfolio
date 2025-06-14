"use client";
import { useForm } from "@mantine/form";
import { Button, Grid, Paper, Text, Textarea, TextInput } from "@mantine/core";
import { BrandInstagram, Mail } from "tabler-icons-react";

export const Contact = () => {
  interface FormValues {
    name: string;
    email: string;
    message: string;
  }
  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.length < 3 ? "Name must have at least 3 characters" : null,
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      message: (value) =>
        value.length < 10 ? "Message must have at least 10 characters" : null,
    },
  });

  const handleSubmit = (values: FormValues) => {
    console.log("Form Submitted:", values);
    alert("Message sent successfully!");
    form.reset();
  };

  return (
    <section className="lg:mt-lg sm:mt-2xl">
      <div className="lg:text-7xl sm:text-5xl mb-xl font-bold text-[#7e64af] font-Ovo">
        Contact
      </div>
      <div className="flex flex-row items-stretch ">
        <div className="w-1/4">
          <Grid gutter="lg" justify="center" align="center">
            <Grid.Col span={12} className="">
              <Paper
                shadow="lg"
                radius="lg"
                p="lg"
                className="bg-purpleDark hover:bg-black hover:border-purpleDark hover:text-[#7e64af] border-2 border-transparent flex flex-col items-center  transition-all duration-300 sm:w-[220] lg:w-[300px] h-[280px]"
              >
                <Mail size={32} className="mt-lg" />
                <Text className="lg:text-xl sm:text-md mt-md">Email</Text>
                <Text className="lg:text-xl sm:text-md">
                  dikshya.k.jha@gmail.com
                </Text>
                <Text className="lg:mt-lg sm:mt-md lg:text-lg cursor-pointer">
                  Send a message
                </Text>
              </Paper>
            </Grid.Col>
            <Grid.Col span={12}>
              <Paper
                shadow="lg"
                radius="lg"
                p="lg"
                className="bg-purpleDark hover:bg-black hover:border-purpleDark hover:text-[#7e64af] border-2 border-transparent flex flex-col items-center transition-all duration-300 sm:w-[220] lg:w-[300px] h-[280px]"
              >
                <BrandInstagram size={32} className="mt-lg" />
                <Text className="lg:text-xl sm:text-md mt-md">Instagram</Text>
                <Text className="lg:text-xl sm:text-md">dikshya_jha</Text>
                <Text className="lg:mt-lg sm:mt-md lg:text-lg cursor-pointer">
                  Send a message
                </Text>
              </Paper>
            </Grid.Col>
          </Grid>
        </div>
        <div className="w-3/4 ml-xl">
          <form
            onSubmit={form.onSubmit((values) => handleSubmit(values))}
            className="lg:px-4xl sm:px-2xl"
          >
            <div>
              <TextInput
                placeholder="Your Name"
                {...form.getInputProps("name")}
                className="h-6xl mb-xl border-2 border-purpleDark rounded-xl"
              />
            </div>
            <div>
              <TextInput
                placeholder="Your Email"
                {...form.getInputProps("email")}
                className="h-6xl mb-xl border-2 border-purpleDark rounded-xl custom-placeholder"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                {...form.getInputProps("message")}
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
