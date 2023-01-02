import DashboardLayout from "src/common/dashboard-layout";
import Users from "src/components/users";
import UsersTable from "src/components/users-table";
import { SetDocumentTitle } from "src/common/set-document-title";

function DashboardUsersPage() {
  SetDocumentTitle("Dashboard Users");

  return (
    <DashboardLayout>
      <>
        <Users />
        <UsersTable />
      </>
    </DashboardLayout>
  );
}

export default DashboardUsersPage;
