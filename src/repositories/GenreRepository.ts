import repository from "./client/apiClient";
export const useGenreRepository = (): GenreRepository => {
  /**
   * - ジャンルの一覧を取得する
   * @returns
   */
  const getGenreList = async () => {
    const { data } = await repository.get("/genre/movie/list");
    return data;
  };

  return { getGenreList };
};

interface GenreRepository {
  getGenreList: () => Promise<any[]>;
}
