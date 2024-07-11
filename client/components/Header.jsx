import Link from "next/link";
import { Button } from "./ui/button";

import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white"> 
            <div className="container mx-auto flex justify-between items-center">
                {/* LOGO */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Anne-Claire<span className="text-accent">.</span>
                    </h1>
                </Link>

                {/* Desktop navbar*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                    <a href="mailto:anclko@hotmail.com">
                        <Button>Hire Me</Button>
                    </a>
                </div>

                {/* Mobile navbar */}
                <div className="xl:hidden">
                    <MobileNavbar />
                </div>
            </div> 
        </header>
    );
};

export default Header;
