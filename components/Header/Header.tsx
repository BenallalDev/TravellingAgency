"use client"
import Image from "next/image";
import Link from "next/link";
import NavbarContainer from "./NavbarContainer";
import { usePathname } from "next/navigation";
import HeroImage from "../../public/images/hero.jpeg"
import Logo from "../Logo";
export default function Navbar() {
    const pathName = usePathname();

  return (
    <NavbarContainer>
        <nav className="hidden lg:flex px-4 container mx-auto max-w-5xl h-full border-gray-200 justify-between items-center">
            <Link href="/" className={`flex flex-col justify-center  h-full py-1 px-2 mb-3 scale-75`}>
                <Logo />
            </Link>
            <ul className="flex items-center gap-8 h-full px-4 justify-center">
                <Link href="/" className="flex flex-col transition-all ease-out duration-300 hover:text-textHover justify-center nav-link h-full text-white leading-4 tracking-normal whitespace-normal text-lg font-normal font-poppins focus:outline-none py-1 px-2 outline-none">
                    Home
                </Link>
                <Link href="/about-us" className={`flex outline-none flex-col transition-all ease-out duration-300 hover:text-textHover justify-center nav-link h-full text-white leading-4 tracking-normal whitespace-normal text-lg font-normal font-poppins focus:outline-none py-1 px-2 active:text-red-300 ${pathName === "/about-us" ? "active" : ""}`}>
                    Explore
                </Link>
                <Link href="/" className="flex flex-col transition-all ease-out duration-300 hover:text-textHover justify-center nav-link h-full text-white leading-4 tracking-normal whitespace-normal text-lg font-normal font-poppins focus:outline-none py-1 px-2 outline-none">
                    Travel
                </Link>
                <Link href="/about-us" className={`flex outline-none flex-col transition-all ease-out duration-300 hover:text-textHover justify-center nav-link h-full text-white leading-4 tracking-normal whitespace-normal text-lg font-normal font-poppins focus:outline-none py-1 px-2 active:text-red-300 ${pathName === "/about-us" ? "active" : ""}`}>
                    Blog
                </Link>
                <Link href="/about-us" className={`flex outline-none flex-col transition-all ease-out duration-300 hover:text-textHover justify-center nav-link h-full text-white leading-4 tracking-normal whitespace-normal text-lg font-normal font-poppins focus:outline-none py-1 px-2 active:text-red-300 ${pathName === "/about-us" ? "active" : ""}`}>
                    Pricing
                </Link>
            </ul>
            <Link href="/contact" className="px-6 py-2 bg-primary get-in-touch outline-none text-sm text-white rounded-sm mb-2">
                Sign In
            </Link>
        </nav>
        
    </NavbarContainer>
  );
}

