import { Movie } from "../models/Movie";

interface Props {
  movie: Movie;
}

export const RMovie = ({ movie }: Props) => {
  return (
    <div className="flex-shrink-0">
      <img
        className="w-20"
        src={`https://image.tmdb.org/t/p/original/${movie.imgUrl}`}
        alt=""
      />
    </div>
  );
};
