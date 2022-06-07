import styled from "styled-components";

const SummonerStyle = styled.div`
  background: rgba(170, 236, 212, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .summoner {
    &__name {
      font-size: 2rem;
    }

    &__creator-name {
      font-size: 1.5rem;
    }

    &__rank-text {
      font-size: 1.7rem;
      margin: 20px 0;
    }

    &__ico {
      width: 40px;
    }

    &__rank-emblem {
      width: 150px;
    }

    &__description {
      display: none;
    }
  }

  .summoner__left-block {
    margin-left: 15px;
  }

  .summoner__right-block {
    text-align: center;
  }

  p,
  h2,
  h3 {
    background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    text-shadow: 3px 3px 1px rgba(230, 169, 77, 0.25);
  }
`;

export default SummonerStyle;
