import repository from "./client/apiClient";
const key = import.meta.env.VITE_API_KEY;
export class GenreRepository implements GenreRepository {
  /**
   * - ジャンルの一覧を取得する
   * @returns
   */
  public getGenreList = async () => {
    console.log("データとりいった");
    const { data } = await repository.get(`/genre/movie/list?api_key=${key}`);
    return data.genres;
  };
}

export interface _GenreRepository {
  getGenreList: () => Promise<any[]>;
}
