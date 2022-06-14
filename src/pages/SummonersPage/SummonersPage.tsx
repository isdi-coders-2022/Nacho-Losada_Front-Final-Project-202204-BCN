import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Summoner, { ISummoner } from "../../components/Summoner/Summoner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadOwnSummonersThunk } from "../../redux/thunks/ownSummonersThunks";
import { loadSummonersThunk } from "../../redux/thunks/summonersThunks";

const SummonersPageStyle = styled.ul`
  list-style: none;
  padding: 0 20px;

  li:last-child {
    margin-bottom: 60px;
  }
`;

const SummonersPage = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);
  const summonersList: ISummoner[] = useAppSelector((state) => state.summoners);
  const ownSummonersList: ISummoner[] = useAppSelector(
    (state) => state.ownSummoners
  );
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(loadSummonersThunk());
    if (user.username) {
      dispatch(loadOwnSummonersThunk(user.name));
    }
  }, [dispatch, user]);

  return (
    <SummonersPageStyle>
      {pathname === "/summoners"
        ? summonersList.map((summoner: ISummoner) => (
            <li className="summoner" key={summoner.summonerName}>
              <Summoner summoner={summoner} />
            </li>
          ))
        : ownSummonersList.map((summoner: ISummoner) => (
            <li className="summoner" key={summoner.summonerName}>
              <Summoner summoner={summoner} />
            </li>
          ))}
      ;
    </SummonersPageStyle>
  );
};

export default SummonersPage;
