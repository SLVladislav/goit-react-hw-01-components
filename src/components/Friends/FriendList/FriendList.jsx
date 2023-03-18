import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendsListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.share({
      id: PropTypes.number.isRequired,
    })
  ),
};
