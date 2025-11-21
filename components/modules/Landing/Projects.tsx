"use client";
import { Carousel } from "@mantine/carousel";
import { ActionIcon, Button } from "@mantine/core";
import { BrandGithub, ExternalLink } from "tabler-icons-react";

export const Projects = () => {
    const projects = [
        {
            title: "Biruwa Pasa",
            description: "Nursery e-commerce platform built for seamless plant shopping experience",
            images: [
                "/images/BiruwaPasa/landing.png",
            ],
            github: "",
            liveUrl: "https://biruwapasa.com",
        },
        {
            title: "PathToConnectTalent",
            description: "Platform connecting talents with opportunities and hosting tech-related educational trainings",
            images: [
                "/images/PathToConnectTalent/landing.png",
            ],
            github: "",
            liveUrl: "",
        },
        {
            title: "CliniCross",
            description: "Dental appointment management system streamlining patient bookings and clinic operations",
            images: [
                "/images/CliniCross/landing.png",
            ],
            github: "",
            liveUrl: "",
        },
        {
            title: "TravelTales",
            description: "Blog sharing platform for travelers to share stories, experiences, travel insights and connect",
            images: [
                "/images/Travel Tales/landing.png",
                "/images/Travel Tales/signin.png",
                "/images/Travel Tales/homepage.png",
                "/images/Travel Tales/add post.png",
                "/images/Travel Tales/chat-nomessage.png",
                "/images/Travel Tales/chat-message.png",
                "/images/Travel Tales/janaki.png",
                "/images/Travel Tales/user profile.png",
                "/images/Travel Tales/seemore.png",
                "/images/Travel Tales/saved posts.png",

            ],
            github: "https://github.com/dikshyajha/MERN-travel-tales",
            liveUrl: "https://traveltales-ruby.vercel.app/",
        },
        {
            title: "ParkEase",
            description: "Smart parking management system with IoT integration for real-time parking availability",
            images: [
                "/images/ParkEase-Website/landing.png",
                "/images/ParkEase-Website/login.png",
            ],
            github: "",
            liveUrl: "",
        },
        // {
        //     title: "ParkEase App",
        //     description: "Mobile application built with Flutter for seamless parking spot booking and management",
        //     images: [
        //         "/images/ParkEase-App/admin-dashboard.png",
        //         "/images/ParkEase-App/booking-details.png",
        //         "/images/ParkEase-App/gatekeeper-detail.png",
        //         "/images/ParkEase-App/main-page-room.png",
        //         "/images/ParkEase-App/parking-areas.png",
        //     ],
        //     github: "https://github.com/yourusername/parkease-app",
        //     liveUrl: null, // Mobile app - no live URL
        // },
        {
            title: "RDS Events",
            description: "Event management system for organizing and managing traditional Nepali cultural events",
            images: [
                "/images/RDS-EMS/landingpage.png",
                "/images/RDS-EMS/login.png",
                "/images/RDS-EMS/home.png",
                "/images/RDS-EMS/about.png",
                "/images/RDS-EMS/gallery.png",
                "/images/RDS-EMS/venue.png",
                "/images/RDS-EMS/priest.png",
                "/images/RDS-EMS/service.png",
                "/images/RDS-EMS/booking.png",
                "/images/RDS-EMS/contact.png",
                "/images/RDS-EMS/booking.png",
                "/images/RDS-EMS/profile.png",
                "/images/RDS-EMS/admin-login.png",
                "/images/RDS-EMS/admin-home.png",
            ],
            github: "https://github.com/dikshyajha/Traditional-Event-Management-System",
            liveUrl: "http://rds-events.infinityfreeapp.com/",
        },
    ];

    return (
        <section id="projects" className="mt-2xl lg:mt-4xl">
            <div className="lg:text-7xl text-4xl font-bold text-[#7e64af] font-Ovo">
                Projects
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mt-2xl">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#a78bfa]/20 transition-all duration-300 px-sm py-lg"
                    >
                        {project.images.length > 1 ? (
                            <Carousel
                                withIndicators
                                loop
                                classNames={{
                                    root: "rounded-t-2xl",
                                    indicator: "w-2 h-2 bg-gray-500 data-[active]:bg-[#7e64af]",
                                }}
                            >
                                {project.images.map((image, imgIndex) => (
                                    <Carousel.Slide key={imgIndex}>
                                        <div className="bg-transparent flex items-center justify-center">
                                            <img
                                                src={image}
                                                alt={`${project.title} screenshot ${imgIndex + 1}`}
                                                className="w-[350px] object-cover rounded-lg"
                                            />
                                        </div>
                                    </Carousel.Slide>
                                ))}
                            </Carousel>
                        ) : (
                            <div className="bg-transparent flex items-center justify-center">
                                <img
                                    src={project.images[0]}
                                    alt={`${project.title} screenshot`}
                                    className="w-[350px] object-cover rounded-lg"
                                />
                            </div>
                        )}

                        <div className="mt-xs">
                            <div className="text-2xl text-[#c4b5fd] font-Ovo">
                                {project.title}
                            </div>
                            <div className="text-gray-300 leading-relaxed">
                                {project.description}
                            </div>

                            <div className="flex gap-xs mt-sm">
                                {/* {project.github ? ( */}
                                <Button
                                    variant="outline"
                                    color="#7e64af"
                                    className="w-1/2 hover:text-white hover:border-[#7e64af] hover:bg-[#7e64af] transition-all duration-300"
                                    leftSection={<BrandGithub />}
                                    component="a"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </Button>
                                {/* </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        color="grey"
                                        className="w-1/2"
                                        leftSection={<BrandGithub />}
                                        disabled
                                    >
                                        GitHub
                                    </Button>
                                )} */}

                                {/* {project.liveUrl ? ( */}
                                <Button
                                    variant="outline"
                                    color="#7e64af"
                                    className="w-1/2 hover:text-white hover:border-[#7e64af] hover:bg-[#7e64af] transition-all duration-300"
                                    leftSection={<ExternalLink />}
                                    component="a"
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Site
                                </Button>
                                {/* ) : (
                                    <Button
                                        variant="outline"
                                        color="gray"
                                        className="w-1/2"
                                        leftSection={<ExternalLink />}
                                        disabled
                                    >
                                        Visit Site
                                    </Button>
                                )} */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};