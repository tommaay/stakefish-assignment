import { render, screen } from "@testing-library/react";
import Home from "./Home";

it("should render page title", () => {
  render(<Home />);
  expect(screen.getByText(/Top 10 Trusted Exhanges/i)).toBeVisible();
});
