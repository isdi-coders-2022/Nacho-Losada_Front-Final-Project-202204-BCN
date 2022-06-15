import styled from "styled-components";

export const CreateSummonerFormStyle = styled.div`
  margin-bottom: 180px;

  .grayscale {
    filter: grayscale(0.8);
  }

  input::placeholder {
    font-size: 1.1rem;
    padding-left: 10px;
  }

  .new-summoner-form {
    &__invisible-label {
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

  .new-summoner-form__champion-select-text {
    background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    text-shadow: 3px 3px 1px rgba(230, 169, 77, 0.25);
    margin-top: 18px;
  }

  select {
    font-size: 1.1rem;
    padding-left: 10px;
    white-space: nowrap;
  }
`;

export const ChampionListFormStyle = styled.div`
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
