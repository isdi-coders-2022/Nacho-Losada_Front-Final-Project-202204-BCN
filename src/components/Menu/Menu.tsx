import { useEffect, useState } from "react";
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

  const [toggler] = useState("toggler");
  let checkbox: any;

  const removeCheckedProperty = () => {
    if (checkbox.type === "checkbox") {
      checkbox.checked = false;
    }
  };

  const unckeck = () => {
    removeCheckedProperty();
    logoutUser();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkbox = document.querySelector(".toggler");
  }, [toggler]);

  return (
    <MenuStyled>
      <input type="checkbox" className={`${toggler}`} />
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
                  <p className="menu__link" onClick={removeCheckedProperty}>
                    Login
                  </p>
                </NavLink>
              </li>
            ) : (
              <li>
                <p className="menu__link" onClick={unckeck}>
                  Salir
                </p>
              </li>
            )}
            {!name ? (
              <li>
                <NavLink to="/register">
                  <p className="menu__link" onClick={removeCheckedProperty}>
                    Register
                  </p>
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/user/my-summoners">
                  <p className="menu__link" onClick={removeCheckedProperty}>
                    Mis invocadores
                  </p>
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
