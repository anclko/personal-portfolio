"use client"

import { 
    FaHtml5, 
    FaCss3, 
    FaJs, 
    FaReact, 
    FaFigma, 
    FaNodeJs 
} from "react-icons/fa"

import { 
    SiTailwindcss,
    SiNextdotjs
} from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/scroll-area"

import { motion } from "framer-motion"

//about me
const about = {
    title: 'About Me',
    description: 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum tincidunt nec nec libero",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Anne-Claire Koch"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+46) 793 566 601)"
        },
        {
            fieldName: "Experience",
            fieldValue: "2 Years"
        },
        {
            fieldName: "Location",
            fieldValue: "Sweden"
        },
        {
            fieldName: "Nationality",
            fieldValue: "French"
        },
        {
            fieldName: "Email",
            fieldValue: "ackoch@hotmail.com"
        },
        {
            fieldName: "Job Status",
            fieldValue: "Available to work now"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French, German, Swedish"
        },
    ]
};

//experience
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum tincidunt nec nec libero",
    items: [
        {
            company: "Company",
            position: "Position",
            duration: "Duration",
        },
        {
            company: "Company",
            position: "Position",
            duration: "Duration",
        },
        {
            company: "Company",
            position: "Position",
            duration: "Duration",
        },
        {
            company: "Company",
            position: "Position",
            duration: "Duration",
        },
    ]
};

//education
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum tincidunt nec nec libero",
    items: [
        {
            institution: "School",
            degree: "Position",
            duration: "Duration",
        },
        {
            institution: "School",
            degree: "Position",
            duration: "Duration",
        },
        {
            institution: "School",
            degree: "Position",
            duration: "Duration",
        },
        {
            institution: "School",
            degree: "Position",
            duration: "Duration",
        },
    ]
};

//skills
const skill = {
    title: "My Skills",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien fermentum tincidunt nec nec libero",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5",
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        }
    ]
}

const Resume = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 2.4,
                ease: "easeInOut",
            },
        }}

        className="min-h-[88mv] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                <TabsList>
                    <TabsTrigger>About Me</TabsTrigger>
                    <TabsTrigger>Experience</TabsTrigger>
                    <TabsTrigger>Education</TabsTrigger>
                    <TabsTrigger>Skills</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>

      </motion.div>
    );
}

export default Resume