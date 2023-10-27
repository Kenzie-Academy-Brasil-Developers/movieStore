import { NextFunction, Request, Response } from "express";
import { movieRepo} from "../repositories";
import AppError from "../errors/AppError.error";
import { Movie } from "../entities";

export const verifyNameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const {name} = req.body
    const movie: Movie | null = await movieRepo.findOneBy({name})

    if(movie) throw new AppError("Movie already exists", 409)
  return next()
}
