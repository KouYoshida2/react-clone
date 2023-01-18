import { Genre } from "../models/Genre";
import { Movie } from "../models/Movie";
import repository from "./client/apiClient";
const key = import.meta.env.VITE_API_KEY;

export class MovieRepository implements _MovieRepository {
  /**
   * - 指定ジャンルの映画を取得する
   * @param genre
   * @returns
   */

  public getMovieByGenre = async (genre: number) => {
    const { data } = await repository.get(
      `/discover/movie?with_genres=${genre}&api_key=${key}`
    );

    const moviesData = data.results as movieData[];

    return moviesData.map(
      (item: movieData) =>
        new Movie(
          item.id,
          item.release_date,
          item.title,
          item.poster_path,
          item.overview,
          item.genre_ids
        )
    );
  };

  public getMovieByGenres = async (genres: number[]) => {
    const moviesArray = await Promise.all(
      genres.map((genre: number) => this.getMovieByGenre(genre))
    );

    const result = {} as Record<number, Movie[]>;
    genres.forEach((genre, index) => {
      result[genre] = moviesArray[index];
    });

    return result;
  };
}

export interface _MovieRepository {
  getMovieByGenres: (genre: number[]) => Promise<Record<number, Movie[]>>;
  getMovieByGenre: (genre: number) => Promise<Movie[]>;
}

// jsonデータの型
interface movieData {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
