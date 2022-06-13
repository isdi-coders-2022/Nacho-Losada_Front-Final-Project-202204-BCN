import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import CreateSummonerForm from "./CreateSummonerForm";

describe("Given a CreateSumonerForm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 4 dropwdown list selectors", () => {
      const exepctedSelectors = 4;

      render(
        <Provider store={store}>
          <CreateSummonerForm handledSummoner={null} />
        </Provider>
      );
      const shownSelectors = screen.getAllByRole("combobox");

      expect(shownSelectors).toHaveLength(exepctedSelectors);
    });
  });

  describe("When it's rendered and the user fills all the form fields", () => {
    test("Then the button should be enabled", () => {
      const inputText = "test-text";

      render(
        <Provider store={store}>
          <CreateSummonerForm handledSummoner={null} />
        </Provider>
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
      userEvent.selectOptions(dropDownSelectors[3], roleOption);

      const firstRoleChamps = screen.getAllByAltText(/ahri/i);
      userEvent.click(firstRoleChamps[0]);
      userEvent.click(firstRoleChamps[1]);

      const secondRoleChamps = screen.getAllByAltText(/zac/i);
      userEvent.click(secondRoleChamps[0]);
      userEvent.click(secondRoleChamps[1]);

      const descriptionInput = screen.getByPlaceholderText(
        "Escribe un poquito sobre tu cuenta"
      );
      userEvent.type(descriptionInput, inputText);

      expect(button).not.toBeDisabled();
    });
  });
});
