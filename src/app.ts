import "express-async-errors"
import express, { Application } from "express";
import { handleErrors } from "./middlewares/handleErrors.middleware";
import { routes } from "./routes/index.routes";

export const app: Application = express()

app.use(express.json())
app.use('/', routes)
app.use(handleErrors)