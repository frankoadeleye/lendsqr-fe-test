import Svgs from "src/assets/svgs";

const { usersIcon, savingsIcon, loanIcon, activeUsersIcon } = Svgs;

const sampleData = [
  {
    icon: usersIcon,
    title: "users",
    count: "2,453",
  },
  {
    icon: activeUsersIcon,
    title: "Active Users",
    count: "2,453 ",
  },
  {
    icon: loanIcon,
    title: "Users with Loans",
    count: "12,453",
  },
  {
    icon: savingsIcon,
    title: "Users with Savings",
    count: "102,453",
  },
];

export default sampleData;
