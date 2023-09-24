import { playFairFont } from "@/utils";
import Carousel from "../Carousel/Carousel";
import CarouselItem from "./Item";
const carouselItems = [
    {
      name: "Monument of Berlin",
      img: "/testImages/berlin.jpeg",
      location: "Berlin, Germany"
    },
    {
      name: "Millennium Bridge",
      img: "/testImages/bridge.jpeg",
      location: "London, United Kingdom"
    },
    {
      name: "Rialto Bridge",
      img: "/testImages/RialtoBridge.jpeg",
      location: "Venice, Italy"
    },
    {
      name: "Sea of Orange Tiles",
      img: "/testImages/seaOrange.jpeg",
      location: "Lisbon, Portugal"
    },
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      img: "/testImages/Eiffel.jpeg"
    },
    {
      name: "Tokyo",
      location: "Tokyo, Japan",
      img: "/testImages/tokyo.jpeg"
    }
  
  ]
export default function PopularDestinations(){
    return (
        <div className="py-16 px-8">
            <div className="container">
                <h1 className={`text-6xl ${playFairFont.className} text-[#172432] border-b-2 my-4 border-primary w-fit pb-3`}>Popular Destinations</h1>
                <p className="text-[#767E86] text-lg my-6">
                    Most popular destinations around the world, from historical places to natural wonders.
                </p>
            </div>
            <Carousel alignment="right" >
                {carouselItems.map((item, index) => (
                    <CarouselItem {...item} key={index} />
                ))}
            </Carousel>
        </div>
    )
}