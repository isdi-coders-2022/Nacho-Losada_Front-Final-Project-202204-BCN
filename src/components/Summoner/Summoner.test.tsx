import { render, screen } from "@testing-library/react";
import { debug } from "console";
import mockSummoner from "../../mocks/mockSummoner";
import Summoner from "./Summoner";

describe("Given a Summoner component", () => {
  render(<Summoner summoner={mockSummoner} />);

  describe("When it's rendered with a summoner called 'Abraham The Door", () => {
    test("Then it should render a heading with its name", () => {
      const expectedName = "Abraham The Door";

      const summonerNameHeading = screen.getByRole("heading", { level: 2 });

      expect(summonerNameHeading).toHaveTextContent(expectedName);
    });
  });
});
