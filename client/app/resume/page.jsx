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
        <div>Resume page</div>
    )
}

export default Resume