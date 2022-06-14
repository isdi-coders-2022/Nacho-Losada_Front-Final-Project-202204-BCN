import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import CreateSummonerPage from "./CreateSummonerPage";

describe("Given a CreateSummonerPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 4 dropwdown list selectors", () => {
      const exepctedSelectors = 3;

      render(
        <Provider store={store}>
          <CreateSummonerPage />
        </Provider>
      );
      const shownSelectors = screen.getAllByRole("combobox");

      expect(shownSelectors).toHaveLength(exepctedSelectors);
    });
  });
});
