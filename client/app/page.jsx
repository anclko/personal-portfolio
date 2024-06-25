import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

import Social from '@/components/Social';

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* text */}
        <div className="text-center xl:text-left">
          <span className="text-xl">Software Developer</span>
          
          <h1 className="h1 mb-6">
            Hello I'm <br />
            <span className="text-accent">Anne-Claire Koch</span>
          </h1>

          <p className="max-w-[500px] mb-9 text-white/80">
            I am a third-year student with a strong passion for full-stack development and hands-on experience in various web technologies.
          </p>
          
          <div className="flex flex-col xl:flex-row items-center gap-8">
            {/* CV Downloads */}
            <Button 
            variant="outline" 
            size="lg" 
            className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>

            {/* Socials */}
            <div className="mb-8 xl:mb-0">
              <Social />
            </div>

          </div>

        </div>

        {/* profile pic */}
        <div>Photo</div>

      </div> 
    </div>
  </section>
}

export default Home;