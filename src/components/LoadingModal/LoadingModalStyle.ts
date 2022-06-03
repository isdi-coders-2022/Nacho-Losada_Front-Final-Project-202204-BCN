import styled from "styled-components";

const LoadingModalStyle = styled.div`
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 2s linear;

  .modal__gif-container {
    background: black;
    position: absolute;
    width: 100%;
    top: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .modal__gif {
    width: 100px;
    padding-top: 20px;
  }

  .modal__loading-text {
    color: white;
    width: fit-content;
    font-size: 26px;
    animation: pulse 5s infinite;
    margin-top: 0;
    margin-bottom: 20px;
  }

  .load {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    animation: pulse-white 2s infinite;
  }

  @keyframes pulse-white {
    0% {
      transform: scale(0.95);
      color: black;
    }
    50% {
      transform: scale(1);
      color: #ffffff;
    }

    100% {
      color: #000000;
      transform: scale(0.95);
    }
  }
`;

export default LoadingModalStyle;
