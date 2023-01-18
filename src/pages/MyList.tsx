import { useContext, useEffect, useState } from "react";
import { RMovie } from "../components/RMovie";
import { UseMyListContext } from "../main";
import { Movie } from "../models/Movie";

export const MyList = () => {
  const { MyList: _MyList } = useContext(UseMyListContext);

  // 表示するお気に入りのリストはここで管理する
  const [myListItems, setMyListItem] = useState(_MyList);

  const list: any = [];
  myListItems.forEach((value, key) => {
    list.push(value);
  });

  return (
    <div className="text-white text-2xl">
      <p className="text-white">マイリストページ</p>
      <div className="flex">
        {list.map((movie: Movie) => {
          return (
            <RMovie
              setMyListItem={setMyListItem}
              key={movie.id}
              movie={movie}
            ></RMovie>
          );
        })}
      </div>
    </div>
  );
};
