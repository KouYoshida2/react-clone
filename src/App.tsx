import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { MovieList } from "./components/MovieList";
import "./App.css";
import { RepositoryFactory } from "./repositories/RepositoryFactory";
import { Genre } from "./models/Genre";
import { _MovieRepository } from "./repositories/MovieRepository";
import { _GenreRepository } from "./repositories/GenreRepository";

const genreRepository = RepositoryFactory.get("genre") as _GenreRepository;

function App() {
  const [genreList, setGenre] = useState<Genre[]>([]);

  // 非同期処理はuseEffectで処理するらしい
  useEffect(() => {
    const fetch = async () => {
      // ジャンル一覧を取得
      setGenre(await genreRepository.getGenreList());
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
