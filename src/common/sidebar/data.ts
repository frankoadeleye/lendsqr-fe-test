import Svgs from "src/assets/svgs";
const { usersIconActive, usersIconInactive } = Svgs;

const SidebarData = [
  {
    name: "Users",
    route: "/",
    inactiveIcon: usersIconInactive,
    activeIcon: usersIconActive,
  },
];

export { SidebarData };
