import { Router } from "express";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { movieCreateSchema, movieUpdateSchema } from "../schemas/movies.schema";
import { createMovieController, deleteMovieController, readMovieController, updateMovieController } from "../controllers/movie.controllers";
import { pagination } from "../middlewares/pagination.middleware";
import { verifyIdExists } from "../middlewares/verificationId.middleware";
import { verifyNameExists } from "../middlewares/verificationName.middleware";


export const movieRoute: Router = Router()

movieRoute.post('/', validateBody(movieCreateSchema),verifyNameExists, createMovieController)
movieRoute.get('/',pagination, readMovieController)
movieRoute.patch('/:movieId',validateBody(movieUpdateSchema), verifyIdExists,verifyNameExists, updateMovieController)
movieRoute.delete('/:movieId',verifyIdExists, deleteMovieController)