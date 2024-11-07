import "./WelcomePage.css";
import { Link } from "react-router-dom";
function WelcomePage() {
  return (
    <div className="welcome_section">
      <form className="welcome_container">
        <h1>MeeChat</h1>
        <label htmlFor="name">Enter your username</label>
        <input type="text" id="name" />
      </form>
    </div>
  );
}

export default WelcomePage;
