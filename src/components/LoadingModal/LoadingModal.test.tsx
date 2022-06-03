import { render, screen } from "@testing-library/react";
import LoadingModal from "./LoadingModal";

describe("Given a LoadingModal component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a 'Cargando...' text and an image", () => {
      const expectedText = "Cargando...";

      render(<LoadingModal />);
      const shownText = screen.getByText(expectedText);
      const shownImage = screen.getByRole("img");

      expect(shownText).toBeInTheDocument();
      expect(shownImage).toBeInTheDocument();
    });
  });
});
