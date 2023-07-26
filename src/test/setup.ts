// Polyfill "window.fetch" used in the React component.
import "whatwg-fetch";

// Extend "expect" functionality with Testing Library assertions.
import "@testing-library/jest-dom";

import { server } from "mocks/server";

// Set up the mock service worker before tests
beforeAll(() => {
  server.listen();
});

// Reset any request handlers that we may add during the tests
afterEach(() => {
  server.resetHandlers();
});

// Clean up the mock service worker after tests
afterAll(() => {
  server.close();
});
