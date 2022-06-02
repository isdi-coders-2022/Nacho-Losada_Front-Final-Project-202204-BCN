import styled from "styled-components";

const MenuStyled = styled.div`
  height: 300px;
  width: 200px;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;

  .menu {
    list-style: none;
    background-color: #0e292c;
    color: white;
    align-items: center;
  }

  .menu__spacer {
    width: 130px;
    height: 2px;
    background-color: white;
  }
`;

const Menu = (): JSX.Element => {
  return (
    <MenuStyled>
      <ul className="menu">
        <li>
          <div className="menu__spacer"></div>
        </li>
        <li>
          <p className="menu__login">Login</p>
        </li>
        <li>
          <p className="menu__register">Register</p>
        </li>
        <li>
          <div className="menu__spacer"></div>
        </li>
      </ul>
    </MenuStyled>
  );
};

export default Menu;
