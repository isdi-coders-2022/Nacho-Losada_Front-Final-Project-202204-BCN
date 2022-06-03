import styled from "styled-components";

const FooterStyle = styled.nav`
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 20%,
    rgba(255, 255, 255, 0) 80%
  );

  .footer__icon-list {
    padding-left: 0;
    list-style: none;
    display: flex;
  }

  .footer__icon {
    width: 40px;
    filter: invert(96%) sepia(84%) saturate(347%) hue-rotate(77deg)
      brightness(99%) contrast(87%);
    z-index: 1;
  }
  li {
    justify-content: center;
    margin: 0px 2rem;
    width: fit-content;
  }
`;

export default FooterStyle;
