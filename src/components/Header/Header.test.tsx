import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a main heading with 'Lolingo' inside", () => {
      const expectedText = "Lolingo";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const heading = screen.getByRole("heading", { level: 1 });

      expect(heading).toHaveTextContent(expectedText);
    });
  });
});
