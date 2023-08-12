import PropTypes from "prop-types";
import styled from "./FriendList.module.css"
const FriendList = ({ friends }) => {
    return <section className={styled.friendList}>
        <ul className={styled.list}>
            
            {friends.map((friend) => (
        <li className={styled.item} key={friend.id}>
        <span className={styled.status}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill={friend.isOnline ? "green":"red"}>
  <circle cx="50" cy="50" r="50" />
</svg> 
  </span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <p className={styled.name}>{ friend.name}</p>
</li>
         ))}
        </ul>
    </section>
};
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    }))
}

export default FriendList;