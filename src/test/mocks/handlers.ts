import { rest } from "msw";
import { COIN_GECKO_URL } from "@/constants";

import { MOCK_EXCHANGES_LIST, MOCK_EXCHANGE_DETAILS } from "./data";

export const handlers = [
  rest.get(`${COIN_GECKO_URL}/exchanges`, (_, res, ctx) => {
    return res(ctx.json(MOCK_EXCHANGES_LIST));
  }),
  rest.get(`${COIN_GECKO_URL}/exchanges/:exhangeId`, (_, res, ctx) => {
    return res(ctx.json(MOCK_EXCHANGE_DETAILS));
  }),
];
