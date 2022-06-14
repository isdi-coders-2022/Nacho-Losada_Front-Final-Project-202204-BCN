import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutActionCreator } from "../../redux/features/userSlice";
import { useAppSelector } from "../../redux/hooks/hooks";
import { successIcon } from "../../utils/icons";
import CustomToast from "../CustomToast/CustomToast";
import MenuStyled from "./MenuStyled";

const Menu = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const successLogoutText = `"-Hasta pronto ${name}!!"`;

  const logoutUser = (): void => {
    localStorage.removeItem("token");
    toast.success(CustomToast(successIcon, successLogoutText), {
      position: "bottom-center",
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    dispatch(logoutActionCreator());
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
            {name && (
              <li>
                <p className="menu__greeting">Hola {name}!</p>
              </li>
            )}
            <li>
              <div className="menu__separator"></div>
            </li>
            {!name ? (
              <li>
                <NavLink to="/login">
                  <p className="menu__link">Login</p>
                </NavLink>
              </li>
            ) : (
              <li>
                <p className="menu__link" onClick={() => logoutUser()}>
                  Salir
                </p>
              </li>
            )}
            {!name ? (
              <li>
                <NavLink to="/register">
                  <p className="menu__link">Register</p>
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/user/my-summoners">
                  <p className="menu__link">Mis invocadores</p>
                </NavLink>
              </li>
            )}
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
