/* FriendListItem */
import css from './FriendListItem.module.css'; 

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friend}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48"  height="48"/>
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;