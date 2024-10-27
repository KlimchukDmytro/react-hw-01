import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.image} src={image} alt="User avatar" width="200" />
        <h1>{name}</h1>
        <p className={s.link}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.item_span}>Followers: </span>
          <span className={s.item_valu}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.item_span}>Views: </span>
          <span className={s.item_valu}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.item_span}>Likes: </span>
          <span className={s.item_valu}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
