import FooterStyle from "./FooterStyle";

const Footer = (): JSX.Element => {
  return (
    <>
      <FooterStyle>
        <ul className="footer__icon-list">
          <li>
            <img src="icons/home.svg" alt="" className="footer__icon" />
          </li>
          <li>
            <img src="icons/add.svg" alt="" className="footer__icon" />
          </li>
          <li>
            <img src="icons/heart-full.svg" alt="" className="footer__icon" />
          </li>
        </ul>
      </FooterStyle>
    </>
  );
};

export default Footer;
