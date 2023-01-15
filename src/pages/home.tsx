import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList";
import { RepositoryFactory } from "../repositories/RepositoryFactory";
import { Genre } from "../models/Genre";
import { _MovieRepository } from "../repositories/MovieRepository";
import { _GenreRepository } from "../repositories/GenreRepository";

const genreRepository = RepositoryFactory.get("genre") as _GenreRepository;

export const Home = () => {
  const [genreList, setGenre] = useState<Genre[]>([]);

  // 非同期処理はuseEffectで処理するらしい
  useEffect(() => {
    const fetch = async () => {
      // ジャンル一覧を取得
      setGenre(await genreRepository.getGenreList());
    };
    fetch();
  }, []);

  const list = genreList.map((item) => {
    return (
      <div key={item.id}>
        <MovieList key={item.id} genre={item}></MovieList>
      </div>
    );
  });

  return (
    <div>
      <div className="font-bold text-2xl text-white">{list}</div>;
    </div>
  );
};
