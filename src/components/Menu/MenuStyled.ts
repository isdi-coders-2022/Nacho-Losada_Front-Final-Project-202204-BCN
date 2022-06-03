import styled from "styled-components";

const MenuStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;

  .menu {
    background: #0e292c;
    width: 0%;
    height: 300px;

    transition: all 0.4s ease;
  }

  .menu__separator {
    width: 130px;
    height: 5px;
    background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
  }

  .toggler {
    z-index: 2;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 10px;
    left: 20px;
    opacity: 0;
  }

  .hamburger {
    position: absolute;
    top: 30px;
    left: 40px;
    height: 40px;
    width: 40px;
    padding: 0.6rem;

    display: flex;
    justify-content: center;

    div {
      position: relative;
      top: 0;
      left: 0;
      background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
      height: 4px;
      width: 25px;
      transition: all 0.4s ease;
    }

    div::before,
    div::after {
      content: "";
      position: absolute;
      top: -10px;
      background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
      width: 100%;
      height: 4px;
      transition: all 0.4s ease;
    }
  }

  .hamburger > div::after {
    top: 10px;
  }

  .toggler:checked + .hamburger > div {
    background: rgba(0, 0, 0, 0);
  }

  .toggler:checked + .hamburger > div::before {
    top: 0;
    transform: rotate(45deg);
    background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
  }

  .toggler:checked + .hamburger > div::after {
    top: 0;
    transform: rotate(135deg);
    background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
  }

  .toggler:checked ~ .menu {
    width: 200px;
  }

  .menu__list {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    padding-left: 10px;
    visibility: hidden;
    justify-content: center;

    li {
      list-style: none;
      padding: 0.5rem;
    }
    p {
      background: linear-gradient(90deg, #e6a94d 50%, #dfd1b2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      font-size: 2rem;
      margin: 0;
    }
    a {
      text-decoration: none;
    }
  }

  .toggler:checked ~ .menu > div > ul {
    transition: visibility 0.4s ease;
    transition-delay: 0.1s;
    visibility: visible;
  }
`;

export default MenuStyled;
