import { render, screen } from "@testing-library/react";
import Menu from "./Menu";

describe("Given a Menu", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Login' and 'Register'", () => {
      render(<Menu />);

      const expectedLogin = screen.getByText("Login");
      const expectedRegister = screen.getByText("Register");

      expect(expectedLogin).toBeInTheDocument();
      expect(expectedRegister).toBeInTheDocument();
    });
  });
});
