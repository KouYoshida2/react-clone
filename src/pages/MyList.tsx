import { useContext } from "react";
import { RMovie } from "../components/RMovie";
import { UseMyListContext } from "../main";
import { Movie } from "../models/Movie";

export const MyList = () => {
  const { toggleMyList, MyList: _MyList } = useContext(UseMyListContext);

  const list: any = [];
  _MyList.forEach((value, key) => {
    list.push(value);
  });

  return (
    <div className="text-white text-2xl">
      <p className="text-white">マイリストページ</p>
      <div className="flex">
        {list.map((movie: Movie) => {
          return <RMovie key={movie.id} movie={movie}></RMovie>;
        })}
      </div>
    </div>
  );
};
