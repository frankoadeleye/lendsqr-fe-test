import "./styled.scss";

import { Logo } from "src/common/logo";
import Svgs from "src/assets/svgs";
import SidebarItem from "src/common/sidebar-item";
import { AuthenticateAction } from "src/redux/actions";
import { useDispatch } from "react-redux";
import CategoryHeader from "src/common/sidebar/category-header";
import { SidebarData } from "src/common/sidebar/data";
import SearchBar from "src/common/search-bar";
import NormalItem from "src/common/sidebar-item/normal";
const {
  CompanyLogo,
  backArrow,
  dashboardHomeInactive,
  guarantorInactive,
  sackInactive,
  logoutIcon,
} = Svgs;

function MobileSidebar({ open, onCloseIconClick }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(AuthenticateAction.logout());
  };
  return (
    <div
      className="mobile-sidebar-cover"
      style={{ width: open ? "100%" : "0%" }}>
      <div
        className="mobile-sidebar"
        style={{
          width: open ? "90%" : "0%",
          transition: open ? "width 0s" : "width 0.05s",
        }}>
        <div className="mobile-sidebar__close-icon" onClick={onCloseIconClick}>
          <img src={backArrow} alt="back-arrow" /> Hide
        </div>
        <div
          className="mobile-sidebar__logo"
          style={{
            display: open ? "flex" : "none",
            transition: open ? "width 0s" : "width 0.05s",
          }}>
          <Logo src={CompanyLogo} />
        </div>
        <div
          className="mobile-sidebar__links"
          style={{
            display: open ? "flex" : "none",
            flexDirection: "column",
            transition: open ? "width 0s" : "width 0.05s",
          }}>
          <CategoryHeader />
          <div className="mobile-sidebar__searchbar-wrap">
            <SearchBar />
          </div>
          <NormalItem
            icon={dashboardHomeInactive}
            specialClassName="logout"
            name="Dashboard"
          />
          <div className="partition">Customers</div>
          {SidebarData.map((data, index) => {
            return <SidebarItem data={data} key={index} />;
          })}
          <NormalItem
            icon={guarantorInactive}
            specialClassName="logout"
            name="Guarantors"
          />
          <NormalItem
            icon={sackInactive}
            specialClassName="logout"
            name="Loans"
          />
          <div className="horizontal-partition"></div>
          <NormalItem
            onClick={handleLogout}
            icon={logoutIcon}
            specialClassName="logout"
            name="Logout"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
