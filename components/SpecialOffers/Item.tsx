import Image from "next/image";
import Link from "next/link";
interface IItem {
    img: string,
    location: string
    stars: number
    description: string,
    price: number,
    id: string
}

export default function CarouselItem({ img, location, stars, description, price, id }:IItem){    
    return (
        <div className="flex flex-col min-w-[430px]  rounded-[26px] overflow-hidden">
            <div className="relative h-[286px] w-full overflow-hidden cursor-pointer">
                <Image src={img} fill alt="" className="rounded-t-[26px] hover:scale-110 transition-all duration-300 ease-out" />
            </div>
            <div className="px-4 bg-[#FFF8F1] py-4 rounded-b-[26px]">
                <h1 className="text-[#767E86] text-xl font-light my-3">
                    {location}
                </h1>
                <p className="text-[#172432] text-base mb-4">
                    { description }
                </p>
                <div className="flex justify-between items-center">
                    <p>
                        <span className="text-[#767E86] text-lg font-light">FROM</span> <span className="text-2xl font-normal mx-2 text-orange-500">€{ price }</span>
                    </p>
                    <Link href="/" className="bg-orange-500 py-[10px] px-[20px] rounded-[12px] text-white flex justify-center items-center text-[14px]">
                        Details 
                    </Link>
                </div>
            </div>
        </div> 
    )
}