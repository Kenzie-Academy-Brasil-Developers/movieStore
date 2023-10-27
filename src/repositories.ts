import { AppDataSource } from "./data-source";
import { Movie } from "./entities";
import { MovieRepo } from "./interfaces/movies.interface";

export const movieRepo: MovieRepo = AppDataSource.getRepository(Movie)