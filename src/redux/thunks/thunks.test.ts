import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { loginActionCreator } from "../features/userSlice";
import { loginUserThunk, registerUserThunk } from "./thunks";

jest.mock("jwt-decode", () => jest.fn().mockResolvedValue({ id: "Mike Old" }));

describe("Given a registerUserThunk function", () => {
  const formData = {
    username: "Schumi",
    password: "ferrari123",
    name: "Michael Schumacher",
    email: "schumi_morenico@hotmail.com",
  };
  const dispatch = jest.fn();

  describe("When it's invoked with with a new user data", () => {
    test("Then it should call the succes method of the toast function", async () => {
      axios.post = jest.fn();
      toast.success = jest.fn();

      const thunk = registerUserThunk(formData);
      await thunk(dispatch);

      expect(toast.success).toHaveBeenCalled();
    });
  });

  describe("When it's invoked with an exiting user", () => {
    test("Then it should call the error method of the toast function", async () => {
      axios.post = jest.fn().mockRejectedValue(new Error());
      toast.error = jest.fn();

      const thunk = registerUserThunk(formData);
      await thunk(dispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });
});

describe("Given a loginUserThunk", () => {
  describe("When it's invoked with a valid user data", () => {
    test("Then it should dispatch the login action with the user data", async () => {
      const formData = {
        username: "Maicol",
        password: "whatisthismaicol",
      };
      const mockToken = "mocken";

      const dispatch = jest.fn();
      axios.post = jest.fn().mockResolvedValue({ data: { token: mockToken } });
      const userInfo = jwtDecode(mockToken);

      const expectedAction = loginActionCreator(userInfo);
      const thunk = loginUserThunk(formData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
