import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store/store";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

jest.mock("jwt-decode", () => () => ({
  username: "nAppcho",
  name: "Nacho",
}));

describe("Given the App component", () => {
  describe("When it's called and the user have a token", () => {
    test("Then it should log the user calling the dispatch", () => {
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
