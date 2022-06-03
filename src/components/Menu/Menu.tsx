import { NavLink } from "react-router-dom";
import MenuStyled from "./MenuStyled";

const Menu = (): JSX.Element => {
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
              <NavLink to="/login">
                <p className="menu__link">Login</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <p className="menu__link">Register</p>
              </NavLink>
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
