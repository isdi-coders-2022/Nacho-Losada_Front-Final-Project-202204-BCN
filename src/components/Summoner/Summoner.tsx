import styled from "styled-components";

interface Props {
  summoner: ISummoner;
}

export interface ISummoner {
  summonerName: string;
  creatorName: string;
  rankImage: string;
  rank: string;
  firstRole: string;
  firstRoleChamps: string[];
  secondRole: string;
  secondRoleChamps: string[];
  description: string;
}

const SummonerStyle = styled.div``;

const Summoner = ({
  summoner: {
    summonerName,
    creatorName,
    rankImage,
    rank,
    firstRole,
    firstRoleChamps,
    secondRole,
    secondRoleChamps,
    description,
  },
}: Props) => {
  const championImageUrl = `http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/`;

  return (
    <SummonerStyle>
      <h2>{summonerName}</h2>
      <h3>{creatorName}</h3>
      <div className="summoner__rank-container">
        <img src={rankImage} alt={rank} />
        <p>{rank}</p>
      </div>
      <div className="summoner__role-container">
        <div className="summoner__first-role">
          <img src={firstRole} alt={firstRole} className="summoner__ico" />
          <img
            src={`${championImageUrl}${firstRoleChamps[0]}.png`}
            alt={`${firstRoleChamps[0]} icon`}
            className="summoner__ico"
          />
          <img
            src={`${championImageUrl}${firstRoleChamps[1]}.png`}
            alt={`${firstRoleChamps[1]} icon`}
            className="summoner__ico"
          />
          <img
            src={`${championImageUrl}${firstRoleChamps[2]}.png`}
            alt={`${firstRoleChamps[2]} icon`}
            className="summoner__ico"
          />
        </div>
        <div className="summoner__second-role">
          <img src={secondRole} alt={secondRole} className="summoner__ico" />
          <img
            src={`${championImageUrl}${secondRoleChamps[0]}.png`}
            alt={`${firstRoleChamps[0]} icon`}
            className="summoner__ico"
          />
          <img
            src={`${championImageUrl}${secondRoleChamps[1]}.png`}
            alt={`${firstRoleChamps[1]} icon`}
            className="summoner__ico"
          />
          <img
            src={`${championImageUrl}${secondRoleChamps[2]}.png`}
            alt={`${firstRoleChamps[2]} icon`}
            className="summoner__ico"
          />
        </div>
      </div>
      <p>{description}</p>
    </SummonerStyle>
  );
};

export default Summoner;
