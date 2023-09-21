
import Link from "next/link";


export default function MobileNav({ open } : {open:boolean}){
    return (
            <>
            {
                open && (
                    <nav className="lg:hidden bg-white w-full flex flex-col items-center justify-center min-h-screen top-[80px]">
                        <ul className="flex flex-col items-center gap-4">
                            <Link href="/" className="outline-none flex flex-col justify-center nav-link hover:text-textHover h-full text-black leading-4 tracking-normal whitespace-normal text-[12px] font-semibold font-poppins uppercase focus:outline-none py-1 px-2">
                                Home
                            </Link>
                            <Link href="/about-us" className="outline-none flex flex-col justify-center nav-link hover:text-textHover h-full text-black leading-4 tracking-normal whitespace-normal text-[12px] font-semibold font-poppins uppercase focus:outline-none py-1 px-2">
                                ABOUT US
                            </Link>
                        </ul>
                        <Link href="/contact" className="outline-none px-4 py-2 border-[3px] transition-all ease-in border-primary text-black font-semibold text-[12px] mt-8 hover:bg-primary">
                            GET IN TOUCH
                        </Link>
                    </nav>
                )
            }
            </>
    );
}

