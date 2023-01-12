import repository from "./client/apiClient";
export const useMovieRepository = (): useMovieRepository => {
  /**
   * - 指定ジャンルの映画を取得する
   * @param genre
   * @returns
   */
  const getMovieByGenres = async (genre: number) => {
    const { data } = await repository.get("/discover/movie?with_genres=18");
    return data;
  };

  return { getMovieByGenres };
};

interface useMovieRepository {
  getMovieByGenres: (genre: number) => Promise<any[]>;
}
