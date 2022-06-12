import axios from "axios";
import { toast } from "react-toastify";
import { deleteSummonerThunk, loadSummonersThunk } from "./summonersThunks";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a loadSummonersThunk function", () => {
  describe("When invoked", () => {
    test("Then it should call the dispatch function 3 times", async () => {
      const expectedCalls = 3;
      const mockResponse = { data: { summoners: { name: "dummie-name" } } };

      axios.get = jest.fn().mockResolvedValue(mockResponse);

      const thunk = loadSummonersThunk();
      await thunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });

  describe("When invoked and the response fail", () => {
    test("Then it should call the dispatch function 2 times", async () => {
      const expectedCalls = 2;

      axios.get = jest.fn().mockRejectedValue("");

      const thunk = loadSummonersThunk();
      await thunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledTimes(expectedCalls);
    });
  });
});

describe("Given a deleteSummonerThunk function", () => {
  describe("When a logged user invokes it with a correct id and a summoner name", () => {
    test("Then it should call the toast success method", async () => {
      const idToDelete = "delete me pls";
      const summonerName = "Marco Antonio";

      axios.delete = jest.fn();
      toast.success = jest.fn();
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      const thunk = deleteSummonerThunk(idToDelete, summonerName);
      await thunk(mockDispatch);

      expect(toast.success).toHaveBeenCalled();
    });
  });

  describe("When a logged user invokes it with an id and a summoner name but the request fail", () => {
    test("Then it should call the toast error method", async () => {
      const idToDelete = "cant touch this";
      const summonerName = "Mario the Boss";

      axios.delete = jest.fn().mockRejectedValue("");
      toast.error = jest.fn();
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      const thunk = deleteSummonerThunk(idToDelete, summonerName);
      await thunk(mockDispatch);

      expect(toast.error).toHaveBeenCalled();
    });
  });

  describe("When a not logged user tries to invoke it", () => {
    test("Then it should call the toast warning method", async () => {
      const idToDelete = "cant touch this";
      const summonerName = "Mario the Boss";

      toast.warning = jest.fn();
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

      const thunk = deleteSummonerThunk(idToDelete, summonerName);
      await thunk(mockDispatch);

      expect(toast.warning).toHaveBeenCalled();
    });
  });
});
