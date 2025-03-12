import { z } from "zod";

export const accountSchema = z.object({
     name : z.string().min(1, "Name is Most Required"),
     type : z.enum(["SAVINGS" , "CURRENT"]),
     balance : z.string().min(1,"Initial Balance required"),
     isDefault :z.boolean().default(false)
})