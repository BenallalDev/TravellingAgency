"use client";
import React, { useEffect, useRef, useState } from "react";
import CarouselItem from "../PopularDestination/Item";
import BackIcon from "./BackIcon";
import NextIcon from "./NextIcon";




export default function Carousel({ children, alignment } : { children: React.ReactNode, alignment: string}) {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [scrollX, setScrollX] = useState(0);
  const handleScroll = () => {
    if (carouselRef.current) {
      const newScrollX = carouselRef.current.scrollLeft;
      setScrollX(newScrollX);
    }
  };
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  function backShouldShown(){
    if(scrollX < 1){
      return true
    }
    else {
      return false
    }
  }

  function nextShouldShown(){
    if(carouselRef.current){
      if(scrollX === carouselRef.current.scrollWidth - carouselRef.current.clientWidth){
        return true
      }
    }
    return false
  }
  const handleBackClick = () => {
    if (carouselRef.current) {
      const windowWidthMinus32 = window.innerWidth - 32;
      const newScrollX = scrollX - windowWidthMinus32;
      if (newScrollX >= 0) {
        carouselRef.current.scrollTo({
          left: newScrollX,
          behavior: "smooth",
        });
        setScrollX(newScrollX);
      } else {
        carouselRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        setScrollX(0);
      }
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      const windowWidthMinus32 = window.innerWidth - 32;
      const newScrollX = scrollX + windowWidthMinus32;
      const maxScrollX = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      if (newScrollX <= maxScrollX) {
        carouselRef.current.scrollTo({
          left: newScrollX,
          behavior: "smooth",
        });
        setScrollX(newScrollX);
      } else {
        carouselRef.current.scrollTo({
          left: maxScrollX,
          behavior: "smooth",
        });
        setScrollX(maxScrollX);
      }
    }
  };
  return (
    <div className="">
      <div className={`flex gap-8 my-8 ${alignment === "right" ? "justify-end" : "justify-start"}`}>
        <button onClick={handleBackClick} disabled={backShouldShown()}  className="w-[48px] h-[48px] flex justify-center items-center gap-4 rounded-lg bg-blue-900 text-white disabled:bg-blue-300">
          <BackIcon />
        </button>
        <button onClick={handleNextClick} disabled={nextShouldShown()} className="w-[48px] h-[48px] flex justify-center items-center gap-4 rounded-lg bg-primary text-white disabled:bg-orange-100">
          <NextIcon />
        </button>
      </div>
      <div
      ref={carouselRef}
      className="min-w-full overflow-scroll flex gap-10 h-fit"
      >
        { children }
      </div>
    </div>
    
  );
}
