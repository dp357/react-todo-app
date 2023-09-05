import { Outlet } from "react-router-dom";
import { useLocation, Navigate } from "react-router-dom";

const SetupLayout = () => {
  // Hooks
  const location = useLocation();

  if (location.key === "default") {
    return <Navigate replace to={"/"} />;
  } else {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
};

export default SetupLayout;
