import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Menu from "./Menu";

describe("Given a Menu", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Login' and 'Register'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Menu />
          </Provider>
        </BrowserRouter>
      );

      const expectedLogin = screen.getByText("Login");
      const expectedRegister = screen.getByText("Register");

      expect(expectedLogin).toBeInTheDocument();
      expect(expectedRegister).toBeInTheDocument();
    });
  });
});
