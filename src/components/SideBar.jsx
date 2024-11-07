import "./Sidebar.css";
import { Link } from "react-router-dom";

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
        <Link to="chat">Chat</Link>
      </div>
    </div>
  );
}

export default SideBar;
