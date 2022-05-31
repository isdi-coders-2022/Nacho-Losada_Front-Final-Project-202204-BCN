import { render, screen } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button with the text 'Crear cuenta' inside", () => {
      const expectedText = "Crear cuenta";
      render(<RegisterForm />);

      const button = screen.getByRole("button");

      expect(button.innerHTML).toBe(expectedText);
    });
  });
});
