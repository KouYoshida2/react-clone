import { useContext, useEffect, useState } from "react";
import { MovieList } from "../components/MovieList";
import { RepositoryFactory } from "../repositories/RepositoryFactory";
import { Genre } from "../models/Genre";
import { _MovieRepository } from "../repositories/MovieRepository";
import { _GenreRepository } from "../repositories/GenreRepository";
import { ReviewModal } from "../components/ReviewModal";
import { Movie } from "../models/Movie";
import { ReviewModalContext } from "./App";

const genreRepository = RepositoryFactory.get("genre") as _GenreRepository;

type Props = {
  movieList: Record<number, Movie[]>;
  genreList: Genre[];
};

export const Home = ({ movieList, genreList }: Props) => {
  const { toggleReviewModal } = useContext(ReviewModalContext);

  const list = genreList.map((genre: Genre) => {
    return (
      <div key={genre.id}>
        <MovieList
          key={genre.id}
          genreName={genre.name}
          movieList={movieList[genre.id]}
          toggleReviewModal={toggleReviewModal}
        ></MovieList>
      </div>
    );
  });

  return (
    <div>
      <div className="font-bold text-2xl text-white">{list}</div>;
      <button onClick={() => toggleReviewModal()}>クリック</button>
    </div>
  );
};
