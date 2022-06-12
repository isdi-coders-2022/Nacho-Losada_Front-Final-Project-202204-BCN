import styled from "styled-components";

const NotFoundPagePageStyled = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 200px;
  }

  p {
    max-width: 300px;
    background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 2rem;
    text-shadow: 3px 3px 1px rgba(230, 169, 77, 0.25);
  }

  .container {
    display: flex;
    flex-direction: column;

    align-items: center;
    width: fit-content;
  }
`;

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPagePageStyled>
      <div className="container">
        <img
          src="images/poros/notfound-poro.webp"
          alt="poro chafado pensando en porogalletas"
        />

        <p>Ooops!! Parece que la página que buscas no existe :(</p>
      </div>
    </NotFoundPagePageStyled>
  );
};

export default NotFoundPage;
