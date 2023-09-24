import { playFairFont } from "@/utils";
import Image from "next/image";

export default function Blog(){
    return (
        <div className="py-16 px-8">
            <div className="container">
                <h1 className={`text-6xl ${playFairFont.className} text-[#172432] border-b-2 my-4 border-primary w-fit pb-3`}>Our Blog</h1>
                <p className="text-[#767E86] text-lg my-6">
                    An insight the incredible experience in the world
                </p>
            </div>
            <div className="flex gap-12  items-center flex-wrap">
                <div className="w-[500px] relative h-[800px] max-h-screen ">
                    <Image src="/testImages/blog.jpeg" fill alt=""  className="rounded-2xl" />
                </div>
                <div className="w-[48%] flex flex-col">
                    <h1 className={`text-5xl text-[#172432] w-[280px] my-4 ${playFairFont.className}`}>
                        Beautiful Italy Let’s travel
                    </h1>
                    <p className="text-[#172432]">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.
                    </p>
                    <div className="flex gap-6 items-center h-16">
                        <span className="text-orange-500 uppercase text-base tracking-wide">
                            Read More
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M14.7071 8.20711C15.0976 7.81658 15.0976 7.18342 14.7071 6.79289L8.34315 0.428931C7.95262 0.0384072 7.31946 0.0384073 6.92893 0.428932C6.53841 0.819456 6.53841 1.45262 6.92893 1.84315L12.5858 7.5L6.92893 13.1569C6.53841 13.5474 6.53841 14.1805 6.92893 14.5711C7.31946 14.9616 7.95262 14.9616 8.34315 14.5711L14.7071 8.20711ZM8.74228e-08 8.5L14 8.5L14 6.5L-8.74228e-08 6.5L8.74228e-08 8.5Z" fill="#FF7757"/>
                        </svg>
                    </div>
                </div>
            </div>
            
        </div>
    )
}