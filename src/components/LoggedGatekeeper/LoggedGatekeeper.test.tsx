import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import LoggedGatekeeper from "./LoggedGatekeeper";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a LoggedGatekeeper component", () => {
  describe("When invoked and the user is not logged", () => {
    test("Then it should navigate to '/login'", () => {
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
          <LoggedGatekeeper>{testComponent}</LoggedGatekeeper>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When invoked and the user is logged", () => {
    test("Then it should navigate to '/login'", () => {
      const testComponent = <p>Hello boss</p>;

      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "Charles" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <Provider store={mockStore}>
          <LoggedGatekeeper>{testComponent}</LoggedGatekeeper>
        </Provider>
      );

      expect(mockUseNavigate).not.toHaveBeenCalled();
    });
  });
});
