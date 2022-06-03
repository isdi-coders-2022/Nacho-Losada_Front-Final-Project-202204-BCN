import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Given a Footer component", () => {
  describe("When it's rendered", () => {
    test("Then it should 3 icons", () => {
      const expectedIcons = 3;

      render(<Footer />);
      const allIcons = screen.getAllByRole("img");

      expect(allIcons).toHaveLength(expectedIcons);
    });
  });
});
