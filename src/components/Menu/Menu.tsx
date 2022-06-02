import { useNavigate } from "react-router-dom";
import MenuStyled from "./MenuStyled";

const Menu = (): JSX.Element => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/register");
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <MenuStyled>
      <input type="checkbox" className="toggler" />
      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div>
          <ul className="menu__list">
            <li>
              <div className="menu__separator"></div>
            </li>
            <li>
              <p className="menu__link" onClick={goToLogin}>
                Login
              </p>
            </li>
            <li>
              <p className="menu__link" onClick={goToRegister}>
                Register
              </p>
            </li>
            <li>
              <div className="menu__separator"></div>
            </li>
          </ul>
        </div>
      </div>
    </MenuStyled>
  );
};

export default Menu;
