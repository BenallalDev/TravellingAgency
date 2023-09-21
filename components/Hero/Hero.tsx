import Image from "next/image"
import HeroImage from "../../public/images/hero.jpeg"
import  { Playfair_Display }  from "next/font/google"
import BookingInput from "./BookingInput"
const playFairFont = Playfair_Display({ subsets: ['latin'] })
export default function Hero(){
    return (
        <div className="min-h-screen w-full relative flex justify-center flex-col">
            <Image src={HeroImage} fill className="object-cover object-bottom" alt="Hero Image" />
            <div className="max-w-4xl z-10 mt-24 ml-6 lg:mx-auto">
                <h1 className={`${playFairFont.className} text-white text-5xl sm:text-7xl `}>
                    Start your unforgettable journey with us.
                </h1>
                <p className="text-white mt-6">
                    The best travel for your journey begins now
                </p>
            </div>
            <BookingInput />
        </div>
    )
}