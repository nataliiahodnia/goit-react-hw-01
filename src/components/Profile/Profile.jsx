import css from "./Profile.module.css";

const renderStatItem = (label, value) => (
  <li key={label} className={css.statItem}>
    <span className={css.statLabel}>{label}</span>
    <span className={css.statValue}>{value}</span>
  </li>
);

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.userInfo}>
        <img src={image} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.statsList}>
        {renderStatItem("Followers", followers)}
        {renderStatItem("Views", views)}
        {renderStatItem("Likes", likes)}
      </ul>
    </div>
  );
};

export default Profile;
