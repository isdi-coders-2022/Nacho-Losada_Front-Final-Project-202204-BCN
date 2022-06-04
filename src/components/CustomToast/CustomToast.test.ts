import { render, screen } from "@testing-library/react";
import CustomToast from "./CustomToast";

describe("Given a CustomToast component", () => {
  describe("When it's rendered with a image url and the text 'Jalapeño'", () => {
    test("Then it should show render an image and the text", () => {
      const url = "/icons/success-ico.webp";
      const expectedText = "Jalapeño";

      render(CustomToast(url, expectedText));
      const image = screen.getByRole("img");
      const textElement = screen.getByText("Jalapeño");

      expect(image).toHaveAttribute("src", url);
      expect(textElement).toHaveTextContent(expectedText);
    });
  });
});
