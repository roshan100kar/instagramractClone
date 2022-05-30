import "../Styles/cardMenu.scss";
import { ReactComponent as Inbox } from "../Images/inbox.svg";
import { ReactComponent as Comments } from "../Images/comments.svg";
import { ReactComponent as Notifications } from "../Images/notifications.svg";
import { ReactComponent as Bookmark } from "../Images/bookmark.svg";

function CardMenu() {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" />
        <Comments className="icon" />
        <Inbox className="icon" />
      </div>
      <Bookmark className="icon" />
    </div>
  );
}

export default CardMenu;