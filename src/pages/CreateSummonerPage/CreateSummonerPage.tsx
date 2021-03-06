import styled from "styled-components";
import CreateSummonerForm from "../../components/CreateSummoner/CreateSummonerForm";

const CreateSummonerPageStyle = styled.div``;

const CreateSummonerPage = (): JSX.Element => {
  return (
    <CreateSummonerPageStyle>
      <CreateSummonerForm handledSummoner={null} />
    </CreateSummonerPageStyle>
  );
};

export default CreateSummonerPage;
