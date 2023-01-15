import { Movie } from "../models/Movie";
import repository from "./client/apiClient";
const key = import.meta.env.VITE_API_KEY;
export class MovieRepository implements _MovieRepository {
  /**
   * - 指定ジャンルの映画を取得する
   * @param genre
   * @returns
   */
  public getMovieByGenres = async (genre: number) => {
    console.log("データとりいった");
    const { data } = await repository.get(
      `/discover/movie?with_genres=${genre}&api_key=${key}`
    );

    const result = data.results.map((item: movieData) => {
      if (item.video) console.log(item.video);
      return new Movie(
        item.id,
        item.release_date,
        item.title,
        item.poster_path,
        item.overview,
        item.genre_ids
      );
    });

    return result;
  };
}

export interface _MovieRepository {
  getMovieByGenres: (genre: number) => Promise<any[]>;
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
