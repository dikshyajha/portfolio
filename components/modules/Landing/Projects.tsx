"use client";
import { Carousel } from "@mantine/carousel";
import { Button } from "@mantine/core";
import { BrandGithub, BrandGitlab, ExternalLink } from "tabler-icons-react";

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
            showGitButton: false,


        },
        {
            title: "ConnectTalent",
            description: "Platform connecting talents with opportunities and hosting tech-related educational trainings",
            images: [
                "/images/PathToConnectTalent/Landing.png",
            ],
            github: "",
            liveUrl: "https://pathtoconnecttalent.nxin.tech/",
            showGitButton: false,

        },
        {
            title: "CliniCross",
            description: "Dental appointment management system streamlining patient bookings and clinic operations",
            images: [
                "/images/CliniCross/landing.png",
            ],
            github: "",
            liveUrl: "https://app.clinicross.com",
            showGitButton: false,

        },
        {
            title: "ParkEase",
            description: "Smart parking management system with IoT integration for real-time parking availability",
            images: [
                "/images/ParkEase-Website/mobile-image.jpg",
                "/images/ParkEase-Website/Landing.png",
                "/images/ParkEase-Website/login.png",
                "/images/ParkEase-Website/user dashboard.png",
                "/images/ParkEase-Website/add-vehicle.png",
                "/images/ParkEase-Website/find-parking.png",
                "/images/ParkEase-Website/user-activeparking.png",
                "/images/ParkEase-Website/booking-payment.png",
                "/images/ParkEase-Website/user-history.png",
                "/images/ParkEase-Website/gatekeeper-db.png",
            ],
            github: "https://gitlab.com/park-ease/parkeight",
            liveUrl: "https://parkeight.vercel.app/",
            showGitButton: true,
            isGitlab: true,

        },
        {
            title: "TravelTales",
            description: "Blog sharing platform for travelers to share stories, experiences, travel insights and connect",
            images: [
                "/images/Travel Tales/landing.png",
                "/images/Travel Tales/signin.png",
                "/images/Travel Tales/homepage.png",
                "/images/Travel Tales/add post.png",
                // "/images/Travel Tales/chat-nomessage.png",
                "/images/Travel Tales/chat-message.png",
                "/images/Travel Tales/janaki.png",
                "/images/Travel Tales/user profile.png",
                "/images/Travel Tales/seemore.png",
                "/images/Travel Tales/saved posts.png",

            ],
            github: "https://github.com/dikshyajha/MERN-travel-tales",
            liveUrl: "https://traveltales-ruby.vercel.app/",
            showGitButton: true,
            isGitlab: false,
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
                "/images/RDS-EMS/profile.png",
                "/images/RDS-EMS/contact.png",
                // "/images/RDS-EMS/booking.png",
                "/images/RDS-EMS/admin-login.png",
                "/images/RDS-EMS/admin-home.png",
            ],
            github: "https://github.com/dikshyajha/Traditional-Event-Management-System",
            liveUrl: "http://rds-events.infinityfreeapp.com/",
            showGitButton: true,
            isGitLab: false,

        },
    ];

    return (
        <section id="projects" className="mt-2xl lg:mt-4xl scroll-mt-4xl">
            <div className="lg:text-7xl text-4xl font-bold text-[#7e64af] font-Ovo">
                Projects
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md mt-2xl">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-[#2d1b4e] to-[#1e1538] hover:bg-black hover:from-transparent hover:to-transparent rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 px-sm py-lg hover:bg-black hover:border-purpleDark border-2 border-transparent hover:scale-105"
                    >
                        {project.images.length > 1 ? (
                            <Carousel
                                withIndicators
                                loop
                                styles={{
                                    control: {
                                        backgroundColor: 'gray', // arrow background color
                                        color: 'white', // arrow icon color
                                    },
                                }}
                                classNames={{
                                    root: "rounded-t-2xl",
                                    indicator: "w-2 h-2 bg-black data-[active]:bg-[#7e64af]",
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
                                {project.showGitButton && (
                                    <Button
                                        variant="outline"
                                        color="#7e64af"
                                        fullWidth
                                        classNames={{
                                            root: " hover:text-white hover:border-[#7e64af] hover:bg-[#7e64af] transition-all duration-300"
                                        }} leftSection={project.isGitlab ? <BrandGitlab /> : <BrandGithub />}
                                        component="a"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.isGitlab ? "GitLab" : "GitHub"}
                                    </Button>
                                )}

                                <Button
                                    variant="outline"
                                    color="#7e64af"
                                    fullWidth
                                    classNames={{
                                        root: " hover:text-white hover:border-[#7e64af] hover:bg-[#7e64af] transition-all duration-300"
                                    }} leftSection={<ExternalLink />}
                                    component="a"
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit Site
                                </Button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};