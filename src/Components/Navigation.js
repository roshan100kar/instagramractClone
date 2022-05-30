import "../Styles/Navigation.scss";

import logo from "../Images/instagramLogo.png";
import searchIcon from "../Images/searchIcon.png";
import Menu from "./Menu.js";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="Container">
        <img className="logo" src={logo} alt="insta" />
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search logo" />
          <span className="searchText">search</span>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
