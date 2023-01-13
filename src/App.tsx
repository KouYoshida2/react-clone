import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { MovieList } from "./components/MovieList";
import "./App.css";

import { useGenreRepository } from "./repositories/GenreRepository";
import { useMovieRepository } from "./repositories/MovieRepository";
import { Genre } from "./models/Genre";
const { getGenreList } = useGenreRepository();
const { getMovieByGenres } = useMovieRepository();

function App() {
  const [genreList, setGenre] = useState<Genre[]>([]);

  // 非同期処理はuseEffectで処理するらしい
  useEffect(() => {
    const fetch = async () => {
      // ジャンル一覧を取得
      setGenre(await getGenreList());
    };
    fetch();
  }, []);

  const list = genreList.slice(1, 6).map((item) => {
    return (
      <div key={item.id}>
        <MovieList key={item.id} genre={item}></MovieList>
      </div>
    );
  });

  return (
    <div className="App bg-gray-800">
      <div className="font-bold text-2xl text-white">{list}</div>
    </div>
  );
}

export default App;
