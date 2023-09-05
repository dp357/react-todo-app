import { Outlet } from "react-router-dom";
import { useProfileContext } from "context/ProfileContext";
import { Navigate } from "react-router-dom";

import PageNavbar from "components/layout/navbar/PageNavbar";

const PageLayout = () => {
  const { profile } = useProfileContext();

  if (profile.isActive) {
    return <Navigate replace to="/app/dashboard" />;
  } else {
    return (
      <div>
        <PageNavbar />
        <Outlet />
      </div>
    );
  }
};

export default PageLayout;
