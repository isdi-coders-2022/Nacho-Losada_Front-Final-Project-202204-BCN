import styled from "styled-components";
import champions from "../../../utils/champions";

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

const ChampionListForm = ({ func }: any): JSX.Element => {
  return (
    <ChampionListFormStyle>
      <ul>
        {champions.map((champion) => (
          <li>
            <input
              className="checkbox"
              type="checkbox"
              id={champion}
              value={champion}
              // onChange={func}
              onClick={() => func(champion)}
            />
            <label htmlFor={champion}>
              <img
                src={`/images/champions/${champion}.webp`}
                alt={champion}
                className="champion"
                onClick={() => func(champion)}
              />
            </label>
          </li>
        ))}
      </ul>
    </ChampionListFormStyle>
  );
};

export default ChampionListForm;
