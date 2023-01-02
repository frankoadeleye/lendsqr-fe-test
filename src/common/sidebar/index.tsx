import "./styled.scss";
import { SidebarData } from "./data";
import SidebarItem from "src/common/sidebar-item";
import CategoryHeader from "src/common/sidebar/category-header";
import { AuthenticateAction } from "src/redux/actions";
import { useDispatch } from "react-redux";
import NormalItem from "src/common/sidebar-item/normal";
import Svgs from "src/assets/svgs";
const { guarantorInactive, logoutIcon, sackInactive, dashboardHomeInactive } =
  Svgs;

function Sidebar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(AuthenticateAction.logout());
  };

  return (
    <div className="sidebar">
      <div className="sidebar__links">
        <CategoryHeader />
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
  );
}

export default Sidebar;
