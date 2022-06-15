import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Menu from "./Menu";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Menu component", () => {
  describe("When it's rendered and the user is not logged", () => {
    test("Then it should show 'Login' and 'Register'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Menu />
          </Provider>
        </BrowserRouter>
      );

      const expectedLogin = screen.getByText("Login");
      const expectedRegister = screen.getByText("Register");

      expect(expectedLogin).toBeInTheDocument();
      expect(expectedRegister).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the logged user clicks on 'Salir'", () => {
    test("Then it should call the dispatch with the logoutActionCreator function", () => {
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "Boris" },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });
      const action = logoutActionCreator();

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Menu />
          </Provider>
        </BrowserRouter>
      );

      userEvent.click(screen.getByRole("checkbox"));
      userEvent.click(screen.getByText("Salir"));

      expect(mockDispatch).toHaveBeenCalledWith(action);
    });
  });
});
