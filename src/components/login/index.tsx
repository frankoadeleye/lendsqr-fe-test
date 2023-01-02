import AuthLayout from "src/common/auth-layout";
import FormInput from "src/common/form-input";
import "./styled.scss";
import { useEffect, useState, useCallback } from "react";
import HideShowPassword from "src/common/hide-show-password";
import { SubmitButton } from "src/common/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthenticateAction } from "src/redux/actions";
import AlertSnackbar from "src/common/alert-snackbar";
import AlertActions from "src/redux/actions/alert";

function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  interface RootState {
    loginUser: any;
    alert: any;
  }

  const isLoggedIn = useSelector(
    (state: RootState) => state.loginUser.isLoggedIn
  );

  const { open, message, type } = useSelector(
    (state: RootState) => state.alert
  );

  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState({
    email: false,
    password: false,
  });

  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [emailReady, setEmailReady] = useState(false);
  const [passwordReady, setPasswordReady] = useState(false);
  const [isSubmittable, setIsSubmittable] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [showPassword, setVisibility] = useState(false);
  const togglePasswordVisibility = () => {
    setVisibility(!showPassword);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    if (name === "email") {
      handleErrorEmail();
    }
    if (name === "password") {
      handleErrorPassword();
    }
  };

  const emailTest = useCallback(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  }, []);

  const handleErrorEmail = () => {
    if (fields.email === "") {
      errorFieldsTrue("email");
      setEmailErrorText("Email be cannot be empty");
      setEmailReady(false);
    } else if (!emailTest().test(fields.email)) {
      errorFieldsTrue("email");
      setEmailErrorText("Email format is incorrect");
      setEmailReady(false);
    } else {
      errorFieldsFalse("email");
      setEmailErrorText("");
      setEmailReady(true);
    }
  };

  const handleErrorPassword = () => {
    if (fields.password === "") {
      errorFieldsTrue("password");
      setPasswordErrorText("Password cannot be empty");
      setPasswordReady(false);
    } else if (fields.password.length < 6) {
      errorFieldsTrue("password");
      setPasswordErrorText("Password cannot be less than 6 character");
      setPasswordReady(false);
    } else {
      errorFieldsFalse("password");
      setPasswordErrorText("");
      setPasswordReady(true);
    }
  };

  useEffect(() => {
    if (emailReady && passwordReady) {
      setIsSubmittable(true);
    } else {
      setIsSubmittable(false);
    }
  }, [emailReady, passwordReady]);

  const errorFieldsTrue = (name: string) => {
    setError((prevState) => {
      return {
        ...prevState,
        [name]: true,
      };
    });
  };

  const errorFieldsFalse = (name: string) => {
    setError((prevState) => {
      return {
        ...prevState,
        [name]: false,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(AuthenticateAction.login.success(fields.email));
    }, 1000);
  };

  const clearData = () => {
    setFields({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        dispatch(AlertActions.success("Logged in, redirecting..."));
      });
      setTimeout(() => {
        navigate("/");
        clearData();
      }, 1000);
    }
    return () => {
      dispatch(AlertActions.clear());
    };
  }, [dispatch, isLoggedIn, navigate]);

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(AlertActions.clear());
  };

  return (
    <AuthLayout onFormSubmit={handleSubmit}>
      <>
        <AlertSnackbar
          open={open}
          handleClose={handleCloseSnackbar}
          type={type}
          message={message}
          duration={199500}
        />
        <FormInput
          name="email"
          onKeyUp={handleErrorEmail}
          type="text"
          onChange={handleChange}
          placeHolder="Type your email address"
          showError={hasError.email}
          errorText={emailErrorText}
          disabled={isLoading}
        />
        <FormInput
          name="password"
          onKeyUp={handleErrorPassword}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          placeHolder="Type your password"
          showError={hasError.password}
          errorText={passwordErrorText}
          disabled={isLoading}>
          {fields.password !== "" && (
            <HideShowPassword
              condition={showPassword}
              onToggle={togglePasswordVisibility}
            />
          )}
        </FormInput>
        <br />
        <SubmitButton
          disabled={!isSubmittable}
          text="Login"
          isLoading={isLoading}
        />
      </>
    </AuthLayout>
  );
}

export default Login;
