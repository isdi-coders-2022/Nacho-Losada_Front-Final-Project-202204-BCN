import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CreateSummonerForm from "../../components/CreateSummoner/CreateSummonerForm";
import { ISummoner } from "../../components/Summoner/Summoner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadSummonersThunk } from "../../redux/thunks/summonersThunks";

const CreateSummonerPageStyle = styled.div``;

const EditSummonerPage = (): JSX.Element => {
  const { id } = useParams();
  const allSummoners = useAppSelector((state) => state.summoners);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadSummonersThunk());
  }, [dispatch]);

  const editingSummoner: ISummoner | undefined = allSummoners.find(
    (summoner) => summoner.id === id
  );

  return (
    <CreateSummonerPageStyle>
      <CreateSummonerForm handledSummoner={editingSummoner} />
    </CreateSummonerPageStyle>
  );
};

export default EditSummonerPage;
