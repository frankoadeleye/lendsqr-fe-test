import "./styled.scss";
import Svgs from "src/assets/svgs";
import { NavLink } from "react-router-dom";
const { CompanyLogo } = Svgs;

type LogoProps = {
  src?: any;
  route?: any;
};

function Logo({ src = { CompanyLogo }, route = "/" }: LogoProps) {
  return (
    <NavLink className="logo-nav-link" to={route}>
      <img src={src} alt="logo" />
    </NavLink>
  );
}

export { Logo };
