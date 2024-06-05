import Link from "next/link";
import { Button } from "./ui/button"

import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white"> 
           <div className="container mx-auto">
              {/* LOGO */}
              <Link href="/">
                <h1 className="text-4xl font-semibold">
                Anne-Claire<span className="text-accent">.</span>
                </h1>
              </Link>

              {/* Desktop navbar */}
              <Navbar />

           </div> 
        </header>
    );
};

export default Header