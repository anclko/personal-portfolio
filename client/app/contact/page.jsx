"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue, 
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+46) 793 566 601"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "ackoch@hotmail.com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Lund, Sweden"
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    return (
      <motion.section initial={{ opacity: 0 }} 
        animate={{ 
          opacity: 1, 
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            
            {/*form*/}
            <div className="xl:h-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Looking forward to working together!</h3>
                <p className="text-white/60">
                  loren ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                {/*input*/}
                <div className="grid grid-cols-1 md:grid-cold-2 gap-6">
                  <Input type="firstname" placeholder="First Name" />
                  <Input type="lastname" placeholder="Last Name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="phone" placeholder="Phone Number" />
                </div>

              </form>
            </div>

            {/*info*/}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">INFO</div>
          </div>
        </div>
      </motion.section>
    )
};

export default Contact;