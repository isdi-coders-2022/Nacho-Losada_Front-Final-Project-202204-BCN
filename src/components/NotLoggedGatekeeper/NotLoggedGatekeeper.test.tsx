import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import NotLoggedGatekeeper from "./NotLoggedGatekeeper";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a NotLoggedGatekeeper component", () => {
  describe("When invoked and the user is logged", () => {
    test("Then it should navigate to '/summoners'", () => {
      const testComponent = <p>Hello boss</p>;

      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "Boris" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <NotLoggedGatekeeper>{testComponent}</NotLoggedGatekeeper>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/summoners");
    });
  });

  describe("When invoked and the user is not logged", () => {
    test("Then it should navigate to '/summoners'", () => {
      const testComponent = <p>Hello boss</p>;

      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <NotLoggedGatekeeper>{testComponent}</NotLoggedGatekeeper>
        </Provider>
      );

      expect(mockUseNavigate).not.toHaveBeenCalled();
    });
  });
});
