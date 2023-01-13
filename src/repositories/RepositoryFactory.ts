import { MovieRepository, _MovieRepository } from "./MovieRepository";
import { GenreRepository, _GenreRepository } from "./GenreRepository";

const repositories = {
  movie: new MovieRepository(),
  genre: new GenreRepository(),
} as const;

export const RepositoryFactory = {
  get: (name: keyof typeof repositories) => repositories[name],
};
