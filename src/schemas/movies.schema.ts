import {z} from "zod"

const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number(),
  price: z.number(),
 
})

export const movieCreateSchema = movieSchema.omit({id: true})
export const movieUpdateSchema = movieSchema.partial()