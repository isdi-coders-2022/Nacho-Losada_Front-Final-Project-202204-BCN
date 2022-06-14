import {
  mockCreateFormData as mockedNewSummoner,
  mockSummonersList,
} from "../../mocks/mocks";
import summonersReducer, {
  loadListActionCreator,
  deleteSummonerActionCreator,
  createSummonerActionCreator,
  editSummonerActionCreator,
} from "./summonersSlice";

describe("Given a summonerSlice reducer", () => {
  describe("When it receives a loadList action and a list of summoners", () => {
    test("Then it should return a list of summoners", () => {
      const loadListAction = loadListActionCreator(mockSummonersList);
      const loadedList = summonersReducer(mockSummonersList, loadListAction);

      expect(loadedList).toEqual(mockSummonersList);
    });
  });

  describe("When it receives a deleteSummoner action and a summoner id", () => {
    test("Then it should return the list without the summoner of that id", () => {
      const summonerToDelete = mockSummonersList[0];
      const summonerIdToDelete = mockSummonersList[0].id;

      const deleteSummonerAction =
        deleteSummonerActionCreator(summonerIdToDelete);
      const returnedList = summonersReducer(
        mockSummonersList,
        deleteSummonerAction
      );

      expect(returnedList).not.toContain(summonerToDelete);
    });
  });

  describe("When it receives a createSummoner action and a new summoner", () => {
    test("Then it should return the list with the new summoner added", () => {
      const createSummonerAction =
        createSummonerActionCreator(mockedNewSummoner);
      const returnedList = summonersReducer(
        mockSummonersList,
        createSummonerAction
      );

      expect(returnedList).toContain(mockedNewSummoner);
    });
  });

  describe("When it receives an editSummoner action and an edited summoner", () => {
    test("Then it should return the list with the new summoner edited", () => {
      const editedSummoner = {
        summonerName: "Golden Graham",
        creatorName: "Cleopatra",
        rank: "Gold",
        division: "II",
        firstRole: "Top",
        firstRoleChamps: ["Zed", "Warwick", "Poppy"],
        secondRole: "Support",
        secondRoleChamps: ["Lulu", "Brand", "Bard"],
        description: "Lolen Ipsum",
        id: "1234",
      };

      const editSummonerAction = editSummonerActionCreator(editedSummoner);
      const returnedList = summonersReducer(
        mockSummonersList,
        editSummonerAction
      );

      expect(returnedList[0].summonerName).not.toBe(
        mockSummonersList[0].summonerName
      );
    });
  });
});
