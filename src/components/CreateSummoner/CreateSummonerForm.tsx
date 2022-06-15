import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loadOwnSummonersThunk } from "../../redux/thunks/ownSummonersThunks";
import {
  createSummonerThunk,
  editSummonerThunk,
  loadSummonersThunk,
} from "../../redux/thunks/summonersThunks";
import champions from "../../utils/champions";
import { ISummoner } from "../Summoner/Summoner";
import {
  ChampionListFormStyle,
  CreateSummonerFormStyle,
} from "./CreateSummonerFormStyle";

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
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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

  formData.creatorName = name;

  useEffect(() => {
    if (
      formData.summonerName !== "" &&
      formData.rank !== "" &&
      formData.firstRole !== "" &&
      formData.firstRoleChamps !== [] &&
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

  const changeData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const toggleFirstRoleChampion = (champion: string) => {
    switch (formData.firstRoleChamps.includes(champion)) {
      case true:
        setFormData({
          ...formData,
          firstRoleChamps: formData.firstRoleChamps.filter(
            (champ) => champ !== champion
          ),
        });
        break;

      case false:
        setFormData({
          ...formData,
          firstRoleChamps: [...formData.firstRoleChamps, champion],
        });
        break;

      default:
        break;
    }
  };

  const submitSummoner = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (handledSummoner) {
      dispatch(editSummonerThunk(handledSummoner.id, formData));
      dispatch(loadSummonersThunk());
      dispatch(loadOwnSummonersThunk(name));

      navigate("/user/my-summoners");
      return;
    }

    dispatch(createSummonerThunk(formData));
    dispatch(loadSummonersThunk());
    navigate("/summoners");
    resetForm();
  };

  return (
    <CreateSummonerFormStyle>
      <form
        onSubmit={submitSummoner}
        autoComplete="off"
        noValidate
        className="new-summoner-form"
      >
        <label htmlFor="summonerName" />
        <p className="new-summoner-form__invisible-label">
          Nombre de invocador
        </p>
        <input
          placeholder="Nombre de invocador"
          id="summonerName"
          value={formData.summonerName}
          onChange={changeData}
          className="new-summoner-form__input"
        ></input>
        <label htmlFor="rank" />
        <p className="new-summoner-form__invisible-label">Rango</p>
        <select
          id="rank"
          onChange={changeData}
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
          onChange={changeData}
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
          onChange={changeData}
          className="new-summoner-form__input"
          defaultValue={handledSummoner ? handledSummoner.firstRole : "Rol 1"}
        >
          <option hidden value={"Rol"}>
            Rol
          </option>
          <option value="Top">Top </option>
          <option value="Jungle">Jungla</option>
          <option value="Mid">Mid</option>
          <option value="Support">Support</option>
          <option value="Bot">Bot</option>
        </select>
        <span className="new-summoner-form__champion-select-text">
          Elige 3 campeones
        </span>
        <ChampionListFormStyle>
          <ul>
            {champions.map((champion) => (
              <li key={champion}>
                <input
                  className="checkbox"
                  type="checkbox"
                  id={champion}
                  value={champion}
                  onClick={() => toggleFirstRoleChampion(champion)}
                />
                <label htmlFor={champion}>
                  <img
                    src={`/images/champions/${champion}.webp`}
                    alt={champion}
                    className={
                      formData.firstRoleChamps.length < 3
                        ? `champion`
                        : `champion grayscale`
                    }
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
          onChange={changeData}
          autoComplete="off"
          placeholder="Escribe un poquito sobre tu cuenta"
          maxLength={150}
          defaultValue={handledSummoner ? handledSummoner.description : ""}
        ></textarea>
        <button disabled={buttonDisable} type="submit">
          {handledSummoner ? "Editar" : "Crear"}
        </button>
      </form>
    </CreateSummonerFormStyle>
  );
};

export default CreateSummonerForm;
