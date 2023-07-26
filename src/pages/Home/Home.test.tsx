import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("should render the home page correctly", () => {
    render(<Home />);
    expect(screen.getByText(/Top 10 Trusted Exhanges/i)).toBeVisible();
  });
});
