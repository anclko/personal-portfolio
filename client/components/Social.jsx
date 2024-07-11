import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/anclko'},
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/anneclairekoch/'},
    { icon: <FaYoutube />, path: 'https://www.youtube.com/channel/UC3aE7PwZuWmawmcCNIodr5g'},
]
const Social = ({containerStyles, iconStyles}) => {
    return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        );
    })} 
    </div>
    );
};

export default Social;