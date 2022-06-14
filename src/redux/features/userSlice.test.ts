import userReducer, {
  loginActionCreator,
  logoutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When it receives a not logged user and the login action", () => {
    test("Then it should return the same user logged in", () => {
      const initialUser = {
        name: "Bertin",
        username: "bosborne35",
        logged: false,
      };
      const expectedUser = {
        name: "Bertin",
        username: "bosborne35",
        logged: true,
      };

      const action = loginActionCreator(initialUser);
      const loggedUser = userReducer(initialUser, action);

      expect(loggedUser).toEqual(expectedUser);
    });
  });

  describe("When it receives a logout action", () => {
    test("Then it should unlog the user", () => {
      const loggedUser = {
        name: "Papi Chulo",
        username: "Dani1234",
        logged: true,
      };
      const expetctedNotLoggedUser = {
        name: "",
        username: "",
        logged: false,
      };

      const logoutAction = logoutActionCreator();
      const loggedoutUser = userReducer(loggedUser, logoutAction);

      expect(loggedoutUser).toEqual(expetctedNotLoggedUser);
    });
  });
});
