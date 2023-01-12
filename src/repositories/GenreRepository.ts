import repository from "./client/apiClient";
const key = import.meta.env.VITE_API_KEY;
export const useGenreRepository = (): GenreRepository => {
  /**
   * - ジャンルの一覧を取得する
   * @returns
   */
  const getGenreList = async () => {
    const { data } = await repository.get(`/genre/movie/list?api_key=${key}`);
    return data.genres;
  };

  return { getGenreList };
};

interface GenreRepository {
  getGenreList: () => Promise<any[]>;
}
