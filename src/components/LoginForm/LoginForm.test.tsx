import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import LoginForm from "./LoginForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a LoginForm", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button with the text 'Login' inside", () => {
      const expectedText = "Login";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
      const button = screen.getByRole("button");

      expect(button.innerHTML).toBe(expectedText);
    });
  });

  describe("When it's rendered and the user fills and submit the form", () => {
    test("Then the login action should be dispatched", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
      const inputText = "test-text";

      const userInput = screen.getByPlaceholderText("Usuario");
      userEvent.type(userInput, inputText);
      const passwordInput = screen.getByPlaceholderText("Contraseña");
      userEvent.type(passwordInput, inputText);
      userEvent.click(screen.getByText("Login"));

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
