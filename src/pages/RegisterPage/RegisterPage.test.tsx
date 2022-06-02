import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage component", () => {
  describe("When it's rendereder", () => {
    test("Then it should a button with the text 'Crear cuenta' inside", () => {
      render(
        <Provider store={store}>
          <RegisterPage />
        </Provider>
      );
      const expectedText = "Crear cuenta";

      const button = screen.getByRole("button", {
        name: "Crear cuenta",
      });

      expect(button.innerHTML).toBe(expectedText);
    });
  });
});
