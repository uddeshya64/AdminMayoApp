import { Outlet, useLocation } from "react-router-dom";
import BottomTab from "../BottomTab";
import Wrapper from "./style"; // Import the styled Wrapper

const Layout = () => {
  const location = useLocation();
  const hiddenRoutes = ["/"];

  return (
    <Wrapper>
      <div className="layout">
        <div className="outlet">
          <Outlet />
        </div>
        {!hiddenRoutes.includes(location.pathname) && (
          <div className="bottom-tab">
            <BottomTab />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Layout;
