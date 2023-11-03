import { Router } from "express";
import { movieRoute } from "./movie.routes";

export const routes: Router = Router();

routes.use("/movies", movieRoute);