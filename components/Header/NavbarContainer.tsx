"use client"

import { useEffect, useState } from "react"
import MobileNav from "./MobileNav";
import Hamburger from "hamburger-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

export default function NavbarContainer({
    children,
  }: {
    children: React.ReactNode
  }){
    const [bg, setBg] = useState<boolean>();
    const pathname = usePathname()
    useEffect(() => {
        setOpen(false)
    }, [pathname])
    const [open, setOpen] = useState<boolean>(false)
    useEffect(() => {
        if(window.scrollY > 80) setBg(true)
        window.addEventListener("scroll", () => {
            if(window.scrollY > 80) setBg(true)
            else setBg(false)
        })
    }, []);
    // prevent scrolling when mobile nav is open
    useEffect(() => {
        if(open) document.body.classList.add("no-scroll")
        else document.body.classList.remove("no-scroll")
    }, [open])
    return (
        <div className={`${bg && "bg-white shadow-md scrolling-nav"} fixed w-full h-[80px] top-0 z-[9999]`}>
            <Link href="/" className={`flex flex-col justify-center absolute  h-full py-1 px-2 mb-3 scale-75 lg:hidden`}>
                <Logo />
            </Link>
            <div className="absolute right-4 top-4 lg:hidden">
                <Hamburger toggled={open} toggle={setOpen} color={open || bg ? "#303030" : "white"} />
            </div>
            {children}
            <MobileNav open={open} />
        </div>
    )
}