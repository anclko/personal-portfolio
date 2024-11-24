"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger 
} from "@/components/ui/tooltip"

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Fullstack",
        title: "Funbyte",
        description: 
          "Part of Fullstack Development end of year project. This website offers a fun and interative way to learn with flashcards.",
        stack: 
        [
            { name: "HTML" }, { name: "Javascript"}, { name: "Node.js" }, { name: "Express.js" },
            { name: "MongoDB"}, { name: "React"}, { name: "Tailwind CSS"}, { name: "Jira"}
        ],
        image: '/assets/work/Project1.jpg',
        live: 'https://www.funbyte.eu/',
        github: 'https://github.com/ErickOlibo/FunByte',
    },
    {
        num: "02",
        category: "Fullstack",
        title: "Online Resume/Portfolio",
        description: 
          "A website that acts a resume to showcase my experience, education and collection of projects that I have worked on.",
        stack: 
        [
            { name: "Next.js" }, { name: "Javascript"}, { name: "Framer Motion"}
        ],
        image: '/assets/work/Project2.jpg',
        live: 'https://www.anclko.com/',
        github: 'https://github.com/anclko/personal-portfolio',
    },
    {
        num: "03",
        category: "Kotlin",
        title: "Trygga Campus",
        description: 
          "'Trygga Campus' was developed in cooperation with AB Lotusmodellen for a Mobile Development final project. Firebase was used for the database. I created a video introducing the application to the company using Premiere Pro 2025.",
        stack: 
        [
            { name: "Kotlin" }, { name: "Jetpack Compose" }, { name: "Firebase"}, {name: "Premiere Pro 2025"}, {name: "Figma"}
        ],
        image: '/assets/work/Project3.jpg',
        live: 'https://drive.google.com/file/d/1aV7b9xLmaFKdzx-TV30xixSAnBv16wVk/view?usp=sharing',
        github: 'https://github.com/IbMoh/Trygga-Kampus',
    },
    {
        num: "04",
        category: "Python",
        title: "Usuku",
        description: 
          "Usuku is a desktop app for Windows that allows users to journal, plan tasks and create challenges.",
        stack: 
        [
            { name: "Python" }, {name: "Agile Methods"}, {name: "Unit Test"}, {name: "MySQL"}, {name: "Pylint"}, {name: "Flake8"}
        ],
        image: '',
        live: 'https://github.com/ErickOlibo/NPX',
        github: 'https://github.com/ErickOlibo/NPX',
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
      //get current slide index
      const currentIndex = swiper.activeIndex;
      //update project state based on current slide index
      setProject(projects[currentIndex]);

    }
    
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/*number outline*/}
                <div
                  className="text-8xl leading-none font-extrabold text-transparent"
                  style={{
                  WebkitTextStroke: '1px white'
                  }}
                >
                  {project.num}
                </div>

                {/*project category*/}
                <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project     
                </h2>

                {/*project category*/}
                <p className="text-white/60 ">
                  {project.description}
                </p>

                {/*stack*/}
                <ul className="grid grid-cols-2 gap-2">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-md text-accent">
                        {item.name}
                      </li>
                    );
                  })}
                </ul>

                {/*buttons*/}
                <div className="border border-white/20"></div>

                {/*buttons*/}
                <div className="flex items-center gap-4">
                  {/*live project*/}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>

                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {/*github project*/}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Github Repo</p>
                        </TooltipContent>

                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper 
                spaceBetween={30} 
                slidesPerView={1} 
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return<SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overflow */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image} 
                          fill 
                          className="object-cover" 
                          alt="project picture"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                })}
                {/* buttons for slider */}
                <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-white hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    );
};

export default Work