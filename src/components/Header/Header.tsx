import styled from "styled-components";
import Menu from "../Menu/Menu";

const Header = (): JSX.Element => {
  const HeaderStyle = styled.header`
    padding-top: 20px;
    display: flex;
    justify-content: center;

    .title {
      width: fit-content;
      margin: 0;
      background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 45px;
      text-shadow: 3px 3px 1px rgba(230, 169, 77, 0.25);
    }
  `;

  return (
    <>
      <Menu />
      <HeaderStyle>
        <h1 className="title">Lolingo</h1>
      </HeaderStyle>
    </>
  );
};

export default Header;
