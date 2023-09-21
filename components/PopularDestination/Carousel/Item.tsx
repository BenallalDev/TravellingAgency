import { playFairFont } from "@/utils"
import Image from "next/image"
import GPSIcon from "./GPSIcon"

interface IItem {
    img: string,
    name: string,
    location: string,
}
export default function CarouselItem({img, name, location}:IItem){
    return (
        <div className="cursor-pointer min-w-[200px] max-h-[300px] overflow-hidden min-h-[300px] relative rounded-3xl lg:min-h-[480px] lg:min-w-[320px]">
            <Image className="rounded-2xl hover:scale-110 transition-all duration-300 ease-out"  fill src={img} alt=""  />
            <div className="absolute left-4 bottom-4">
                <h1 className= {`text-white text-2xl my-4 ${playFairFont.className}`}>
                    { name }
                </h1>
                <div className="flex items-center gap-2">
                    <GPSIcon />
                    <p className="text-white">
                        { location }
                    </p>
                </div>
            </div>
        </div>
    )
}