import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it's rendereder", () => {
    test("Then it should a button with the text 'Login' inside", () => {
      render(
        <Provider store={store}>
          <LoginPage />
        </Provider>
      );
      const expectedText = "Login";

      const button = screen.getByRole("button", {
        name: "Login",
      });

      expect(button.innerHTML).toBe(expectedText);
    });
  });
});
