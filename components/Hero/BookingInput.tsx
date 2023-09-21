import { playFairFont } from "@/utils";
import MyDatePicker from "./DatePicker";

export default function BookingInput(){
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    return (
        <div className="z-10 mt-12 flex lg:w-11/12 min-h-[216px] flex-col items-center lg:flex-row">
            <div className="flex justify-between w-10/12 rounded-lg lg:rounded-[0px] mx-auto lg:w-full items-center bg-white px-16 min-h-[216px] flex-col lg:flex-row">
                <div className="flex flex-col my-6">
                    <label className="text-gray-500 text-base font-normal uppercase ">
                        Destination
                    </label>
                    <input defaultValue="Rome" className={`outline-none w-[200px] border-b-[1px] ${playFairFont.className} bg-transparent border-b-[#303030] py-2 mt-4 text-[#303030]`} />
                </div>
                <div className="flex flex-col my-6">
                    <label className="text-gray-500 text-base font-normal uppercase">
                        Person
                    </label>
                    
                    <input  min={1} type="number" defaultValue="2" className={`outline-none w-[200px] border-b-[1px] ${playFairFont.className} bg-transparent border-b-[#303030] py-2 mt-4 text-[#303030]`} />
                </div>
                <div className="flex flex-col my-6">
                    <label className="text-gray-500 text-base font-normal uppercase">
                        Duration
                    </label>
                    <MyDatePicker />
                </div>
            </div>
            <button className={`h-[216px] px-8 bg-primary rounded-b-2xl lg:rounded-bl-[0px] lg:rounded-r-2xl text-white ${playFairFont.className} text-4xl`}>
                Book Now
            </button>
        </div>
    )
}