import { ChangeEventHandler, useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  createSummonerThunk,
  editSummonerThunk,
} from "../../redux/thunks/summonersThunks";
import champions from "../../utils/champions";
import { ISummoner } from "../Summoner/Summoner";

const CreateSummonerStyle = styled.div`
  margin-bottom: 180px;

  .new-summoner-form {
    p {
      display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .new-summoner-form__input {
    width: 300px;
    height: 50px;
    border-radius: 10px;
  }
`;

const ChampionListFormStyle = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin: 0 30px 10px 30px;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  input[type="checkbox"] {
    display: none;
  }

  input + label > img {
    display: inline-block;
    height: 70px;
  }

  input[type="checkbox"]:checked + label > img {
    border: 2px solid #e6a94d;
    border-radius: 5px;
  }
`;

export interface IFormData {
  summonerName: string;
  creatorName: string;
  rank: string;
  division: string;
  firstRole: string;
  firstRoleChamps: string[];
  secondRole: string;
  secondRoleChamps: string[];
  description: string;
}

export interface SummonerProp {
  handledSummoner: ISummoner | null | undefined;
}

const CreateSummonerForm = ({ handledSummoner }: SummonerProp): JSX.Element => {
  const nameOfUser: string = useAppSelector((state) => state.user.name);
  const dispatch = useAppDispatch();

  let champsInitial: string[] = [];
  const [firstRoleChampions, setFirstRoleChampions] = useState(champsInitial);
  const [secondRoleChampions, setSecondRoleChampions] = useState(champsInitial);

  const blankData: IFormData = {
    summonerName: handledSummoner ? handledSummoner.summonerName : "",
    creatorName: handledSummoner ? handledSummoner.creatorName : "",
    rank: handledSummoner ? handledSummoner.rank : "",
    division: handledSummoner ? handledSummoner.division : "",
    firstRole: handledSummoner ? handledSummoner.firstRole : "",
    firstRoleChamps: handledSummoner ? handledSummoner.firstRoleChamps : [],
    secondRole: handledSummoner ? handledSummoner.secondRole : "",
    secondRoleChamps: handledSummoner ? handledSummoner.secondRoleChamps : [],
    description: handledSummoner ? handledSummoner.description : "",
  };
  const [formData, setFormData] = useState(blankData);
  const [buttonDisable, setButtonDisable] = useState(true);

  formData.creatorName = nameOfUser;

  useEffect(() => {
    if (
      formData.summonerName !== "" &&
      formData.rank !== "" &&
      formData.firstRole !== "" &&
      formData.firstRoleChamps !== [] &&
      formData.secondRole !== "" &&
      formData.secondRoleChamps !== [] &&
      formData.description !== ""
    ) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formData]);

  const resetForm = (): void => {
    setFormData(blankData);
  };

  const changeData: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const changeSelectData: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const changeTextAreaData: ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const toggleFirstRoleChampion = (champion: string) => {
    switch (firstRoleChampions.includes(champion)) {
      case true:
        const newChamps = firstRoleChampions.filter(
          (champ) => champ !== champion
        );
        setFirstRoleChampions(newChamps);
        setFormData({ ...formData, firstRoleChamps: newChamps });
        break;

      case false:
        setFirstRoleChampions([...firstRoleChampions, `${champion}`]);
        setFormData({ ...formData, firstRoleChamps: firstRoleChampions });
        break;

      default:
        break;
    }
  };

  const toggleSecondRoleChampion = (champion: string) => {
    switch (secondRoleChampions.includes(champion)) {
      case true:
        const newChamps = secondRoleChampions.filter(
          (champ) => champ !== champion
        );
        setSecondRoleChampions(newChamps);
        setFormData({ ...formData, secondRoleChamps: newChamps });
        break;

      case false:
        setSecondRoleChampions([...secondRoleChampions, `${champion}`]);
        setFormData({ ...formData, secondRoleChamps: secondRoleChampions });
        break;

      default:
        break;
    }
  };

  const submitSummoner = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handledSummoner) {
      dispatch(editSummonerThunk(handledSummoner.id, formData));
      return;
    }

    dispatch(createSummonerThunk(formData));
    resetForm();
  };

  return (
    <CreateSummonerStyle>
      <form
        onSubmit={submitSummoner}
        autoComplete="off"
        noValidate
        className="new-summoner-form"
      >
        <label htmlFor="summonerName" />
        <p>Nombre de invocador</p>
        <input
          placeholder="Nombre de invocador"
          id="summonerName"
          value={formData.summonerName}
          onChange={changeData}
          className="new-summoner-form__input"
        ></input>
        <label htmlFor="rank" />
        <p>Rango</p>
        <select
          id="rank"
          onChange={changeSelectData}
          className="new-summoner-form__input"
          defaultValue={
            handledSummoner ? handledSummoner.rank : "Rango del invocador"
          }
        >
          <option hidden value={"Rango del invocador"}>
            Rango del invocador
          </option>
          <option value="Iron">Hierro</option>
          <option value="Bronze">Bronce</option>
          <option value="Silver">Plata</option>
          <option value="Gold">Oro</option>
          <option value="Platinum">Platino</option>
          <option value="Diamond">Diamante</option>
          <option value="Master">Maestro</option>
          <option value="Grandmaster">Gran Maestro</option>
          <option value="Challenger">Challenger</option>
          <option value="Unranked">Unranked</option>
        </select>
        <select
          id="division"
          onChange={changeSelectData}
          className="new-summoner-form__input"
          defaultValue={handledSummoner ? handledSummoner.division : "division"}
        >
          <option hidden value={"division"}>
            División
          </option>
          <option value="IV">IV</option>
          <option value="III">III</option>
          <option value="II">II</option>
          <option value="I">I</option>
          <option value="">Ninguno</option>
        </select>
        <select
          id="firstRole"
          onChange={changeSelectData}
          className="new-summoner-form__input"
          defaultValue={handledSummoner ? handledSummoner.firstRole : "Rol 1"}
        >
          <option hidden value={"Rol 1"}>
            Rol 1
          </option>
          <option value="Top">Top </option>
          <option value="Jungle">Jungla</option>
          <option value="Mid">Mid</option>
          <option value="Support">Support</option>
          <option value="Bot">Bot</option>
        </select>
        <ChampionListFormStyle>
          <ul>
            {champions.map((champion) => (
              <li key={champion}>
                <input
                  className="checkbox"
                  type="checkbox"
                  id={champion}
                  value={champion}
                />
                <label htmlFor={champion}>
                  <img
                    src={`/images/champions/${champion}.webp`}
                    alt={champion}
                    className="champion"
                    onClick={() => toggleFirstRoleChampion(champion)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </ChampionListFormStyle>
        <select
          id="secondRole"
          onChange={changeSelectData}
          className="new-summoner-form__input"
          defaultValue={handledSummoner ? handledSummoner.secondRole : "Rol 2"}
        >
          <option hidden value={"Rol 2"}>
            Rol 2
          </option>
          <option value="Top">Top</option>
          <option value="Jungle">Jungla</option>
          <option value="Mid">Mid</option>
          <option value="Support">Support</option>
          <option value="Bot">Bot</option>
        </select>
        <ChampionListFormStyle>
          <ul>
            {champions.map((champion) => (
              <li key={`${champion}_2`}>
                <input
                  className="checkbox"
                  type="checkbox"
                  id={champion}
                  value={`${champion}`}
                />
                <label htmlFor={`${champion}`}>
                  <img
                    src={`/images/champions/${champion}.webp`}
                    alt={champion}
                    className="champion"
                    onClick={() => toggleSecondRoleChampion(champion)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </ChampionListFormStyle>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          cols={33}
          onChange={changeTextAreaData}
          autoComplete="off"
          placeholder="Escribe un poquito sobre tu cuenta"
          maxLength={150}
        ></textarea>
        <button disabled={buttonDisable} type="submit">
          {handledSummoner ? "Editar Invocador" : "Crear Invocador"}
        </button>
      </form>
    </CreateSummonerStyle>
  );
};

export default CreateSummonerForm;
