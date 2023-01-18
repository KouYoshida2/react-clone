import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Review } from "./Review";
import { MyList } from "./MyList";
import { TheHeader } from "../components/TheHeader";
import { createContext, useEffect, useState } from "react";
import { Genre } from "../models/Genre";
import { _GenreRepository } from "../repositories/GenreRepository";
import { RepositoryFactory } from "../repositories/RepositoryFactory";
import { Movie } from "../models/Movie";
import { _MovieRepository } from "../repositories/MovieRepository";
import { ReviewModal } from "../components/ReviewModal";
const genreRepository = RepositoryFactory.get("genre") as _GenreRepository;
const movieRepository = RepositoryFactory.get("movie") as _MovieRepository;

export const ReviewModalContext = createContext<{
  toggleReviewModal: (movie?: Movie) => void;
}>({} as { toggleReviewModal: (movie?: Movie) => void });

export const App = () => {
  const [genreList, setGenre] = useState<Genre[]>([]);
  const [movieList, setMovieList] = useState<Record<number, Movie[]>>({});

  // 非同期処理はuseEffectで処理する
  // データを取得する処理
  useEffect(() => {
    const fetch = async () => {
      // ジャンル一覧を取得
      const _genreList = await genreRepository.getGenreList();
      setGenre(_genreList);

      const moviesRecord = await movieRepository.getMovieByGenres(
        _genreList.map((genre) => genre.id)
      );
      setMovieList(moviesRecord);
    };
    fetch();
  }, []);

  /**
   * レビューモーダルの管理
   */
  const [reviewModalState, setReviewModalState] = useState(false);
  const [movie, setMovie] = useState<Movie | null>(null);

  const toggleReviewModal = (movie?: Movie) => {
    reviewModalState ? setReviewModalState(false) : setReviewModalState(true);
    setMovie(movie || null);
  };

  return (
    <div className="App bg-gray-800">
      <ReviewModalContext.Provider value={{ toggleReviewModal }}>
        <BrowserRouter>
          <TheHeader></TheHeader>
          <Routes>
            <Route
              path="/"
              element={
                <Home movieList={movieList} genreList={genreList}></Home>
              }
            />
            <Route path="/my-list" element={<MyList></MyList>} />
            <Route path="/review-list" element={<Review></Review>} />
          </Routes>
        </BrowserRouter>
      </ReviewModalContext.Provider>

      <ReviewModal
        toggleReviewModal={toggleReviewModal}
        reviewModalState={reviewModalState}
        movie={movie}
      ></ReviewModal>
    </div>
  );
};
