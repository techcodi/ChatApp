import "./Sidebar.css";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";

function SideBar() {
  return (
    <div className="side_bar">
      <div className="user_profile">
        <div>
          <span></span>
          <b>😍WeeChat</b>
        </div>
        <b></b>
      </div>

      <div className="page_name">
        <Link to="chat">
          <HomeOutlinedIcon style={{ fontSize: "40px" }} />
        </Link>
        <Link to="social">
          <ConnectWithoutContactOutlinedIcon style={{ fontSize: "40px" }} />
        </Link>
        <Link to="notification">
          <NotificationsNoneOutlinedIcon style={{ fontSize: "40px" }} />
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
