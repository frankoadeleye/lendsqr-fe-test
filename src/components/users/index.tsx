import "./styled.scss";
import DetailsCard from "src/common/details-card";
import { useSelector } from "react-redux";
import { store } from "src/redux/store";
import Svgs from "src/assets/svgs";

const { usersIcon, savingsIcon, loanIcon, activeUsersIcon } = Svgs;

function Users() {
  interface RootState {
    allUsers: any;
  }
  let allUsers: any = [];

  const isGot = useSelector((state: RootState) => state.allUsers?.isGot);

  if (isGot) {
    allUsers = store.getState().allUsers?.response?.data;
  }

  return (
    <div className="users">
      <div className="users__title">Users</div>
      <div className="users__cards-row">
        <div className="users-row-wrap">
          <DetailsCard
            icon={usersIcon}
            title={`users`}
            count={allUsers.length}
          />

          <DetailsCard
            icon={activeUsersIcon}
            title={`Active Users`}
            count={allUsers.length}
          />

          <DetailsCard
            icon={loanIcon}
            title={`Users with Loans`}
            count={allUsers.length}
          />

          <DetailsCard
            icon={savingsIcon}
            title={`Users with Savings`}
            count={allUsers.length}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
