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
