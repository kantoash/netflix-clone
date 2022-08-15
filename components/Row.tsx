import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useRef, useState } from "react";
import { Movie } from "../typings";
import ThumbNail from "./ThumbNail";

interface Props {
    // When using firebase
    // movie: Movie | DocumentData 
  title: String;
  movies: Movie[];
}

function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const handleClick = (direction: String) => {
    setIsMoved(true)
    if(rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo = direction === "left" ? 
      (scrollLeft - clientWidth) 
      : (scrollLeft + clientWidth)

      rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"})
    }
  }

  return ( 
    <div className="h-40 space-y-0.5 md:space-y-2">
      {/* Title */}
      <div className="w-56 cursor-pointer text-lg font-semibold text-[#e5e5e5] transition
      duration-200 hover:text-white md:2xl" >{title}</div>

      {/* Rest */}
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon className={` absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && 'hidden'}`} 
        onClick={() => handleClick("left")}/>

      {/* Movies list  */}
      <div ref={rowRef} className="flex items-center space-x-2 scrollbar-hide overflow-x-scroll md:space-x-3 
      md:p-2" >
        {/* Thumbnail */}
        {movies.map((movie) => (
            <ThumbNail key={movie.id} movie={movie} />
          ))}
      </div>

        <ChevronRightIcon className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
        onClick={() => handleClick("right")}/>
      </div>
    </div>
  );
}

export default Row;
