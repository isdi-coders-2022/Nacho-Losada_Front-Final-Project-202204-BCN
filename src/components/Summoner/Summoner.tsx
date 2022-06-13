import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { deleteSummonerThunk } from "../../redux/thunks/summonersThunks";
import SummonerStyle from "./SummonerStyle";

interface Props {
  summoner: ISummoner;
}

export interface ISummoner {
  summonerName: string;
  creatorName: string;
  rank: string;
  division: string;
  firstRole: string;
  firstRoleChamps: string[];
  secondRole: string;
  secondRoleChamps: string[];
  description: string;
  id: string;
}

const Summoner = ({
  summoner: {
    summonerName,
    creatorName,
    rank,
    division,
    firstRole,
    firstRoleChamps,
    secondRole,
    secondRoleChamps,
    description,
    id,
  },
}: Props) => {
  const championImageUrl = `images/champions/`;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <SummonerStyle>
      <div className="summoner__left-block">
        <h2 className="summoner__name">{summonerName}</h2>
        <h3 className="summoner__creator-name">{creatorName}</h3>
        <div className="summoner__role-container">
          <div className="summoner__first-role">
            <img
              src={`images/positions/${firstRole}.webp`}
              alt={firstRole}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${firstRoleChamps[0]}.webp`}
              alt={`${firstRoleChamps[0]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${firstRoleChamps[1]}.webp`}
              alt={`${firstRoleChamps[1]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${firstRoleChamps[2]}.webp`}
              alt={`${firstRoleChamps[2]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
          </div>
          <div className="summoner__second-role">
            <img
              src={`images/positions/${secondRole}.webp`}
              alt={secondRole}
              className="summoner__ico"
            />
            <img
              src={`${championImageUrl}${secondRoleChamps[0]}.webp`}
              alt={`${firstRoleChamps[0]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${secondRoleChamps[1]}.webp`}
              alt={`${firstRoleChamps[1]} icon`}
              className="summoner__ico"
              width="40"
              height="40"
            />
            <img
              src={`${championImageUrl}${secondRoleChamps[2]}.webp`}
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
          src={`images/rank-emblems/${rank}.webp`}
          alt={rank}
          className="summoner__rank-emblem"
          width="150"
          height="171.38"
        />
        <p className="summoner__rank-text">
          {rank} {division}
        </p>
      </div>
      <div className="summoner__actions-container">
        <img
          src="icons/delete.svg"
          alt=""
          onClick={() => dispatch(deleteSummonerThunk(id, summonerName))}
        />
        <img
          src="icons/edit.svg"
          alt=""
          onClick={() => navigate(`/summoners/edit/${id}`)}
        />
      </div>
      <p className="summoner__description">{description}</p>
    </SummonerStyle>
  );
};

export default Summoner;
