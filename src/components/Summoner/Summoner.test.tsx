import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockSummoner } from "../../mocks/mocks";
import { store } from "../../redux/store/store";
import Summoner from "./Summoner";

describe("Given a Summoner component", () => {
  describe("When it's rendered with a summoner called 'Abraham The Door", () => {
    test("Then it should render a heading with its name", () => {
      const expectedName = "Abraham The Door";
      render(
        <Provider store={store}>
          <Summoner summoner={mockSummoner} />
        </Provider>
      );
      const summonerNameHeading = screen.getByRole("heading", { level: 2 });
      expect(summonerNameHeading).toHaveTextContent(expectedName);
    });
  });
});
