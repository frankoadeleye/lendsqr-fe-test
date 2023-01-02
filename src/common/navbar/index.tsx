import "./styled.scss";
import SearchBar from "src/common/search-bar";
import Svgs from "src/assets/svgs";
import UserAvatar from "src/common/avatar/index";
import { Logo } from "src/common/logo";

const { notificationIcon, hamburger, CompanyLogo } = Svgs;

function Navbar({ onIconClick }) {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Logo src={CompanyLogo} />
        </div>
        <div className="navbar__rest">
          <div className="navbar-menu-icon" onClick={onIconClick}>
            <img src={hamburger} alt="hamburger" />
          </div>
          <div className="navbar-searchbar-wrap">
            <SearchBar />
          </div>
          <div className="navbar-links">
            <div className="first-link">Docs</div>
            <img className="notification" src={notificationIcon} alt="bell" />
            <UserAvatar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
