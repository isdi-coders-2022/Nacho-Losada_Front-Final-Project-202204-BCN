import NotFoundPage from "./NotFoundPage";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";

describe("Given a NotFoundPage", () => {
  describe("When it's rendered", () => {
    test("Then it should match this snapshot", () => {
      const renderedNotFoundPage = TestRenderer.create(
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      );

      expect(renderedNotFoundPage).toMatchSnapshot();
    });
  });
});
