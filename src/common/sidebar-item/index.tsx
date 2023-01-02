import "./styled.scss";
import { NavLink } from "react-router-dom";

type SBItemProps = {
  data: {
    name?: string;
    route?: string;
    activeIcon?: any;
    inactiveIcon?: any;
  };
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  specialClassName?: string;
};

function SidebarItem({ data, onClick, specialClassName }: SBItemProps) {
  const { name, route, inactiveIcon, activeIcon } = data;

  let activeStyle = {
    background: "rgba(57,205,204, 0.06)",
    color: "rgba(33,63,125)",
    borderLeft: "3px solid #39CDCC",
  };

  let inactiveStyle = {
    background: "inherit",
    color: "rgb(33,63,125, 0.6)",
    borderLeft: "3px solid transparent",
  };

  return (
    <div onClick={onClick}>
      <NavLink
        className="nav-link"
        to={route}
        style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}>
        {({ isActive }) => (
          <>
            <img
              className="nav-link__icon"
              src={isActive ? activeIcon : inactiveIcon}
              alt={name}
            />
            <div className={`nav-link__name--${specialClassName}`}>{name}</div>
          </>
        )}
      </NavLink>
    </div>
  );
}
export default SidebarItem;
