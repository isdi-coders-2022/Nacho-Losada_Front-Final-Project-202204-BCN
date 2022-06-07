import { render, screen } from "@testing-library/react";
import { mockSummoner } from "../../mocks/mocks";
import Summoner from "./Summoner";

describe("Given a Summoner component", () => {
  describe("When it's rendered with a summoner called 'Abraham The Door", () => {
    test("Then it should render a heading with its name", () => {
      const expectedName = "Abraham The Door";

      render(<Summoner summoner={mockSummoner} />);
      const summonerNameHeading = screen.getByRole("heading", { level: 2 });

      expect(summonerNameHeading).toHaveTextContent(expectedName);
    });
  });
});
