import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { useGenreRepository } from "./repositories/GenreRepository";
const { getGenreList } = useGenreRepository();

function App() {
  const [count, setCount] = useState(0);
  const [genreList, setGenre] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      setGenre(await getGenreList());
    })();
  }, []);

  const list = genreList.map((item) => {
    return <h2 key={item.id}>{item.name}</h2>;
  });

  return (
    <div className="App">
      <div>{list}</div>
    </div>
  );
}

export default App;
