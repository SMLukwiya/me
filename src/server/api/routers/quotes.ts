import axios from "axios";
import { env } from "@/env.mjs";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const quotesRouter = createTRPCRouter({
  list: publicProcedure.query(async () => {
    const response = await axios.get(env.QUOTES_API);
    return response.data;
  }),
});
