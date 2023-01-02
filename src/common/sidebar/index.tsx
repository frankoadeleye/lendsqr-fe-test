import "./styled.scss";
import { homeRouteData, SidebarData } from "./data";
import SidebarItem from "src/common/sidebar-item";
import CategoryHeader from "src/common/sidebar/category-header";
import { AuthenticateAction } from "src/redux/actions";
import { useDispatch } from "react-redux";
import NormalItem from "src/common/sidebar-item/normal";
import Svgs from "src/assets/svgs";
const { logoutIcon } = Svgs;

function Sidebar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(AuthenticateAction.logout());
  };

  return (
    <div className="sidebar">
      <div className="sidebar__links">
        <CategoryHeader />
        <SidebarItem data={homeRouteData} />
        <div className="partition">Customers</div>
        {SidebarData.map((data, index) => {
          return <SidebarItem data={data} key={index} />;
        })}
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
