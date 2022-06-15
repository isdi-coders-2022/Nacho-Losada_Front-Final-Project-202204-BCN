import { NavLink } from "react-router-dom";
import FooterStyle from "./FooterStyle";

const Footer = (): JSX.Element => {
  return (
    <>
      <FooterStyle>
        <ul className="footer__icon-list">
          <li>
            <NavLink to="/summoners">
              <img
                src="/icons/home.svg"
                alt="home"
                width="40"
                height="40"
                className="footer__icon"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-summoner">
              <img
                src="/icons/add.svg"
                alt="add"
                width="40"
                height="40"
                className="footer__icon"
              />
            </NavLink>
          </li>
          <li>
            <img
              src="/icons/heart-full.svg"
              alt="favorites"
              width="40"
              height="40"
              className="footer__icon"
            />
          </li>
        </ul>
      </FooterStyle>
    </>
  );
};

export default Footer;
