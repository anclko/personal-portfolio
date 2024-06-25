"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return <div className="w-full h-full relative">
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{
            opacity: 1, 
            transition: { delay: 2, duration: 0.4, ease: "easeIn"},
        }}
        >

            <motion.div 
            initial={{ opacity: 0 }} 
            animate={{
                opacity: 1, 
                transition: { delay: 2.4, duration: 0.4, ease: "easeInOut"},
            }}
            
            className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] mix-blend-lighten rounded-full overflow-hidden">
            <Image 
                src="/assets/photo.png" 
                alt="profile picture"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover"
                priority
                quality={100}
            />
            </motion.div>
        </motion.div>
    </div>
};

export default Photo;