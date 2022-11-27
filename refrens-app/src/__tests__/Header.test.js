import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";

describe("Header Component", () => {
  test("renders header", () => {
    render(<Header />);
    screen.getByRole("heading", {
      description: "Refrens",
    });
  });
});
