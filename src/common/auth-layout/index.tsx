import Svgs from "src/assets/svgs";
import "./styled.scss";
const { CompanyLogo, AuthIllustration } = Svgs;

type AuthLayoutProps = {
  onFormSubmit?: React.FormEventHandler;
  children?: React.ReactNode;
  headerSubText?: string;
  headerText?: string;
};

function AuthLayout({
  children,
  headerSubText = "Enter details to login.",
  headerText = "Welcome!",
  onFormSubmit,
}: AuthLayoutProps) {
  return (
    <div className="auth-block">
      <div className="auth-logo">
        <img src={CompanyLogo} alt="logo" />
      </div>
      <div className="auth-content">
        <div className="auth-content__illustration">
          <img src={AuthIllustration} alt="auth-illustration" />
        </div>
        <form className="auth-content__form" onSubmit={onFormSubmit}>
          <div className="form-wrap">
            <header>{headerText}</header>
            <small>{headerSubText}</small>
            {children}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthLayout;
