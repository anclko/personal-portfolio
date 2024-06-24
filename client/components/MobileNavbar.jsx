"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/Link'
import { CiMenuFries } from 'react-icons/ci'

const Links = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'resume',
        path: '/resume',
    },
    {
        name: 'projects',
        path: '/projects',
    },
    {
        name: 'contact',
        path: '/contact',
    },
]

const MobileNavbar = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-accent" />
        </SheetTrigger>

        <SheetContent className="flex flex-col">
            {/* logo */}
            <div>Logo</div>
        </SheetContent>
    </Sheet>
};

export default MobileNavbar;