import { Span, Item } from './friend-item.styled';
import PropTypes from 'prop-types';
import { friendPropsType } from '../FriendList/friend-prop-types';

export const FriendItems = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <Item>
      <Span isHide={isOnline}></Span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </Item>
  );
};

FriendItems.propTypes = {
  friend: PropTypes.shape(friendPropsType).isRequired,
};
