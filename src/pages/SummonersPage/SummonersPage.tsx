import { useEffect } from "react";
import styled from "styled-components";
import Summoner, { ISummoner } from "../../components/Summoner/Summoner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadSummonersThunk } from "../../redux/thunks/summonersThunks";

const SummonersPageStyle = styled.ul`
  list-style: none;
  padding: 0 20px;
`;

const SummonersPage = (): JSX.Element => {
  const summonersList: ISummoner[] = useAppSelector((state) => state.summoners);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadSummonersThunk());
  }, [dispatch]);

  return (
    <SummonersPageStyle>
      {summonersList.map((summoner: ISummoner) => (
        <li className="summoner" key={summoner.summonerName}>
          <Summoner summoner={summoner} />
        </li>
      ))}
      ;
    </SummonersPageStyle>
  );
};

export default SummonersPage;
