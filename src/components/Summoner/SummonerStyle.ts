import styled from "styled-components";

const SummonerStyle = styled.div`
  background: rgba(170, 236, 212, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  align-content: center;

  .summoner {
    &__name {
      font-size: 2rem;
    }

    &__creator-name {
      font-size: 1.5rem;
      margin: 15px 0;
    }

    &__rank-text {
      font-size: 1.7rem;
      margin: 20px 0;
    }

    &__ico {
      width: 40px;
    }

    &__rank-emblem {
      height: 120px;
      width: 105px;
    }

    &__description {
      display: none;
    }
  }

  .summoner__role-container {
    margin-bottom: 10px;
  }
  .summoner__left-block {
    margin-left: 10px;
  }

  .summoner__right-block {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .summoner__actions-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-right: 10px;
    width: 24px;
  }

  .test {
    display: flex;
    flex-direction: row;
  }
  .summoner__actions {
    &--delete {
      filter: invert(50%) sepia(78%) saturate(6572%) hue-rotate(345deg)
        brightness(103%) contrast(88%);
    }

    &--edit {
      filter: invert(95%) sepia(12%) saturate(4003%) hue-rotate(317deg)
        brightness(92%) contrast(96%);
    }
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
