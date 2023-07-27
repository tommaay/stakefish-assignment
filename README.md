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

## Project dependencies

- Vite: Fast build tool and development server for web applications. This is my first time initializing a React app using Vite. For new apps I would prefer to use a React framework like NextJS or Remix. I prefer NextJS.
- React
- Typescript
- Vanilla CSS - I wouldn't use vanilla CSS for my projects but I just wanted to demonstrate my understanding of CSS. My preference would be to use Tailwind CSS but for established projects that may not be possible. My other choices would be a CSS preprocessor or CSS in JS.
- Vitest - Test runner. This is my first time using Vitest I've only used Jest before. This was simple to pick up since most of the syntax is the same as Jest.
- MSW (Mock Service Worker) - Mocks HTTP requests in development and makes it easy to simiulate API responses. This was my first time using this library as well.
- Cypress - This is my first time using Cypress for e2e tests. This took more time to learn than Vitest as a lot of the syntax and setup was new to me. I am a big fan of Cypress now though. The syntax is clear and the setup was straight forward.

## Other notes

There are some things that I didn't add due to not having enough time and prioritizing other important tasks. I didn't add any loading UX or error handling which is a must if this was a real production app. I would have liked to add some caching for the exchanges and details apis. For that I would not want to do it manually but I could if I had to. But the developer experience of using a library like Tanstack Query for React makes it so much easier. That is one project I would highly push to use on whatever team I'm on.
