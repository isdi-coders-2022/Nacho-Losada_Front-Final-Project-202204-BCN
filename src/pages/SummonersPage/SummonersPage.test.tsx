import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ISummoner } from "../../components/Summoner/Summoner";
import { mockSummoners } from "../../mocks/mocks";
import { store } from "../../redux/store/store";
import SummonersPage from "./SummonersPage";

describe("Given a SummonersPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SummonersPage />
          </Provider>
        </BrowserRouter>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });

    describe("When it's rendered and there are 2 summoners in the state", () => {
      test("Then it should render as many list items as summoners", () => {
        const mockSummonerSlice = createSlice({
          name: "summoners",
          initialState: mockSummoners,
          reducers: {
            loadList: (summoners, action: PayloadAction<ISummoner[]>) =>
              action.payload,
          },
        });
        const mockOwnSummonerSlice = createSlice({
          name: "ownSummoners",
          initialState: mockSummoners,
          reducers: {
            loadOwnList: (ownSummoners, action: PayloadAction<ISummoner[]>) =>
              action.payload,
          },
        });
        const mockUserSlice = createSlice({
          name: "user",
          initialState: { name: "string", username: "string", logged: true },
          reducers: {
            login: (user, action) => ({ ...action.payload, logged: true }),
          },
        });
        const mockStore = configureStore({
          reducer: {
            summoners: mockSummonerSlice.reducer,
            user: mockUserSlice.reducer,
            ownSummoners: mockOwnSummonerSlice.reducer,
          },
        });

        render(
          <BrowserRouter>
            <Provider store={mockStore}>
              <SummonersPage />
            </Provider>
          </BrowserRouter>
        );
        const listItems = screen.getAllByRole("listitem");

        expect(listItems).toHaveLength(mockSummoners.length);
      });
    });
  });
});
