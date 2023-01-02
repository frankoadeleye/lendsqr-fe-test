import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "src/utils/protected-route";
import {
  LoginPage,
  NotFoundPage,
  DashboardUsersPage,
  DashboardUserDetailsPage,
} from "src/pages";
import { useDispatch, useSelector } from "react-redux";
import { GetUsersAction } from "src/redux/actions/users";
import { useEffect } from "react";

function MyRoutes() {
  const dispatch = useDispatch();

  interface RootState {
    loginUser: any;
  }

  const isLoggedIn = useSelector(
    (state: RootState) => state.loginUser.isLoggedIn
  );

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(GetUsersAction.all.start());
    }
  }, [dispatch, isLoggedIn]);

  const MyRoutes = () => {
    return (
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute user={isLoggedIn} />}>
          <Route path="/" element={<DashboardUsersPage />} />
          <Route path="/users/:userId" element={<DashboardUserDetailsPage />} />
        </Route>
      </Routes>
    );
  };

  return (
    <>
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </>
  );
}

export default MyRoutes;
