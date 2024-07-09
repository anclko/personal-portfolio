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
            { name: "MongoDB"}, { name: "React"}, { name: "Tailwind CSS"}
        ],
        image: '/assets/work/Project1.jpg',
        live: '',
        github: '',
    },
    {
        num: "02",
        category: "Fullstack",
        title: "Recipe Book",
        description: 
          "loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stack: 
        [
            { name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"}, { name: "Node.js"}, { name: "Express.js"},
        ],
        image: '',
        live: '',
        github: '',
    },
    {
        num: "03",
        category: "python",
        title: "NPX - Journal App",
        description: 
          "loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stack: 
        [
            { name: "python" }, { name: "agile methods" }, { name: "jira software"}
        ],
        image: '',
        live: '',
        github: '',
    },
    {
        num: "04",
        category: "java",
        title: "Algorithm Analysis",
        description: 
          "loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        stack: 
        [
            { name: "java" }
        ],
        image: '',
        live: '',
        github: '',
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
            xl: justify-between order-2 xl:order-none">
              <div>

                {/*number outline*/}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
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
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>

              </div>
            </div>
            <div className="w-full">Sliders</div>
          </div>
        </div>
      </motion.section>
    );
};

export default Work