import { playFairFont } from "@/utils";
import Carousel from "./Carousel/Carousel";

export default function PopularDestinations(){
    return (
        <div className="py-16 px-8">
            <div className="container">
                <h1 className={`text-6xl ${playFairFont.className} text-[#172432] border-b-2 my-4 border-primary w-fit pb-3`}>Popular Destinations</h1>
                <p className="text-[#767E86] text-lg my-6">
                    Most popular destinations around the world, from historical places to natural wonders.
                </p>
            </div>
            <Carousel />
        </div>
    )
}