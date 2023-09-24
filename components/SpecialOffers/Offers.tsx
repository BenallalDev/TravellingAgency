import { playFairFont } from "@/utils";
import CarouselItem from "./Item";
import Carousel from "../Carousel/Carousel";
interface IItem {
    img: string,
    location: string
    stars: number
    description: string,
    price: number,
    id: string
}
const fakeSpecialsOffers:IItem[] = [
    {
        id: "portugal/lisbon",
        img: "/testImages/lisbon.jpeg",
        location: "Lisbon, Portugal",
        stars: 5,
        description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: 500
    },
    {
        id: "greece/athnes",
        img: "/testImages/athnes.jpeg",
        location: "Athens, Greece",
        stars: 5,
        description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: 800
    },
    {
        id: "italy/rome",
        img: "/testImages/rome.jpeg",
        location: "Rome, Italy",
        stars: 5,
        description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
        price: 750
    }
]
export default function Offers(){
    return (
        <div className="py-16 px-8">
            <div className="container flex flex-col items-end">
                <h1 className={`text-6xl ${playFairFont.className} text-[#172432] border-b-2 my-4 border-primary w-fit pb-3`}>Special Offers</h1>
                <p className="text-[#767E86] text-lg my-6">
                    Check out our special offer and discounts
                </p>
            </div>
            <div className="container">
                <Carousel alignment="left">
                    {fakeSpecialsOffers.map((item, index) => (
                        <CarouselItem {...item} key={index} />
                    ))}
                </Carousel>
                
            </div>
        </div>
    )
}