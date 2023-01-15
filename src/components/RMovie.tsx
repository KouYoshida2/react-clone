import { Movie } from "../models/Movie";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { UseMyListContext } from "../main";

interface Props {
  movie: Movie;
}

export const RMovie = ({ movie }: Props) => {
  const { toggleMyList, MyList } = useContext(UseMyListContext);

  const [MyListIcon, setMyListIcon] = useState<JSX.Element>(
    MyList.get(movie.id) ? <FaStar></FaStar> : <FaRegStar></FaRegStar>
  );

  const toggleMyListState = () => {
    toggleMyList(movie);
    if (MyList.get(movie.id)) {
      setMyListIcon(<FaStar></FaStar>);
    } else {
      setMyListIcon(<FaRegStar></FaRegStar>);
    }
  };

  return (
    <div className="flex-shrink-0">
      <img
        className="w-20"
        src={`https://image.tmdb.org/t/p/original/${movie.imgUrl}`}
        alt=""
      />
      <div onClick={toggleMyListState}>{MyListIcon}</div>
    </div>
  );
};
