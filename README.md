# Stakefish Take Home Assignment

## Overview

This project uses the CoinGecko apis to get the top 10 trust exchanges and renders some high level information about them in a table. When a user clicks on the exchange name it will take them to a details page with more information.

## Deployed url

https://stakefish-assignment-psi.vercel.app/

## Local development

To set up the project for local development, follow these instructions:

1. Install the depencies at the root level:

   > npm i

2. Start the local server:

   > npm run dev

3. To run the unit tests:

   > npm test

4. To open Cypress UI and run E2E tests (The local server must be running):

   > npx cypress open

## Project dependencies

- Vite: Fast build tool and development server for web applications.
- React
- Typescript
- Vanilla CSS
- React Router
- Vitest
- MSW (Mock Service Worker) - Mocks HTTP requests in development and makes it easy to simiulate API responses.
- Cypress

## Other notes

There are some things that I didn't add due to not having enough time and prioritizing other important tasks. I didn't add any loading UX or error handling which is a must if this was a real production app. I would have liked to add some caching for the exchanges and details apis. For that I would not want to do it manually but I could if I had to. But the developer experience of using a library like Tanstack Query for React makes it so much easier. That is one project I would highly push to use on whatever team I'm on.
