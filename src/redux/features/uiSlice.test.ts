import uiReducer, {
  loadOffActionCreator,
  loadOnActionCreator,
} from "./uiSlice";

describe("Given a uiSlice reducer", () => {
  describe("When in receives a loadOn action", () => {
    test("Then it should switch the state to true", () => {
      const initialState = {
        loading: false,
      };

      const expectedState = {
        loading: true,
      };

      const loadOnAction = loadOnActionCreator();
      const loadState = uiReducer(initialState, loadOnAction);

      expect(loadState).toEqual(expectedState);
    });
  });

  describe("When in receives a loadOff action", () => {
    test("Then it should switch the state to false", () => {
      const initialState = {
        loading: true,
      };

      const expectedState = {
        loading: false,
      };

      const loadOffAction = loadOffActionCreator();
      const loadState = uiReducer(initialState, loadOffAction);

      expect(loadState).toEqual(expectedState);
    });
  });
});
