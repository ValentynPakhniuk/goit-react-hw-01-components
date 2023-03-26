import { LiContainer, UserContainer } from './profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserContainer>
      <div>
        <img src={avatar} alt={username} width="200px" />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <LiContainer>
          <span>Followers</span>
          <span>{followers}</span>
        </LiContainer>
        <LiContainer>
          <span>Views</span>
          <span>{views}</span>
        </LiContainer>
        <LiContainer>
          <span>Likes</span>
          <span>{likes}</span>
        </LiContainer>
      </ul>
    </UserContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
