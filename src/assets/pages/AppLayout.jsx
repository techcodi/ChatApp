import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";

import "./AppLayout.css";
function AppLayout() {
  return (
    <div className="app_Layout">
      <SideBar />

      <Outlet />
    </div>
  );
}

export default AppLayout;
