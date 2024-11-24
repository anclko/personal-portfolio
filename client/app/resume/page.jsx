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
} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"

import { motion } from "framer-motion"

//about me
const about = {
    title: 'About Me',
    description: 
    "I am a dedicated and reliable third year software development student, characterized by a strong work ethic and a keen enthusiasm for learning and professional growth. With educational foundations in software development principles, I am actively seeking full-time position work opportunities in full-stack development or mobile development where I can apply my theoretical knowledge in a practical setting.",
    info: [
        {
            fieldName: "Experience",
            fieldValue: "3 Years (Studies)"
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
            fieldValue: "anclko@hotmail.com"
        },
        {
            fieldName: "Job Status",
            fieldValue: "Available"
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
    "I have gained leadership and operational management skills by leading high-performing teams, resolving complex challenges, and enhancing client satisfaction. The scope of my expertise includes advanced problem-solving, emotional engagement training, and efficient communication, alongside adaptability and decision-making in fast-paced, dynamic settings.",
    items: [
        {
            company: "Radisson Collection Hotel - Copenhagen, Denmark",
            position: "Senior Guest Service Manager",
            duration: "1 year, 1 month",
        },
        {
            company: "Nimb Hotel - Copenhagen, Denmark",
            position: "Concierge & Front Office Agent",
            duration: "2 years, 1 month",
        },
        {
            company: "Hotel D'Angleterre - Copenhagen, Denmark",
            position: "Front Desk & Guest Relations Supervisor",
            duration: "2 years, 5 months",
        },
        {
            company: "Old England Hotel - Bowness-on-Windermere, UK",
            position: "Front Office Supervisor",
            duration: "3 years, 2 months",
        },
        {
            company: "PLataran Bali - Bali, Indonesia",
            position: "Marketing Intern",
            duration: "8 months",
        },
        {
            company: "Le Méridien Étoile - Paris, France",
            position: "Housekeeping Intern",
            duration: "3 months",
        },
        {
            company: "Restaurant Pierre Orsi - Lyon, France",
            position: "Kitchen Commis Intern",
            duration: "3 months",
        },
        {
            company: "Hotel de la Cité - Carcassonne, France",
            position: "Front Office Intern",
            duration: "6 months",
        },
    ]
};

//education
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description:
    "I have a strong foundation in software development, with hands-on experience in mobile and full-stack development using technologies like Jetpack Compose, Kotlin, and the MERN stack. My diverse coursework also extends to machine learning, big data analysis, sustainable programming and Algorithms & Datastructures. My education has allowed me to create innovative, efficient, and user-focused solutions.",
    items: [
        {
            institution: "Högskola Kristianstad",
            degree: "Bachelor in Software Development",
            duration: "3 years",
        },
        {
            institution: "Vatel Business School",
            degree: "Bachelor in Hotel & Tourism Management",
            duration: "3 years",
        },
    ]
};

//skills
const skill = {
    title: "My Skills",
    description:
    "In addition to the listed technical skills, I am proficient in Python, Java, Kotlin, Firebase, and MongoDB, with expertise in MVVM architecture, Agile methodologies, clean coding practices, and version control. I also excel in project management, time management, and deploying solutions using tools like Git and Vercel.",
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

        className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs 
            defaultValue="experience" 
            className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 
                gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>

                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {experience.description}
                            </p>

                            <ScrollArea className="h-[400px]">
                                <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                  {experience.items.map((item, index) => {
                                    return(
                                      <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                            {item.position}
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.company}</p>
                                        </div>
                                      </li>

                                    );
                                })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* education */}
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                            {education.description}
                            </p>

                            <ScrollArea className="h-[400px]">
                                <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                  {education.items.map((item, index) => {
                                    return(
                                      <li 
                                      key={index} 
                                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                      >
                                        <span className="text-accent">{item.duration}</span>
                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                            {item.degree}
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                            <p className="text-white/60">{item.institution}</p>
                                        </div>
                                      </li>

                                    );
                                })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* skills */}
                    <TabsContent value="skills" className="w-full">
                        <div className="flex flex-col gap-[30px]">
                          <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skill.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                              {skill.description}
                            </p>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                              {skill.skillList.map((skill, index) => {
                                return (
                                  <li key={index}>
                                    <TooltipProvider delayDuration={100}>
                                      <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                              {skill.icon}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </TooltipProvider>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>  
                        </div>
                    </TabsContent>

                    {/* about us */}
                    <TabsContent 
                      value="about" 
                      className="w-full text-center xl:text-left"
                    >

                      <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font-bold">{about.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                          {about.description}
                        </p>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                          {about.info.map((item, index) => {
                            return (
                                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                  <span className="text-white/60">{item.fieldName}</span>
                                  <span className="text-xl">{item.fieldValue}</span>
                                </li>
                            )
                          })}
                        </ul>
                      </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
      </motion.div>
    );
};

export default Resume;
