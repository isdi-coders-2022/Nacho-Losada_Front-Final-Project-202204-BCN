import axios from "axios";
import { toast } from "react-toastify";
import { registerUserThunk } from "./thunks";

describe("Given a registerUserThunk function", () => {
  const formData = {
    username: "Schumi",
    password: "ferrari123",
    name: "Michael Schumacher",
    email: "schumi_morenico@hotmail.com",
  };

  describe("When it's invoked with with a new user data", () => {
    test("Then it should call the succes method of the toast function", async () => {
      axios.post = jest.fn();
      toast.success = jest.fn();
      const dispatch = jest.fn();

      const thunk = registerUserThunk(formData);
      await thunk(dispatch);

      expect(toast.success).toHaveBeenCalled();
    });
  });

  describe("When it's invoked with an exiting user", () => {
    test("Then it should call the error method of the toast function", async () => {
      axios.post = jest.fn().mockRejectedValue(new Error());
      toast.error = jest.fn();
      const dispatch = jest.fn();

      const thunk = registerUserThunk(formData);
      await thunk(dispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });
});
