import Login from "src/components/login";
import { SetDocumentTitle } from "src/common/set-document-title";

function LoginPage() {
  SetDocumentTitle("Login");

  return (
    <>
      <Login />;
    </>
  );
}

export default LoginPage;
