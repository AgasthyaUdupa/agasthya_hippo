import exp from "constants";
import { publicProcedure, router } from "./trpc";
import { type } from "os";

export const appRouter = router({
    anyApiRoute:publicProcedure.query(()=>{
        return' hello'
    })
})

export type AppRouter = typeof appRouter