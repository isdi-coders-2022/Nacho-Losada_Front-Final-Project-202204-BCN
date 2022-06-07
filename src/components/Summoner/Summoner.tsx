import SummonerStyle from "./SummonerStyle";

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
  const championImageUrl = `https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/`;

  return (
    <SummonerStyle>
      <div className="summoner__left-block">
        <h2 className="summoner__name">{summonerName}</h2>
        <h3 className="summoner__creator-name">{creatorName}</h3>
        <div className="summoner__role-container">
          <div className="summoner__first-role">
            <img
              src={firstRole}
              alt={firstRole}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${firstRoleChamps[0]}.png`}
              alt={`${firstRoleChamps[0]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${firstRoleChamps[1]}.png`}
              alt={`${firstRoleChamps[1]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${firstRoleChamps[2]}.png`}
              alt={`${firstRoleChamps[2]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
          </div>
          <div className="summoner__second-role">
            <img src={secondRole} alt={secondRole} className="summoner__ico" />
            <img
              src={`${championImageUrl}${secondRoleChamps[0]}.png`}
              alt={`${firstRoleChamps[0]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${secondRoleChamps[1]}.png`}
              alt={`${firstRoleChamps[1]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${secondRoleChamps[2]}.png`}
              alt={`${firstRoleChamps[2]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
          </div>
        </div>
      </div>
      <div className="summoner__rank-container summoner__right-block">
        <img
          src={rankImage}
          alt={rank}
          className="summoner__rank-emblem"
          width="150"
          height="171.38"
        />
        <p className="summoner__rank-text">{rank}</p>
      </div>
      <div className="summoner__actions-container">
        <img src="icons/delete.svg" alt="" />
      </div>
      <p className="summoner__description">{description}</p>
    </SummonerStyle>
  );
};

export default Summoner;
