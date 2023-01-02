import DashboardLayout from "src/common/dashboard-layout";
import { SetDocumentTitle } from "src/common/set-document-title";
import UserDetails from "src/components/user-details";
import { useSelector } from "react-redux";
import { store } from "src/redux/store";

function DashboardUserDetailsPage() {
  SetDocumentTitle("Dashboard User Details");

  interface RootState {
    allUsers: any;
  }

  let allUsers: any = [];

  const isGot = useSelector((state: RootState) => state.allUsers?.isGot);

  if (isGot) {
    allUsers = store.getState().allUsers?.response?.data;
  }

  return (
    <DashboardLayout>
      <>
        <UserDetails data={allUsers} />
      </>
    </DashboardLayout>
  );
}

export default DashboardUserDetailsPage;
