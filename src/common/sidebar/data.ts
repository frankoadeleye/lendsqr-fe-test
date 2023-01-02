import Svgs from "src/assets/svgs";
const {
  usersIconActive,
  usersIconInactive,
  guarantorActive,
  guarantorInactive,
  sackActive,
  sackInactive,
  dashboardHomeInactive,
  dashboardHomeActive,
} = Svgs;

const SidebarData = [
  {
    name: "Users",
    route: "/",
    inactiveIcon: usersIconInactive,
    activeIcon: usersIconActive,
  },
  {
    name: "Guarantors",
    route: "/guarantors",
    inactiveIcon: guarantorInactive,
    activeIcon: guarantorActive,
  },

  {
    name: "Loans",
    route: "/loans",
    inactiveIcon: sackInactive,
    activeIcon: sackActive,
  },
];

const homeRouteData = {
  name: "Dashboard",
  route: "/home",
  inactiveIcon: dashboardHomeInactive,
  activeIcon: dashboardHomeActive,
};

export { SidebarData, homeRouteData };
