import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";
import { FaPlay } from 'react-icons/fa' 
import { InformationCircleIcon } from "@heroicons/react/solid";
import { modalState, movieState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

interface Props {
  netflixOriginals: Movie[];
}
function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showmodal, setShowModal] = useRecoilState(modalState);
  const [ currentMovie, setCurrentMovie ] = useRecoilState(movieState);
  
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  return (
    <div className="flex flex-col space-y-3 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen ">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      {/* buttons */}
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black rounded ">
             <FaPlay className="h-2 w-2 text-black md:h-7 md:w-7" /> Play</button>
        <button onClick={() => {
          setCurrentMovie(movie)
          setShowModal(true)
        }} className="bannerButton bg-[gray]/70 rounded">
        More Info    <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/> 
        </button>
      </div>
    </div>
  );
}

export default Banner;
