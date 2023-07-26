import { render, screen } from "@testing-library/react";
import DetailsCard from "./DetailsCard";

describe("DetailsCard", () => {
  it("renders the label and value correctly", () => {
    const mockLabel = "Test Label";
    const mockValue = "123";

    render(<DetailsCard label={mockLabel} value={mockValue} />);

    const labelElement = screen.getByText(mockLabel);
    const valueElement = screen.getByText(mockValue);

    expect(labelElement).toBeVisible();
    expect(valueElement).toBeVisible();
  });
});
