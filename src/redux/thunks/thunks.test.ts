import axios from "axios";
import { registerUserThunk } from "./thunks";

describe("Given a registerUserThunk function", () => {
  describe("When it's invoked with with a new user data", () => {
    test("Then it should invoke the axio's post method with the register endpoint, the new user data and the header", async () => {
      const formData = {
        username: "Schumi",
        password: "ferrari123",
        name: "Michael Schumacher",
        email: "schumi_morenico@hotmail.com",
      };
      const apiURL = `${process.env.REACT_APP_API_URL}user/register`;
      const header = {
        headers: {
          "Access-Control-Allow-Origin": `${process.env.REACT_APP_API_URL}`,
        },
      };
      axios.post = jest.fn();

      await registerUserThunk(formData);

      expect(axios.post).toHaveBeenCalledWith(apiURL, formData, header);
    });
  });
});
