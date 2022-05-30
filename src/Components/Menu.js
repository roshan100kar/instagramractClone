import "../Styles/menu.scss";
import { ReactComponent as Home } from "../Images/home.svg";
import { ReactComponent as Inbox } from "../Images/inbox.svg";
import { ReactComponent as Explore } from "../Images/explore.svg";
import { ReactComponent as Notifications } from "../Images/notifications.svg";
import image from "../Images/profile.jpg";
import ProfileIcon from "./ProfileIcon";


function Menu() {
  return (
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notifications className="icon" />
      <ProfileIcon iconSize="small" image={image} storyBorder = {true} />
    </div>
  );
}

export default Menu;
