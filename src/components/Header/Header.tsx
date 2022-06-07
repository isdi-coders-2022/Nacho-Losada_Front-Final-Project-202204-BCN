import styled from "styled-components";
import Menu from "../Menu/Menu";

const Header = (): JSX.Element => {
  const HeaderStyle = styled.header`
    padding-top: 20px;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    height: 110px;

    background: linear-gradient(
      0deg,
      rgb(7, 21, 22, 0) 0%,
      #071516da 30%,
      #071516 100%
    );

    .title {
      width: fit-content;
      margin: 0;
      background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 45px;
      text-shadow: 3px 3px 1px rgba(230, 169, 77, 0.25);
    }
  `;

  return (
    <>
      <HeaderStyle>
        <Menu />
        <h1 className="title">Lolingo</h1>
      </HeaderStyle>
    </>
  );
};

export default Header;
