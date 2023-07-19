import styled from './Profile.module.css'
import PropTypes from "prop-types";
const Profile = ({ username, tag, location, avatar, stats, }) => (
    
    <div className={styled.profile}>
        <div className={styled.description}>
    <img
                src={avatar}
                alt="User avatar"
                className={styled.avatar}
    />
            <h2 className={styled.name}>{ username}</h2>
            <p className={styled.tag}>@{tag}</p>
            <p className={styled.location}>{ location}</p>
  </div>

  <ul className={styled.stats}>
    <li  className={styled.elem}>
      <span className={styled.label}>Followers</span>
                <span className={styled.quantity}>{ stats.followers}</span>
    </li>
    <li className={styled.elem}>
      <span className={styled.label}>Views</span>
                <span className={styled.quantity}>{ stats.views}</span>
    </li>
    <li className={styled.elem}>
      <span className={styled.label}>Likes</span>
                <span className={styled.quantity}>{ stats.likes}</span>
    </li>
  </ul>
</div>
    
    
)
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default Profile;