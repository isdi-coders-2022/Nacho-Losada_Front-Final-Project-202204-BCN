import axios from "axios";
import { toast } from "react-toastify";
import { mockCreateFormData } from "../../mocks/mocks";
import {
  createSummonerThunk,
  deleteSummonerThunk,
  editSummonerThunk,
  loadSummonersThunk,
} from "./summonersThunks";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

toast.success = jest.fn();
toast.error = jest.fn();
toast.warning = jest.fn();

describe("Given a loadSummonersThunk function", () => {
  const thunk = loadSummonersThunk();

  describe("When invoked", () => {
    test("Then it should call the dispatch function 3 times", async () => {
      const expectedCalls = 3;
      const mockResponse = { data: { summoners: { name: "dummie-name" } } };

      axios.get = jest.fn().mockResolvedValue(mockResponse);
      await thunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });

  describe("When invoked and the response fail", () => {
    test("Then it should call the dispatch function 2 times", async () => {
      const expectedCalls = 2;

      axios.get = jest.fn().mockRejectedValue("");
      await thunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given a deleteSummonerThunk function", () => {
  const idToDelete = "cant touch this";
  const summonerName = "Mario the Boss";
  const thunk = deleteSummonerThunk(idToDelete, summonerName);

  describe("When a logged user invokes it with a correct id and a summoner name", () => {
    test("Then it should call the toast success method", async () => {
      axios.delete = jest.fn();
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      await thunk(mockDispatch);

      expect(toast.success).toHaveBeenCalled();
    });
  });

  describe("When a logged user invokes it with an id and a summoner name but the request fail", () => {
    test("Then it should call the toast error method", async () => {
      axios.delete = jest.fn().mockRejectedValue("");
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      await thunk(mockDispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe("When a not logged user tries to invoke it", () => {
    test("Then it should call the toast warning method", async () => {
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

      await thunk(mockDispatch);

      expect(toast.warning).toHaveBeenCalled();
    });
  });
});

describe("Given a createSummonerThunk function", () => {
  const thunk = createSummonerThunk(mockCreateFormData);

  describe("When a logged user invokes it with the form values", () => {
    test("Then it should call the axios post method", async () => {
      axios.post = jest.fn();
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      await thunk(mockDispatch);

      expect(axios.post).toHaveBeenCalled();
    });
  });

  describe("When a logged user invokes it with invalid values", () => {
    test("Then it should call the toast error method", async () => {
      axios.post = jest.fn().mockRejectedValue(new Error());
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      await thunk(mockDispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe("When a not logged user invokes it", () => {
    test("Then it should call the toast warning error", async () => {
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

      await thunk(mockDispatch);

      expect(toast.warning).toHaveBeenCalled();
    });
  });
});

describe("Given a editSummonerThunk function", () => {
  const idToDelete = "edit me";
  const thunk = editSummonerThunk(idToDelete, mockCreateFormData);

  describe("When a logged user invokes it with an existant id and a new form", () => {
    test("Then it should call the toast succes method", async () => {
      axios.post = jest.fn();
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      await thunk(mockDispatch);

      expect(toast.success).toHaveBeenCalled();
    });
  });

  describe("When a logged user invokes it with an invalid id and a new form", () => {
    test("Then it should call the toast error method", async () => {
      axios.post = jest.fn().mockRejectedValue(new Error());
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      await thunk(mockDispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe("When a not logged user invokes it", () => {
    test("Then it should call the toast warning method", async () => {
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

      await thunk(mockDispatch);

      expect(toast.warning).toHaveBeenCalled();
    });
  });
});
