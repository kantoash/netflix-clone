import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}

function ThumbNail({ movie }: Props) {
  const [showmodal, setShowModal] = useRecoilState(modalState);
  const [ currentMovie, setCurrentMovie ] = useRecoilState(movieState);
  return (
    <div className="relative h-32 min-w-[180px] cursor-pointer transition duration-200 ease-out md:36 md:min-w-[260px] md:hover:scale-110 ">
      <Image
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }} 
        src={`https://image.tmdb.org/t/p/w500${ 
            movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default ThumbNail;
