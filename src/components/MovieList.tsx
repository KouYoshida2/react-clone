import { useEffect, useState } from "react";
import { Genre } from "../models/Genre";
import { Movie } from "../models/Movie";
import { _MovieRepository } from "../repositories/MovieRepository";
import { RepositoryFactory } from "../repositories/RepositoryFactory";
import { RMovie } from "./RMovie";

const movieRepository = RepositoryFactory.get("movie") as _MovieRepository;

interface Props {
  genre: Genre;
}

export const MovieList = ({ genre }: Props) => {
  // ジャンルに含まれる番組の一覧データ
  const [movieList, setMovieList] = useState<Movie[]>([]);

  // ジャンルデータをトリガーに番組配列を取得
  useEffect(() => {
    const fetch = async () => {
      setMovieList(await movieRepository.getMovieByGenres(genre.id));
    };
    fetch();
  }, []);

  return (
    <div>
      <h2 className="text-md text-left">{genre.name}</h2>

      <div className="flex justify-start gap-4 overflow-scroll">
        {movieList.map((movie) => {
          return <RMovie movie={movie} key={movie.id}></RMovie>;
        })}
      </div>
    </div>
  );
};
