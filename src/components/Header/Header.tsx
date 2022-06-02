import styled from "styled-components";

const Header = (): JSX.Element => {
  const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    .title {
      width: fit-content;
      margin: 0;
    }
    .header--menu-ico {
      position: absolute;
      left: 40px;
      top: 12px;
    }
  `;

  return (
    <HeaderStyle>
      <img src="icons/menu.svg" alt="" className="header--menu-ico"></img>
      <h1 className="title">Lolingo</h1>
    </HeaderStyle>
  );
};

export default Header;
