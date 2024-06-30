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

const Resume = () => {
    return (
        <div>Resume page</div>
    )
}

export default Resume