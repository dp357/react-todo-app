import { Outlet } from "react-router-dom";
import { useProfileContext } from "context/ProfileContext";
import { Navigate } from "react-router-dom";

import AppNavbar from "components/layout/navbar/AppNavbar";

const AppLayout = () => {
  const { profile } = useProfileContext();

  if (!profile.isActive) {
    return <Navigate replace to={"/login"} />;
  } else {
    return (
      <div>
        <AppNavbar />
        <Outlet />
      </div>
    );
  }
};

export default AppLayout;
