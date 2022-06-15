import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import LoggedGatekeeper from "./LoggedGatekeeper";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

describe("Given a LoggedGatekeeper component", () => {
  describe("When invoked and the user is not logged", () => {
    test("Then it should navigate to '/login'", () => {
      const testComponent = <p>Hello boss</p>;

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

      render(
        <Provider store={store}>
          <LoggedGatekeeper>{testComponent}</LoggedGatekeeper>
        </Provider>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("When invoked and the user is logged", () => {
    test("Then it should navigate to '/login'", () => {
      const testComponent = <p>Hello boss</p>;

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      render(
        <Provider store={store}>
          <LoggedGatekeeper>{testComponent}</LoggedGatekeeper>
        </Provider>
      );

      expect(mockUseNavigate).not.toHaveBeenCalled();
    });
  });
});
