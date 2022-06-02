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
    }
    .header--menu-ico {
      position: absolute;
      left: 40px;
      top: 30px;
    }
  `;

  return (
    <>
      <Menu />
      <HeaderStyle>
        <img src="icons/menu.svg" alt="" className="header--menu-ico"></img>
        <h1 className="title">Lolingo</h1>
      </HeaderStyle>
    </>
  );
};

export default Header;
