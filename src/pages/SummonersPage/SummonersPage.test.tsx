import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ISummoner } from "../../components/Summoner/Summoner";
import { mockSummoners } from "../../mocks/mocks";
import { store } from "../../redux/store/store";
import SummonersPage from "./SummonersPage";

describe("Given a SummonersPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list", () => {
      render(
        <Provider store={store}>
          <SummonersPage />
        </Provider>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });

    describe("When it's rendered and there are 2 summoners in the state", () => {
      test("Then it should render as many list items as summoners", () => {
        const mockSlice = createSlice({
          name: "summoners",
          initialState: mockSummoners,
          reducers: {
            loadList: (summoners, action: PayloadAction<ISummoner[]>) =>
              action.payload,
          },
        });
        const mockStore = configureStore({
          reducer: { summoners: mockSlice.reducer },
        });

        render(
          <Provider store={mockStore}>
            <SummonersPage />
          </Provider>
        );
        const listItems = screen.getAllByRole("listitem");

        expect(listItems).toHaveLength(mockSummoners.length);
      });
    });
  });
});
