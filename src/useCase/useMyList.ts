import { Movie } from "../models/Movie";

export const useMyList = () => {
  const MyList: Map<number, Movie> = new Map();

  const toggleMyList = (movie: Movie) => {
    console.log("発火");
    if (MyList.get(movie.id)) {
      MyList.delete(movie.id);
    } else {
      MyList.set(movie.id, movie);
    }

    console.log(MyList);
  };

  return { toggleMyList, MyList };
};

export type UseMyListType = ReturnType<typeof useMyList>;
