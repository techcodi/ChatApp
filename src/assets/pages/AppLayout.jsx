import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import AboutArtist from "../../components/AboutArtist";
import "./AppLayout.css";
function AppLayout() {
  return (
    <div className="app_Layout">
      <div className="app_sidebar">
        <SideBar />
      </div>
      <div className="app_outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
