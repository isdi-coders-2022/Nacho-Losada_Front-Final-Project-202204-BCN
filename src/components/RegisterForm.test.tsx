import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When it's rendered and the user writes 'Salami' in the username input", () => {
    test("Then the username input value should be 'Salami'", () => {
      const inputText = "Salami";

      render(<RegisterForm />);
      const input = screen.getByPlaceholderText("Usuario");
      userEvent.type(input, inputText);

      expect(input).toHaveProperty("value", inputText);
    });
  });

  describe("When it's rendered and the user fills and submit the form", () => {
    test("Then the form inputs should be cleared", () => {
      render(<RegisterForm />);
      const inputText = "Salami";
      const expectedRestoredText = "";

      const userInput = screen.getByPlaceholderText("Usuario");
      userEvent.type(userInput, inputText);
      const passwordInput = screen.getByPlaceholderText("Contraseña");
      userEvent.type(passwordInput, inputText);
      const nameInput = screen.getByPlaceholderText("Nombre");
      userEvent.type(nameInput, inputText);
      const emailInput = screen.getByPlaceholderText("Correo electrónico");
      userEvent.type(emailInput, inputText);

      userEvent.click(screen.getByText("Crear cuenta"));

      expect(userInput).toHaveProperty("value", expectedRestoredText);
    });
  });
});
