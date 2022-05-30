import "../Styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../Images/profile.jpg";

function Sidebar() {
  return  <Sticky topOffset={-80}>
  <div className="sidebar">
    <Profile
      username="aleks.popovic"
      caption="Aleksandar Popović"
      urlText="Switch"
      iconSize="big"
      image={image}
    />
    <Suggestions />
    <Footer />
  </div>
</Sticky>
}

export default Sidebar;
