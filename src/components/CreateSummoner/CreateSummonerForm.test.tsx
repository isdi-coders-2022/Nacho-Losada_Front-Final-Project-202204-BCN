import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import CreateSummonerForm from "./CreateSummonerForm";

describe("Given a CreateSumonerForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 4 dropwdown list selectors", () => {
      const exepctedSelectors = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateSummonerForm handledSummoner={null} />
          </Provider>
        </BrowserRouter>
      );
      const shownSelectors = screen.getAllByRole("combobox");

      expect(shownSelectors).toHaveLength(exepctedSelectors);
    });
  });

  describe("When it's rendered and the user fills and submit the formulary", () => {
    test("Then the summonername input should be empty", () => {
      const inputText = "test-text";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateSummonerForm handledSummoner={null} />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button");

      const nameInput = screen.getByPlaceholderText("Nombre de invocador");
      userEvent.type(nameInput, inputText);

      const dropDownSelectors = screen.getAllByRole("combobox");

      userEvent.selectOptions(
        dropDownSelectors[0],
        screen.getByRole("option", { name: "Hierro" })
      );
      userEvent.selectOptions(
        dropDownSelectors[1],
        screen.getByRole("option", { name: "IV" })
      );

      const roleOption = "Top";
      userEvent.selectOptions(dropDownSelectors[2], roleOption);

      const firstRoleChamps = screen.getAllByAltText(/ahri/i);
      userEvent.click(firstRoleChamps[0]);
      userEvent.dblClick(firstRoleChamps[0]);

      const descriptionInput = screen.getByPlaceholderText(
        "Escribe un poquito sobre tu cuenta"
      );
      userEvent.type(descriptionInput, inputText);
      userEvent.click(button);

      expect(nameInput.innerHTML).toBe("");
    });
  });
});
