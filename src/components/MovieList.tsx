import { useEffect, useState } from "react";
import { Genre } from "../models/Genre";
import { Movie } from "../models/Movie";
import { _MovieRepository } from "../repositories/MovieRepository";
import { RepositoryFactory } from "../repositories/RepositoryFactory";
import { RMovie } from "./RMovie";

const movieRepository = RepositoryFactory.get("movie") as _MovieRepository;

interface Props {
  movieList: Movie[];
  genreName: string;
  toggleReviewModal: (movie?: Movie) => void;
}

export const MovieList = ({ movieList, genreName }: Props) => {
  const list = movieList
    ? movieList.map((movie) => {
        return <RMovie movie={movie} key={movie.id}></RMovie>;
      })
    : null;

  return (
    <div>
      <h2 className="text-md text-left">{genreName}</h2>

      <div className="flex justify-start gap-4 overflow-scroll">{list}</div>
    </div>
  );
};
