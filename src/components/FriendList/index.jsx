import { friendPropsType } from './friend-prop-types';
import PropTypes from 'prop-types';
import { FriendsListContainer } from './friends.styled';
import { FriendItems } from '../FriendItem/friendItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendsListContainer>
      {friends.map(friend => {
        return <FriendItems friend={friend} key={friend.id} />;
      })}
    </FriendsListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf({
    friendPropsType,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
